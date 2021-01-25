import { combineReducers } from '@reduxjs/toolkit'

import { jobsReducer } from './jobs'

const rootReducer = combineReducers({ jobs: jobsReducer })

export default rootReducer
