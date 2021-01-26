<<<<<<< HEAD
import Image from 'next/image'
=======
>>>>>>> 2087c4c9b393282526b872f72ea5f95d8a03261c
import React from 'react'

import { getInitials } from '../utils/string'

const Header = () => (
  <header className="bg-white flex items-center uppercase border-b border-gray-200 font-bold">
<<<<<<< HEAD
    <button className="ml-3 leading-none">
      <Image src="/menu.png" width="15" height="15" alt="menu" />
    </button>
    <h1 className="p-4 w-48 text-blue-500 flex-auto">
      <a href="/">Health Explore</a>
    </h1>
    <ul className="hidden lg:flex flex-auto items-center justify-center">
=======
    <h1 className="p-4 w-48 text-blue-500">
      Health Explore
    </h1>
    <ul className="flex flex-auto items-center justify-center">
>>>>>>> 2087c4c9b393282526b872f72ea5f95d8a03261c
      <li className="p-4">Profile</li>
      <li className="p-4">Jobs</li>
      <li className="p-4">Professional Network</li>
      <li className="p-4">Lounge</li>
      <li className="p-4">Salary</li>
    </ul>
<<<<<<< HEAD
    <button className="hidden lg:flex px-4 py-2 font-bold uppercase text-blue-500 border rounded-md border-blue-500 flex">
=======
    <button className={
      'px-4 py-2 font-bold uppercase text-blue-500 border rounded-md border-blue-500 flex'
    }>
>>>>>>> 2087c4c9b393282526b872f72ea5f95d8a03261c
      Create Job
    </button>
    <button className="mx-2 sm:mr-4 sm:ml-6 w-8 py-1 font-bold bg-blue-500 text-white rounded-full">
      {getInitials('Fabien Rakotomampiandra')}
    </button>
<<<<<<< HEAD
    <button className="hidden lg:flex p-2 font-bold uppercase">
=======
    <button className="p-2 font-bold uppercase">
>>>>>>> 2087c4c9b393282526b872f72ea5f95d8a03261c
      Logout
    </button>
  </header>
)

export { Header }
