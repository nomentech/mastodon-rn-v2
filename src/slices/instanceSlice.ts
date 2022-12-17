import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState: any = null

const instanceSlice = createSlice({
  name: 'instance',
  initialState: initialState,
  reducers: {
    updateInstance: (state, action) => state = action.payload
  }
})

export const getInstance = (state: RootState) => state.instance

export const { updateInstance } = instanceSlice.actions
export default instanceSlice.reducer