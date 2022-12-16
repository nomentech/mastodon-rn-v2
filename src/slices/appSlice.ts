import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface AppState {
  domain: string
  token?: string
  config: {
    website: string,
    client_name: string,
    redirect_uris: string,
    scopes: string,
  }
  data?: {
    client_id: string
    client_secret: string
    redirect_uri: string
  }
}

const initialState: AppState = {
  domain: '',
  config: {
    website: '',
    client_name: 'mastodon-rn',
    redirect_uris: 'urn:ietf:wg:oauth:2.0:oob',
    scopes: 'read write follow push',
  },
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    updateAppDomain: (state, action) => {
      state.domain = action.payload
    },
    updateAppData: (state, action) => {
      state.data = action.payload
    },
    updateAppToken: (state, action) => {
      state.token = action.payload
    }
  }
})

export const getAppData = (state: RootState) => state.app.data
export const getAppConfig = (state: RootState) => state.app.config
export const getAppDomain = (state: RootState) => state.app.domain
export const getAppToken = (state: RootState) => state.app.token

export const { updateAppDomain, updateAppData, updateAppToken } = appSlice.actions
export default appSlice.reducer