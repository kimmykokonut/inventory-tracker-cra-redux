import { createSlice } from "@reduxjs/toolkit";
import flavorArray from './../flavorList';

let startingFlavorArray = flavorArray;

const menuListSlice = createSlice({
  name: 'menuList',
  initialState: startingFlavorArray,
  reducers: {
    sellPint: (state, action) => {
      const { name, description, imgSrc, alt, available, allergens, id, price, qtyInStock } = action.payload;
      if (state[id]) {
        state[id] = {
          ...state[id],
        name,
        description,
        imgSrc,
        alt,
        available,
        allergens,
        price,
        qtyInStock,
        id
        };
      }
    },
    createFlavor: (state, action) => {
      const newFlavor = action.payload;
      state[newFlavor.id] = newFlavor;
    },
    editFlavor: (state, action) => {
      const editedFlavor = action.payload;
      state[editedFlavor.id] = editedFlavor;
      // const editedFlavorList = state
      // .filter(flavor => flavor.id !== id)
      // .concat(action.payload);
      // return editedFlavorList;
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