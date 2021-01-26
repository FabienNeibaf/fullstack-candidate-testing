import Image from 'next/image'
import React from 'react'

import { getInitials } from '../utils/string'

const Header = () => (
  <header className="bg-white flex items-center uppercase border-b border-gray-200 font-bold">
    <button className="ml-3 leading-none">
      <Image src="/menu.png" width="15" height="15" alt="menu" />
    </button>
    <h1 className="p-4 w-48 text-blue-500 flex-auto">
      <a href="/">Health Explore</a>
    </h1>
    <ul className="hidden lg:flex flex-auto items-center justify-center">
      <li className="p-4">Profile</li>
      <li className="p-4">Jobs</li>
      <li className="p-4">Professional Network</li>
      <li className="p-4">Lounge</li>
      <li className="p-4">Salary</li>
    </ul>
    <button className="hidden lg:flex px-4 py-2 font-bold uppercase text-blue-500 border rounded-md border-blue-500">
      Create Job
    </button>
    <button className="mx-2 sm:mr-4 sm:ml-6 w-8 py-1 font-bold bg-blue-500 text-white rounded-full">
      {getInitials('Fabien Rakotomampiandra')}
    </button>
    <button className="hidden lg:flex p-2 font-bold uppercase">
      Logout
    </button>
  </header>
)

export { Header }
