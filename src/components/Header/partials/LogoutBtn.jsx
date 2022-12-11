import React from 'react';
import PropTypes from 'prop-types';
function LogoutBtn({ onClick }) {
  return <button onClick={onClick}>Logout</button>;
}

LogoutBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LogoutBtn;
