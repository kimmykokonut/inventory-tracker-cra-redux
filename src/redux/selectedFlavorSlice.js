import { createSlice } from '@reduxjs/toolkit';

const selectedFlavorSlice = createSlice({
  name: 'selectedFlavor',
  initialState: null,
  reducers: {
    setFlavor: (state, action) =>
      action.payload,
    clearSelectedFlavor: () => null,
  },
});
export const { setFlavor, clearSelectedFlavor } = selectedFlavorSlice.actions;
export default selectedFlavorSlice.reducer;
export const selectedFlavorSelector = (state) => state.selectedFlavor 