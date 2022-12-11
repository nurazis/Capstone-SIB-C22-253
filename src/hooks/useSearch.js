import { useEffect } from 'react';
import PropTypes from 'prop-types';
function useSearch(searchParams, setSearch) {
  return useEffect(() => {
    setSearch(searchParams.get('search') || '');
  }, [searchParams]);
}

useSearch.propTypes = {
  searchParams: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};
export default useSearch;
