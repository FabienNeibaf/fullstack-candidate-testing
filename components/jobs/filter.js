import { map } from 'lodash'
import React, { useEffect, useState } from 'react'

import { Error } from '../error'
import { fetchFilters } from '../../requests'
import { JobFilterCard } from './filterCard'

const JobFilter = () => {
  const [filters, setFilters] = useState({})
  const [error, setError] = useState()

  useEffect(() => {
    fetchFilters()
      .then(setFilters)
      .catch(setError)
  }, [])

  return (
    <section className="hidden md:block md:flex-none md:w-72 lg:w-96">
      <Error message={error} />
      <ul className="flex flex-wrap">
        {map(filters, (options, key) =>
          <JobFilterCard key={key} category={key} options={options} />
        )}
      </ul>
    </section>
  )
}

export { JobFilter }
