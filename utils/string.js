import { reduce } from 'lodash'

const getInitials = (name) => {
  const parts = name.split(' ').slice(0, 2)
  return reduce(parts, (res, part) => res + part[0], '')
}

export { getInitials }
