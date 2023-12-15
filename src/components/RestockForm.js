import React from 'react';
import PropTypes from 'prop-types';

const RestockForm = (props) => {
  const { flavor } = props;

  function handleRestockFormSubmission(e) {
    e.preventDefault();
    props.onRestockItem(130 * parseInt(e.target.restockQty.value));
  }
  return (
    <>
      <h3>Restock Form for {flavor.name}</h3>
      <p>Current quantity: {flavor.qtyInStock} pints</p>
      <form onSubmit={handleRestockFormSubmission}>
        <label>How many pails? <input
          type='text'
          name='restockQty'
          placeholder="1 pail = 130 pints" /> </label>
        <br />
        <button type="submit">Order by the pail!</button>
      </form>
    </>
  );
}
RestockForm.propTypes = {
  flavor: PropTypes.object,
  onRestockItem: PropTypes.func
}
export default RestockForm;