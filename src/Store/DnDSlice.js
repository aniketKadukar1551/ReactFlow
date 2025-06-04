import { createSlice } from "@reduxjs/toolkit";

const DnDSlice = createSlice({
  name: 'dnd',
  initialState: {
    type: null,
  },
  reducers: {
    addType: (state, action) => {
      state.type = action.payload
    }
  },
})

export const { addType } = DnDSlice.actions
export default DnDSlice.reducer
