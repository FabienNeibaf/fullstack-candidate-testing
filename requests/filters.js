const fetchFilters = async () => {
  try {
    const response = await fetch('/api/filters')
    return response.json()
  } catch (err) {
    throw 'Unable to fetch filters'
  }
}

export { fetchFilters }
