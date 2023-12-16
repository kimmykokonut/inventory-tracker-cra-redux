import React from 'react';
import Flavor from "./Flavor";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { menuListSelector } from '../redux/menuListSlice';


const Menu = (props) => {
  const itemStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
  
  const currentInvObj = useSelector(menuListSelector);
  const currentInvArray = Object.values(currentInvObj);

  return (
    <>
      <h2>Current Menu</h2>
      <div style={itemStyle}>
        {currentInvArray.map((flavor) =>
          <Flavor
            whenFlavorClicked={props.onFlavorSelection}
            whenBuyClicked={props.onClickingBuy}
            name={flavor.name}
            imgSrc={flavor.imgSrc}
            price={flavor.price}
            qtyInStock={flavor.qtyInStock}
            id={flavor.id}
            key={flavor.id} />
        )}
      </div>
    </>
  );
}
Menu.propTypes = {
  menuListSelector: PropTypes.object,
  onFlavorSelection: PropTypes.func,
  onClickingBuy: PropTypes.func
};
export default Menu;