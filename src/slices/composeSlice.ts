import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface ComposeState {
  showCW: boolean,
  visibility: string
}

const initialState: ComposeState = {
  showCW: false,
  visibility: 'public'
}

const composeSlice = createSlice({
  name: 'compose',
  initialState: initialState,
  reducers: {
    updateShowCW: (state, action) => {
      state.showCW = action.payload
    },
    updateVisibility: (state, action) => {
      state.visibility = action.payload
    }
  }
})

export const getShowCW = (state: RootState) => state.compose.showCW
export const getVisibility = ( state: RootState) => state.compose.visibility

export const { updateShowCW, updateVisibility } = composeSlice.actions
export default composeSlice.reducer