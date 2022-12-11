import React from 'react';
import PropTypes from 'prop-types';
function FormButton({ label, type }) {
  return (
    <button className='btn w-10/12 mx-auto' type={type}>
      {label}
    </button>
  );
}

FormButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormButton;
