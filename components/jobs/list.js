import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'

import { Error } from '../error'
import { fetchJobs } from '../../requests'
import { JobGroup } from './jobGroup'
import { JobListHeader } from './listHeader'
import { SET_JOBS } from '../../constants/strings'

const JobList = () => {
  const [error, setError] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    fetchJobs()
      .then(updateState)
      .catch(setError)
  }, [])

  const updateState = (data) => {
    if (!data) return

    dispatch({ type: SET_JOBS, data })
  }

  return (
    <section className="bg-white p-4 border border-gray-200 flex-auto">
      <Error message={error} />
      <JobListHeader />
      <JobGroup />
    </section>
  )
}

export { JobList }
