import React from 'react';
import PropTypes from 'prop-types';

const Flavor = (props) => {
  const imgStyle = {
    display: 'block',
    height: '150px',
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  const itemStyle = {
    border: '2px solid black',
    padding: '1%',
    margin: '1%',
    backgroundColor: 'lightgrey',
  }
  return (
    <>
      <div style={itemStyle}>
        <div onClick={() => props.whenFlavorClicked(props.id)}>
          <h3>{props.name}</h3>
          <img style={imgStyle} src={props.imgSrc} alt={props.alt} />
          <p>Price: ${props.price} per pint</p>
          <p>In stock: {props.qtyInStock} pints</p>
        </div>
        <div style={{ textAlign: 'center' }}>
        <button className="bodyBtn" type="submit" onClick={() => props.whenBuyClicked(props.id)}>Buy 1 pint</button>
      </div>
    </div >
    </>
  );
}
Flavor.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imgSrc: PropTypes.string,
  alt: PropTypes.string,
  available: PropTypes.string,
  price: PropTypes.string,
  allergens: PropTypes.string,
  qtyInStock: PropTypes.number,
  id: PropTypes.string,
  whenFlavorClicked: PropTypes.func,
  whenBuyClicked: PropTypes.func
};
export default Flavor;