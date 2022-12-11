import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
function DeleteBtn({ onDelete }) {
  return (
    <div
      className='cursor-pointer overflow-hidden left-[1250px] w-12 h-12 md:w-20 md:h-20  bg-neutral drop-shadow-md rounded-full '
      onClick={onDelete}
    >
      <div className='w-full h-full flex'>
        <FontAwesomeIcon
          className='text-xl md:text-3xl z-10 text-white m-auto'
          icon={faTrash}
        />
      </div>
    </div>
  );
}

DeleteBtn.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteBtn;
