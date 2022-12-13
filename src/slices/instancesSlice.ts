import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Instance } from '../types/instance'

interface InstancesState {
  instances: Instance[]
}

const initialState: InstancesState  = {
  instances: []
}

const findInstanceActive = (instances: Instance[]) =>
  instances.findIndex(instance => instance.active)

const instancesSlice = createSlice({
  name: 'instances',
  initialState: initialState,
  reducers: {}
})

export const getInstanceActive = (state: RootState) => 
  findInstanceActive(state.instances.instances)
export default instancesSlice.reducer