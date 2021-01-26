import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty, map } from 'lodash'

import { JobGroupItem } from './jobGroupItem'
import { sortJobGroups } from '../../helpers/jobs'

const JobGroup = () => {
  const { list, sorting } = useSelector((state) => state.jobs)

  if (isEmpty(list)) return null

  const sortedList = sortJobGroups(list, sorting.Location)
  return (
    <ul>
      {map((sortedList), (group) => <JobGroupItem key={group.name} group={group} />)}
    </ul>
  )
}

export { JobGroup }
