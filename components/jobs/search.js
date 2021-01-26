import React, { useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

import { SET_JOB_FILTER } from '../../constants/strings'

const JobSearch = () => {
  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (e) => {
    const searchKey = e.target.value
    setSearchInput(searchKey)
    const filter = { searchKey }
    dispatch({ type: SET_JOB_FILTER, filter })
  }

  const handleClick = () => {
    setSearchInput('')
    dispatch({ type: SET_JOB_FILTER, filter: {} })
  }

  return (
    <div className="flex flex-none bg-white w-full md:mb-4 border border-gray-200 items-center relative">
      <span className="px-3 pt-1">
        <Image src="/search.png" width="15" height="15" alt="search" />
      </span>
      <input
        type="text"
        value={searchInput}
        className="flex-auto p-2"
        onChange={handleChange}
        placeholder="Search for any job, title, keywords or company"
      />
      <button
        className="text-xs bg-gray-400 font-semibold p-1 mx-2 rounded-sm text-white"
        onClick={handleClick}
      >
        CLEAR
      </button>
    </div>
  )
}

export { JobSearch }
