import React from 'react';
import PropTypes from 'prop-types';

const ReusableForm = (props) => {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <label>Name: <input
          type='text'
          name='name'
          placeholder="Rocky Road" /> </label>
        <br />
        <label>Description: <input
          type='text'
          name='description'
          placeholder="Chocolate base with marshmallows" /> </label>
        <br />
        <label>Price: <input
          type='text'
          name='price'
          placeholder="4.50" /> </label>
        <br />
        <label>Image url: <input
          type='text'
          name='imgSrc'
          placeholder="url" /> </label>
        <br />
        <label>Allergens: <input
          type='text'
          name='allergens'
          placeholder="peanuts" /> </label>
        <br />
        <label>Quantity: <input
          type='text'
          name='qtyInStock'
          placeholder="how many pints available" /> </label>
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  )
}
ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};
export default ReusableForm;