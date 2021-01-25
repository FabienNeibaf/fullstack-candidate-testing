import React from 'react'

import Link from 'next/link'

const Header = () => (
  <header>
    <h1>Health Explore</h1>
    <ul>
      <li>Profile</li>
      <li>Jobs</li>
      <li>Professional Network</li>
      <li>Lounge</li>
      <li>Salary</li>
    </ul>
    <button>Create Job</button>
    <div>
      <button>JO</button>
      <Link href="/">Logout</Link>
    </div>
  </header>
)

export { Header }
