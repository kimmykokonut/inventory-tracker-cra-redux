import { createSlice } from "@reduxjs/toolkit";
import flavorArray from './../flavorList';

let startingFlavorArray = flavorArray;

const menuListSlice = createSlice({
  name: 'menuList',
  initialState: startingFlavorArray,
  reducers: {
    sellPint: (state, action) => {
      const flavorID = action.payload;
      const flavorToSell = state[flavorID];

      if (flavorToSell && flavorToSell.qtyInStock > 0) {
        flavorToSell.qtyInStock -= 1;
      }

    },
    createFlavor: (state, action) => {
      const newFlavor = action.payload;
      state[newFlavor.id] = newFlavor;
    },
    editFlavor: (state, action) => {
      const editedFlavor = action.payload;
      state[editedFlavor.id] = editedFlavor;
    },
    setRestock: (state, action) => {
      const { id, restockQty } = action.payload;
      const flavorToRestock = state.find(flavor => flavor.id === id);
      if (flavorToRestock) {
        flavorToRestock.qtyInStock += restockQty;
      }
    }
  }
});

export default menuListSlice.reducer;
export const { sellPint, createFlavor, editFlavor, setRestock } = menuListSlice.actions;
export const menuListSelector = (state) => state.menuList;