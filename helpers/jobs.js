import { filter, isEmpty, map, orderBy, values } from 'lodash'

const sortJobGroups = (groups, order) => {
  if (!order) return groups

  return orderBy(groups, ['name'], [order])
}

const sortJobItems = (items, sorting) => {
  if (isEmpty(sorting)) return items

  const sortMap = {
    Role: 'job_title',
    Department: 'department',
    Education: 'required_skills',
    Experience: 'experience'
  }

  const funcs = map(sorting, (val, key) => {
    if (/Department|Education/.test(key)) {
      return (obj) => obj[sortMap[key]][0]
    }
    return (obj) => obj[sortMap[key]]
  })

  const orders = values(sorting)

  return orderBy(items, funcs, orders)
}

const filterCategoryItems = (items, category) => {
  const { key, value } = category
  return filter(items, (item) => {
    return key === 'department' ? item[key].includes(value) : item[key] === value
  })
}

const filterSearchItems = (items, searchKey) => {
  const key = searchKey.toLowerCase()
  return filter(items, (item) => {
    if (item.name.toLowerCase().includes(key)) return true
    if (item.job_title.toLowerCase().includes(key)) return true
    if (item.job_type.toLowerCase().includes(key)) return true
    if (item.city.toLowerCase().includes(key)) return true
    if (item.department.join(' ').toLowerCase().includes(key)) return true
    if (item.work_schedule.toLowerCase().includes(key)) return true
    return false
  })
}

const withoutEmptyItems = (jobs) => filter(jobs, ({ items }) => !isEmpty(items))

const filterJobsByCategory = (jobs, category) => {
  if (!category?.key || !category?.value) return jobs

  const res = map(jobs, (job) => ({
    ...job,
    items: filterCategoryItems(job.items, category)
  }))

  return withoutEmptyItems(res)
}

const filterJobsBySearchKey = (jobs, searchKey) => {
  if (!searchKey) return jobs

  const res = map(jobs, (job) => ({
    ...job,
    items: filterSearchItems(job.items, searchKey)
  }))

  return withoutEmptyItems(res)
}

const getJobs = (req, jobs) => {
  const { filter } = req.body
  if (!filter) return jobs

  const { searchKey, category } = filter
  if (category) return filterJobsByCategory(jobs, category)
  if (searchKey) return filterJobsBySearchKey(jobs, searchKey)

  return jobs
}

export { getJobs, sortJobGroups, sortJobItems }
