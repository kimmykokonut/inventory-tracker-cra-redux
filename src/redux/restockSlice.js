import { createSlice } from "@reduxjs/toolkit";

const restockSlice = createSlice({
  name: 'restock',
  initialState: false,
  reducers: {
    setRestockTrue: (state, action) => {
      return true;
    },
    setRestockFalse: (state, action) => {
      return false;
    },
  }
});

export default restockSlice.reducer;
export const { setRestockTrue, setRestockFalse } = restockSlice.actions;
export const restockSelector = (state) => state.restock 