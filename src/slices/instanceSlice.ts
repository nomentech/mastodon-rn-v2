import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface InstanceState {
  title: string
  uri: string
  description: string
  short_description: string
  languages: string[]
  thumbnail: string
  version: string
  stats:{
    domain_count: number,
    status_count: number,
    user_count: number
    }
}

const initialState: InstanceState | null = null

const instanceSlice = createSlice({
  name: 'instance',
  initialState: initialState,
  reducers: {
    updateInstance: (state, action) => {
      state = action.payload
    }
  }
})

export const getInstance = (state: RootState) => state.instance

export const { updateInstance } = instanceSlice.actions
export default instanceSlice.reducer