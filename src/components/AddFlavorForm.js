import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

const AddFlavorForm = (props) => {
  function handleCreateFlavorFormSubmission(e) {
    e.preventDefault();
    props.onCreateFlavor({
      name: e.target.name.value || 'not provided',
      description: e.target.description.value || 'not provided',
      imgSrc: e.target.imgSrc.value || 'not provided',
      price: e.target.price.value || 'not provided',
      available: e.target.available.value || 'not provided',
      allergens: e.target.allergens.value || 'not provided',
      qtyInStock: parseInt(e.target.qtyInStock.value) || 0,
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