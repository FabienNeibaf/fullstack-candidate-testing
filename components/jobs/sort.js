import PropTypes from 'prop-types'
import React from 'react'

const JobSort = ({ show }) => (
  <div className={`flex flex-auto justify-end items-center ${show}`}>
    <span className="text-gray-400 pr-2">
      Sort by
    </span>
    <ul className="flex">
      <li className="p-2">Location</li>
      <li className="p-2">Role</li>
      <li className="p-2">Department</li>
      <li className="p-2">Education</li>
      <li className="p-2">Experience</li>
    </ul>
  </div>
)

JobSort.propTypes = {
  show: PropTypes.string.isRequired
}

export { JobSort }
