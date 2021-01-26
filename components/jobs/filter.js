import { map } from 'lodash'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import { Error } from '../error'
import { fetchFilters } from '../../requests'
import { JobFilterCard } from './filterCard'

const JobFilter = ({ show }) => {
  const [filters, setFilters] = useState({})
  const [error, setError] = useState()

  useEffect(() => {
    fetchFilters()
      .then(setFilters)
      .catch(setError)
  }, [])

  if (!show) return null

  return (
    <section>
      <Error message={error} />
      <ul className="flex flex-wrap">
        {map(filters, (options, key) =>
          <JobFilterCard key={key} category={key} options={options} />
        )}
      </ul>
    </section>
  )
}

JobFilter.propTypes = {
  show: PropTypes.bool
}

export { JobFilter }
