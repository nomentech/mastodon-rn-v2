import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import instanceReducer from './slices/instancesSlice'
import { apiSlice } from './slices/apiSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    instances: instanceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>