import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface ComposeState {
  showCW: boolean
  visibility: string
  maxLength: number
  charsLeft: number
}

const initialState: ComposeState = {
  showCW: false,
  visibility: 'public',
  maxLength: 500,
  charsLeft: 500
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
    },
    updateCharsLeft: (state, action) => {
      state.charsLeft = action.payload
    }
  }
})

export const getShowCW = (state: RootState) => state.compose.showCW
export const getVisibility = ( state: RootState) => state.compose.visibility
export const getMaxLength = (state: RootState) => state.compose.maxLength
export const getCharsLeft = (state: RootState) => state.compose.charsLeft

export const { updateShowCW, updateVisibility, updateCharsLeft } = composeSlice.actions
export default composeSlice.reducer