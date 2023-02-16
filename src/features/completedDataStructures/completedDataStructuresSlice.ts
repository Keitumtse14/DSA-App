import { createSlice } from "@reduxjs/toolkit";

interface CompletedDataStructures {
  [dataStructure: string]: boolean;
}

const initialState: CompletedDataStructures = {};

const completedDataStructuresSlice = createSlice({
  name: "completedDataStructures",
  initialState,
  reducers: {
    completeDataStructure: (state, action) => {
      const { dataStructure } = action.payload;
      state[dataStructure] = true;
    },
    resetDataStructure: (state, action) => {
      const { dataStructure } = action.payload;
      state[dataStructure] = false;
    },
  },
});

export const { completeDataStructure, resetDataStructure } = completedDataStructuresSlice.actions;

export default completedDataStructuresSlice.reducer;
