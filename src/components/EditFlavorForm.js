import React from 'react';
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

const EditFlavorForm = (props) => {
  const { flavor } = props;

  function handleEditFormSubmission(e) {
    e.preventDefault();
    props.onEditTicket({
      name: e.target.name.value || flavor.name,
      price: e.target.price.value || flavor.price,
      allergens: e.target.allergens.value || flavor.allergens,
      qtyInStock: parseInt(e.target.qtyInStock.value) || flavor.qtyInStock,
      id: flavor.id
    });
  }
  return (
    <>
      <h3>Update details</h3>
      <h5>You must fill in all forms, whether changed or not</h5>
      <ReusableForm
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="Update info" />
    </>
  );
}
EditFlavorForm.propTypes = {
  flavor: PropTypes.object,
  onEditTicket: PropTypes.func
};
export default EditFlavorForm;