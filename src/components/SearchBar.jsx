import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
function SearchBar({ search, updateSearch }) {
  return (
    <div className='mx-auto pt-10 w-9/12'>
      <div className='relative'>
        <FontAwesomeIcon
          className='absolute z-10 text-2xl left-3 bottom-0 -translate-y-1/2'
          icon={faMagnifyingGlass}
        />
        <input
          type='text'
          placeholder='Search...'
          className='input input-bordered w-full pl-12'
          value={search}
          onChange={(e) => updateSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired,
};

export default SearchBar;
