import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function AddBtn() {
  return (
    <Link
      to={'/admin/addArtikel'}
      className={
        'cursor-pointer overflow-hidden left-[1800px] w-12 h-12 md:w-20 md:h-20 bg-neutral drop-shadow-md rounded-full'
      }
    >
      <div className='w-full h-full flex'>
        <FontAwesomeIcon
          className='text-xl md:text-3xl z-10 m-auto text-white'
          icon={faPlus}
        />
      </div>
    </Link>
  );
}

export default AddBtn;
