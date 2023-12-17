import React from 'react';
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

const EditFlavorForm = (props) => {
  const { flavor } = props;

  function handleEditFormSubmission(e) {
    e.preventDefault();
    props.onEditTicket({
      name: e.target.name.value || flavor.name,
      description: e.target.description.value || flavor.description,
      price: e.target.price.value || flavor.price,
      imgSrc: e.target.imgSrc.value || flavor.imgSrc,
      available: e.target.available.value || flavor.available,
      allergens: e.target.allergens.value || flavor.allergens,
      qtyInStock: parseInt(e.target.qtyInStock.value) || flavor.qtyInStock,
      id: flavor.id
    });
  }
  return (
    <>
      <h3>Update details</h3>
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