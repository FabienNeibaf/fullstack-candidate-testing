import PropTypes from 'prop-types'
import React from 'react'

const JobCardDetails = ({ show, item }) => {
  if (!show) return null

  return (
    <div className="flex flex-wrap sm:flex-nowrap">
      <div className="flex-auto">
        <p className="flex py-2">
          <span className="font-bold w-2/6">Department</span>
          <span className="w-3/6">{item.department?.join(', ')}</span>
        </p>
        <p className="flex py-2">
          <span className="font-bold w-2/6">Hours / shifts</span>
          <span className="w-3/6">{item.hours} hours / {item.work_schedule}</span>
        </p>
        <p className="flex py-2">
          <span className="font-bold w-2/6">Summary</span>
          <span className="w-3/6">{item.description}</span>
        </p>
      </div>
      <div className="flex flex-col sm:w-32 sm:flex-none justify-center items-end">
        <button className="bg-blue-500 text-white rounded-md px-3 py-1 mb-3">
          Job details
        </button>
        <button className="border border-blue-500 text-blue-500 rounded-md px-3 py-1">
          Save Job
        </button>
      </div>
    </div>
  )
}

JobCardDetails.propTypes = {
  item: PropTypes.shape().isRequired,
  show: PropTypes.bool.isRequired
}

export { JobCardDetails }
