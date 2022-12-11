import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
function ArtikelDetail({ title, body, thumbnail }) {
  return (
    <article className='prose prose-sm lg:prose-lg mx-auto mt-10 md:p-0 p-5'>
      <h1>{title}</h1>
      <img
        src={thumbnail}
        alt={title}
        className='md:h-96 h-80 object-cover my-14 border border-white md:w-full'
      />
      {parse(body)}
    </article>
  );
}

ArtikelDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ArtikelDetail;
