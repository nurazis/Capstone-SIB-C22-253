import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
function EditBtn() {
  const { artikelId } = useParams();
  return (
    <Link
      to={`/admin/editArtikel/${artikelId}`}
      className='cursor-pointer overflow-hidden left-[1150px] w-12 h-12 md:w-20 md:h-20 bg-neutral drop-shadow-md rounded-full'
    >
      <div className='w-full h-full flex'>
        <FontAwesomeIcon
          className='text-xl md:text-3xl z-10 text-white m-auto'
          icon={faPencil}
        />
      </div>
    </Link>
  );
}

export default EditBtn;
