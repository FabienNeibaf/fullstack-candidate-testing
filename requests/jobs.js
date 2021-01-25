const fetchJobs = async (filter) => {
  try {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ filter })
    })
    return response.json()
  } catch (err) {
    return 'Unable to fetch jobs'
  }
}

export { fetchJobs }
