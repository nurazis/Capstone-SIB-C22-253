import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { convert } from 'html-to-text';
import PropTypes from 'prop-types';
function ArtikelItem({ id, title, body, thumbnail }) {
  const [admin] = useOutletContext();
  return (
    <div className='card h-80 card-compact bg-base-100 shadow-2xl rounded-sm'>
      <figure className='h-32'>
        <img src={thumbnail} className='object-cover' />
      </figure>
      <div className='card-body overflow-hidden'>
        <h2 className='card-title'>
          <Link to={`${admin ? 'admin' : ''}/artikel/${id}`}>{title}</Link>
        </h2>
        <div className='text-justify line-clamp-3'>
          {convert(body).toLowerCase()}
        </div>
      </div>
    </div>
  );
}

ArtikelItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ArtikelItem;
