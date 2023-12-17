import React from "react";
import Menu from "./Menu";
import AddFlavorForm from "./AddFlavorForm";
import FlavorDetail from "./FlavorDetail";
import EditFlavorForm from "./EditFlavorForm";
import RestockForm from "./RestockForm";

import { useSelector } from "react-redux";

import { formVisibleOnPageSelector, setFormFalse, toggleForm } from "../redux/formVisibleOnPageSlice";
import { sellPint, createFlavor, editFlavor, menuListSelector, setRestock } from "../redux/menuListSlice";
import { clearSelectedFlavor, setFlavor, selectedFlavorSelector } from "../redux/selectedFlavorSlice";
import { editingSelector, setEditFalse, setEditTrue } from "../redux/editingSlice";
import { restockSelector, setRestockFalse, setRestockTrue } from "../redux/restockSlice";

import { useDispatch } from "react-redux";

import bodyStyle from "./../IceCreamControl.css";

const IceCreamControl = () => {

const dispatch = useDispatch();

const formVisibleOnPage = useSelector(formVisibleOnPageSelector);
const menuList = useSelector(menuListSelector);
const selectedFlavor = useSelector(selectedFlavorSelector);
const editing = useSelector(editingSelector);
const restock = useSelector(restockSelector);

const handleClick = () => {
  if (selectedFlavor != null) {
    dispatch(setFormFalse());
    dispatch(clearSelectedFlavor());
    dispatch(setEditFalse());
    dispatch(setRestockFalse());
  } else {
    dispatch(toggleForm());
  }
}
const handleBuyClick = (flavorID) => {
  dispatch(sellPint(flavorID));
  dispatch(clearSelectedFlavor());
}
const handleCreateFlavor = (newFlavor) => {
  dispatch(createFlavor(newFlavor));
  dispatch(setFormFalse());
}
const handleChangingSelectFlavor = (id) => {
  const chosenFlavor = menuList[id];
  dispatch(setFlavor(chosenFlavor));
}
const handleEditClick = () => {
  dispatch(setEditTrue());
}
const handleEditFlavor = (flavorToEdit) => {
  dispatch(editFlavor(flavorToEdit));
  dispatch(setEditFalse());
  dispatch(clearSelectedFlavor());
}
const handleRestockClick = () => {
  dispatch(setRestockTrue());
}
const handleRestockFlavor = (updatedQty) => {
  dispatch(setRestock(updatedQty));
  dispatch(setEditFalse());
  dispatch(clearSelectedFlavor());
  dispatch(setRestockFalse());
}

let currentVisibleState = null;
let buttonText = null;

if (restock) {
  currentVisibleState = <RestockForm
    flavor={selectedFlavor}
    onRestockItem={handleRestockFlavor} />
  buttonText = "Return to menu"
} else if (editing) {
  currentVisibleState = <EditFlavorForm
    flavor={selectedFlavor}
    onEditTicket={handleEditFlavor} />
  buttonText = "Return to menu";
} else if (selectedFlavor != null) {
  currentVisibleState = <FlavorDetail
    flavor={selectedFlavor}
    onClickingEdit={handleEditClick} onClickRestock={handleRestockClick} />
  buttonText = "Return to Menu";
} else if (formVisibleOnPage) {
  currentVisibleState = <AddFlavorForm
    onCreateFlavor={handleCreateFlavor} />
  buttonText = "Return to Menu"
} else {
  currentVisibleState = <Menu
    menuList={menuList} onFlavorSelection={handleChangingSelectFlavor}
    onClickingBuy={handleBuyClick}
  />;
  buttonText = "Add custom flavor"
}
return (
  <>
    <div className={bodyStyle}>
      {currentVisibleState}
      <div style={{ textAlign: 'center' }}>
      <button className="bodyBtn" onClick={handleClick}>{buttonText}</button>
      </div>
      <hr />
    </div>
  </>
);
}
export default IceCreamControl;