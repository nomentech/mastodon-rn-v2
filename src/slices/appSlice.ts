import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface AppState {
  domain: string
}

const initialState: AppState = {
  domain: ''
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    updateAppDomain: (state, action) => {
      state.domain = action.payload
    }
  }
})

export const getAppDomain = (state: RootState) => state.app.domain
export const { updateAppDomain } = appSlice.actions
export default appSlice.reducer