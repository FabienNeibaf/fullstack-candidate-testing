import { map } from 'lodash'
import React, { useEffect, useState } from 'react'

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
    <section className="hidden sm:block sm:flex-none">
      <div>{error}</div>
      <ul>
        {map(filters, (options, key) =>
          <JobFilterCard key={key} category={key} options={options} />
        )}
      </ul>
    </section>
  )
}

export { JobFilter }
