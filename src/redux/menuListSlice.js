import { createSlice } from "@reduxjs/toolkit";
import flavorArray from './../flavorList';

let startingFlavorArray = flavorArray;

const menuListSlice = createSlice({
  name: 'menuList',
  initialState: startingFlavorArray,
  reducers: {
    sellPint: (state, action) => {
      const { id } = action.payload;
      const flavorToSell = state.find(flavor => flavor.id === id);
      if (flavorToSell && flavorToSell.qtyInStock > 0) {
        flavorToSell.qtyInStock -= 1;
      }
    },
    createFlavor: (state, action) => {
      state.push(action.payload);
    }
  }
});
export default menuListSlice.reducer;
export const { sellPint, createFlavor } = menuListSlice.actions;
export const menuListSelector = (state) => state.menuList;