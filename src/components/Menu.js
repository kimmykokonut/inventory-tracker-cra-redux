import React from 'react';
import Flavor from "./Flavor";
import PropTypes from 'prop-types';

const Menu = (props) => {
  const itemStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
  let currentInv = props.menuList;

  return (
    <>
      <h2>Current Menu</h2>
      <div style={itemStyle}>
        {currentInv.map((flavor) =>
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
  menuList: PropTypes.array,
  onFlavorSelection: PropTypes.func,
  onClickingBuy: PropTypes.func
};
export default Menu;