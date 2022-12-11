import React, { useMemo } from 'react';
import ArtikelEmpty from './ArtikelEmpty';
import ArtikelItem from './ArtikelItem';
import PropTypes from 'prop-types';
function ArtikelList({ search, artikels }) {
  const searchArtikels = useMemo(() => {
    return artikels.filter((artikel) =>
      artikel.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      {artikels.length <= 0 && <ArtikelEmpty />}
      {artikels.length > 0 && (
        <section className='grid mx-auto w-full sm:w-11/12 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10 px-10 md:px-0'>
          {searchArtikels.map((artikel) => (
            <ArtikelItem {...artikel} key={artikel.id} />
          ))}
        </section>
      )}
    </>
  );
}

ArtikelList.propTypes = {
  search: PropTypes.string.isRequired,
  artikels: PropTypes.array.isRequired,
};

export default ArtikelList;
