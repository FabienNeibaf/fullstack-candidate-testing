import Image from 'next/image'
import React, { useState } from 'react'

import { JobFilter } from './jobs/filter'

const Menu = () => {
  const [viewFilter, setViewFilter] = useState(false)
  const handleClick = () => {
    setViewFilter(!viewFilter)
  }

  return (
    <div className="relative md:hidden">
      <button className="ml-3 leading-none" onClick={handleClick}>
        <Image src="/menu.png" width="15" height="15" alt="menu" />
      </button>
      <div className="absolute z-10 w-screen sm:w-96 top-10 shadow-lg">
        <JobFilter show={viewFilter} />
      </div>
    </div>
  )
}

export { Menu }
