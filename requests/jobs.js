const fetchJobs = async () => {
  try {
    const response = await fetch('/api/jobs')
    return response.json()
  } catch (err) {
    return 'Unable to fetch jobs'
  }
}

export { fetchJobs }
