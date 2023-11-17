import { configureStore } from '@reduxjs/toolkit'
import sidenavReducer from './slices/sidenavSlice'

const store = configureStore({
  reducer: {
    sidenav: sidenavReducer
  },
})
export default store