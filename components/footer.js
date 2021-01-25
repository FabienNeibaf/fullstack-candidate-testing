import React from 'react'

const Footer = () => (
  <footer className="flex bg-white flex-wrap p-2">
    <section className="p-2">
      <h2 className="font-bold">About us</h2>
      <p>
        We are a team of nurses, doctors, technologists and executives
        {' '}
        dedicated to help nurses find jobs that they love.
      </p>
      <p>All copyrights reserved &copy; 2020 - Health Explore</p>
    </section>
    <section className="p-2">
      <h2 className="font-bold">Sitemap</h2>
      <ul>
        <li>Nurses</li>
        <li>Employers</li>
        <li>Social Networking</li>
        <li>Jobs</li>
      </ul>
    </section>
    <section className="p-2">
      <h2 className="font-bold">Privacy</h2>
      <ul>
        <li>Terms of use</li>
        <li>Privacy policy</li>
        <li>Cookie policy</li>
      </ul>
    </section>
  </footer>
)

export { Footer }
