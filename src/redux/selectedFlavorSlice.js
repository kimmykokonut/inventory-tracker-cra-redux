import { createSlice } from '@reduxjs/toolkit';

const selectedFlavorSlice = createSlice({
  name: 'selectedFlavor',
  initialState: null,
  reducers: {
    selectFlavor: (state, action) =>
      action.payload,
    clearSelectedFlavor: () => null,
  },
});
export const { selectFlavor, clearSelectedFlavor } = selectedFlavorSlice.actions;
export default selectedFlavorSlice.reducer;
export const selectedFlavorSelector = (state) => state.selectedFlavor 