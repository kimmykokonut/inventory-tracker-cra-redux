import { configureStore } from "@reduxjs/toolkit";
import formVisibleOnPageSliceReducer from "./formVisibleOnPageSlice";
import menuListSliceReducer from "./menuListSlice";
import selectedFlavorSliceReducer from "./selectedFlavorSlice";
import editingSliceReducer from "./editingSlice";
import restockSliceReducer from "./restockSlice";

export const store = configureStore({
  reducer: {
    formVisibleOnPage: formVisibleOnPageSliceReducer,
    menuList: menuListSliceReducer,
    selectedFlavor: selectedFlavorSliceReducer,
    editing: editingSliceReducer,
    restock: restockSliceReducer,
  }
});