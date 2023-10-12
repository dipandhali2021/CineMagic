import { configureStore } from '@reduxjs/toolkit'

import homeSlice from './homeSlice'
import updateSlice from './updateSlice'

export const store = configureStore({
  reducer: {
    home: homeSlice,
    list: updateSlice,
  },
})