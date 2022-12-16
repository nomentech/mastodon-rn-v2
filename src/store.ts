import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import accountReducer from './slices/accountSlice'
import instanceReducer from './slices/instanceSlice'
import { apiSlice } from './slices/apiSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    account: accountReducer,
    instance: instanceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>