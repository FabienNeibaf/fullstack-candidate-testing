import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  filter: {},
  sorting: {},
}

const jobsReducer = createReducer(initialState, {
  SET_JOBS: (state, action) => ({
    ...state,
    list: action.data,
  }),
  SET_JOB_FILTER: (state, action) => ({
    ...state,
    filter: action.filter
  }),
  SORT_JOBS: (state, action) => ({
    ...state,
    sorting: action.sorting
  })
})

export { jobsReducer }
