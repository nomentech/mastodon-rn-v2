import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState = null

const accountSlice = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    updateAccount: (state, action) => state = action.payload
  }
})

export const getAccount = (state: RootState) => state.account

export const { updateAccount } = accountSlice.actions
export default accountSlice.reducer