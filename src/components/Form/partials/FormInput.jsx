import React from 'react';
import PropTypes from 'prop-types';
function FormInput({ label, name, value, onChange, type, className }) {
  return (
    <div className='form-control w-full'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        className={`input input-bordered ${className}`}
      />
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default FormInput;
