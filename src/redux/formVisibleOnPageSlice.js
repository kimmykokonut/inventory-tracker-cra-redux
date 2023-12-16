import { createSlice } from "@reduxjs/toolkit";

const formVisibleOnPageSlice = createSlice({
  name: 'formVisibleOnPage',
  initialState: false,
  reducers: {
    setFormTrue: (state, action) => {
      return true;
    },
    setFormFalse: (state, action) => {
      return false;
    },
    toggleForm: (state, action) => {
      return !state;
    }
  }
});

export default formVisibleOnPageSlice.reducer;
export const { setFormFalse, setFormTrue, toggleForm } = formVisibleOnPageSlice.actions;
export const formVisibleOnPageSelector = (state) => state.formVisibleOnPage