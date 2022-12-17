import { configureStore, Reducer } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import appReducer from './slices/appSlice'
import accountReducer from './slices/accountSlice'
import instanceReducer from './slices/instanceSlice'
import { apiSlice } from './slices/apiSlice'

const prefix = 'mastodon'

const appPersistConfig = {
  key: 'app',
  prefix,
  storage: AsyncStorage
}

const accountPersistConfig = {
  key: 'account',
  prefix,
  storage: AsyncStorage
}

const instancePersistConfig = {
  key: 'instance',
  prefix,
  storage: AsyncStorage
}

const store = configureStore({
  reducer: {
    app: persistReducer(appPersistConfig, appReducer) as Reducer,
    account: persistReducer(accountPersistConfig, accountReducer) as Reducer,
    instance: persistReducer(instancePersistConfig, instanceReducer) as Reducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(apiSlice.middleware)
})

const persistor = persistStore(store)
export { store, persistor }

export type RootState = ReturnType<typeof store.getState>