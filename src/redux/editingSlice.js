import { createSlice } from "@reduxjs/toolkit";

const editingSlice = createSlice({
  name: 'editing',
  initialState: false,
  reducers: {
    setEditTrue: (state, action) => {
      return true;
    },
    setEditFalse: (state, action) => {
      return false;
    },
  }
});

export default editingSlice.reducer;
export const { setEditFalse, setEditTrue } = editingSlice.actions;
export const editingSelector = (state) => state.editing;