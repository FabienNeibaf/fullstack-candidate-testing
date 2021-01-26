import PropTypes from 'prop-types'
import React from 'react'

const JobCardDetails = ({ show, item }) => {
  if (!show) return null

  return (
    <div className="flex flex-wrap sm:flex-nowrap">
      <div className="flex-auto">
        <div className="md:flex py-2">
          <h4 className="font-bold w-2/6">Department</h4>
          <span className="w-3/6">{item.department?.join(', ')}</span>
        </div>
        <div className="md:flex py-2">
          <h4 className="font-bold w-2/6">Hours / shifts</h4>
          <span className="w-3/6">{item.hours} hours / {item.work_schedule}</span>
        </div>
        <div className="md:flex py-2">
          <h4 className="font-bold w-2/6">Summary</h4>
          <span className="w-3/6">{item.description}</span>
        </div>
      </div>
      <div className="md:flex flex-col sm:w-32 sm:flex-none justify-center items-end">
        <button className="bg-blue-500 text-white rounded-md px-3 py-1 mb-3">
          Job details
        </button>
        <button className="ml-4 md:ml-0 border border-blue-500 text-blue-500 rounded-md px-3 py-1">
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
