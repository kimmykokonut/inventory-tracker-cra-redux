import React from "react";
import Menu from "./Menu";
import AddFlavorForm from "./AddFlavorForm";
import FlavorDetail from "./FlavorDetail";
import EditFlavorForm from "./EditFlavorForm";
import RestockForm from "./RestockForm";
//import flavorArray from "./../flavorList";

import { useSelector } from "react-redux";

import { formVisibleOnPageSelector, setFormFalse, toggleForm } from "../redux/formVisibleOnPageSlice";
import { sellPint, createFlavor, editFlavor, menuListSelector, setRestock } from "../redux/menuListSlice";
import { clearSelectedFlavor, setFlavor, selectedFlavorSelector } from "../redux/selectedFlavorSlice";
import { editingSelector, setEditFalse, setEditTrue } from "../redux/editingSlice";
import { restockSelector, setRestockFalse, setRestockTrue } from "../redux/restockSlice";

import { useDispatch } from "react-redux";


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
    // const updatedMenuList = this.state.menuList.map((flavor) => {
    //   if (flavor.id === flavorID && flavor.qtyInStock > 0) {
    //     return {
    //       ...flavor,
    //       qtyInStock: flavor.qtyInStock - 1,
    //     };
    //   }
    //   return flavor;
    //});
    dispatch(sellPint(flavorID));
    dispatch(clearSelectedFlavor());
    // this.setState({
    //   menuList: updatedMenuList,
    //   selectedFlavor: null
    // });
  }
  const handleCreateFlavor = (newFlavor) => {
    dispatch(createFlavor(newFlavor));
    // const newMenuList = this.state.menuList.concat(newFlavor);
    //this.setState({ menuList: newMenuList,
    dispatch(setFormFalse());
    //formVisibleOnPage: false });
  }
  const handleChangingSelectFlavor = (id) => {
    const chosenFlavor = menuList[id];
    console.log(menuList, typeof menuList); //object
   //click 1st get id=1, click causes id2 to be visible...
    //.filter(flavor => flavor.id === id)[0];
    dispatch(setFlavor(chosenFlavor));
    //this.setState({ selectedFlavor: selectFlavor });
  }
  const handleEditClick = () => {
    dispatch(setEditTrue());
    //this.setState({ editing: true });
  }
  const handleEditFlavor = (flavorToEdit) => {
    dispatch(editFlavor(flavorToEdit));
    // const editedFlavorList = this.state.menuList
    //   .filter(flavor => flavor.id !== this.state.selectedFlavor.id)
    //   .concat(flavorToEdit);
    dispatch(setEditFalse());
    dispatch(clearSelectedFlavor());
    // this.setState({
    //   menuList: editedFlavorList,
    //   editing: false,
    //   selectedFlavor: null
    // });
  }
  const handleRestockClick = () => {
    dispatch(setRestockTrue());
    //this.setState({ restock: true });
  }
  const handleRestockFlavor = (updatedQty) => {
    dispatch(setRestock(updatedQty)); //might issue *130?
    // const updatedMenuList = this.state.menuList
    //   .map((flavor) => {
    //     if (flavor.id === this.state.selectedFlavor.id) {
    //       return {
    //         ...flavor,
    //         qtyInStock: flavor.qtyInStock + updatedQty
    //       };
    //     }
    //     return flavor;
    //   });
    dispatch(setEditFalse());
    dispatch(clearSelectedFlavor());
    dispatch(setRestockFalse());
    // this.setState({
    //   menuList: updatedMenuList,
    //   editing: false,
    //   selectedFlavor: null,
    //   restock: false,
    // });
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
      {currentVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
      <hr />
    </>
  );

}
export default IceCreamControl;