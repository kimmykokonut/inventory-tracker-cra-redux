import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

const AddFlavorForm = (props) => {
  function handleCreateFlavorFormSubmission(e) {
    e.preventDefault();
    props.onCreateFlavor({
      name: e.target.name.value,
      description: e.target.description.value,
      imgSrc: e.target.imgSrc.value,
      price: e.target.price.value,
      allergens: e.target.allergens.value,
      qtyInStock: parseInt(e.target.qtyInStock.value),
      id: v4()
    })
  }
  return (
    <>
      <h3>Custom Flavor Form</h3>
      <ReusableForm
        formSubmissionHandler={handleCreateFlavorFormSubmission}
        buttonText="Create!" />
    </>
  );
}
AddFlavorForm.propTypes = {
  onCreateFlavor: PropTypes.func
}
export default AddFlavorForm;