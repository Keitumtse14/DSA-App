import { createSlice } from '@reduxjs/toolkit'

export interface CompletedDataStructure {
  value: boolean
}

const initialState: CompletedDataStructure = {
  value: false,
}

export const completedDataStructureSlice = createSlice({
  name: 'completed state',
  initialState,
  reducers: {
    completed: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { completed } = completedDataStructureSlice.actions

export default completedDataStructureSlice.reducer