import jobs from '../../data/jobs'

import { getJobs } from '../../helpers/jobs'

export default async (req, res) => {
  res.statusCode = 200

  const data = getJobs(req, jobs)

  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))

  res.json(data)
}
