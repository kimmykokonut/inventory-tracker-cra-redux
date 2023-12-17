import React from 'react';
import PropTypes from 'prop-types';

const FlavorDetail = (props) => {
  const styleDetail = {
    display: 'inline-block',
    width: '50%',
    margin: '10px auto',
    marginLeft: '25vw',
    textAlign: 'center',
    backgroundColor: 'salmon',
    padding: '10px',
    margin: '10px',
    border: '3px solid black', borderRadius: '10px',
  }
  const imgStyle = {
    width: '100px',
    height: 'auto'
  }
  const { flavor } = props;
  return (
    <>
      <div style={styleDetail}>
        <h1>Flavor Facts</h1>
        <h3>{flavor.name}</h3>
        <p><em>{flavor.description}</em></p>
        <img style={imgStyle} src={flavor.imgSrc} alt={flavor.alt} />
        <p>${flavor.price} per pint</p>
        <p>Availability: <em>{flavor.available}</em></p>
        <p>Allergens: {flavor.allergens}</p>
        <p>In Stock: {flavor.qtyInStock} pints</p>
        <br />
        <button className="bodyBtn" onClick={props.onClickingEdit}>Update info</button>
        <button className="bodyBtn" onClick={props.onClickRestock}>Order more ice cream!</button>
      </div>
    </>
  );
}
FlavorDetail.propTypes = {
  flavor: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickRestock: PropTypes.func
}
export default FlavorDetail;