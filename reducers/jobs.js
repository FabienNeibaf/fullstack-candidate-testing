import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  filter: {},
}

const jobsReducer = createReducer(initialState, {
  SET_JOBS: (state, action) => ({
    ...state,
    list: action.data,
  }),
  SET_JOB_FILTER: (state, action) => ({
    ...state,
    filter: action.filter
  })
})

export { jobsReducer }
