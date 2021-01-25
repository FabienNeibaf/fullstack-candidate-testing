import { reduce } from 'lodash'
import React, { useEffect, useState } from 'react'

import { Error } from '../error'
import { fetchJobs } from '../../requests'
import { JobGroup } from './jobGroup'
import { JobListHeader } from './listHeader'

const JobList = () => {
  const [jobs, setJobs] = useState([])
  const [error, setError] = useState()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetchJobs()
      .then(init)
      .catch(setError)
  }, [])

  const init = (data) => {
    if (!data) return

    setJobs(data)
    const count = reduce(data, (res, cur) => res += cur.total_jobs_in_hospital, 0)
    setTotal(count)
  }

  return (
    <section className="bg-white p-4 border border-gray-200 flex-auto">
      <Error message={error} />
      <JobListHeader total={total} />
      <JobGroup jobs={jobs} />
    </section>
  )
}

export { JobList }
