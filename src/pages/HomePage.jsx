import { useState } from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import AddBtn from '../components/Artikel/AddBtn';
import ArtikelList from '../components/Artikel/ArtikelList';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import useGetArtikels from '../hooks/useGetArtikels';
import useSearch from '../hooks/useSearch';

function HomePage() {
  const [searchParams, updateSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [artikels, setArtikels] = useState([]);
  const [admin] = useOutletContext();

  const [loading, setLoading] = useState(true);

  const updateSearch = (search) => {
    updateSearchParams({
      search,
    });
  };

  useGetArtikels(setLoading, setArtikels);
  useSearch(searchParams, setSearch);

  return (
    <section className='flex w-screen flex-col'>
      <SearchBar search={search} updateSearch={updateSearch} />
      {loading && <Loading className={'mx-auto mt-32 '} />}
      {!loading && <ArtikelList search={search} artikels={artikels} />}
      {admin && (
        <div className='fixed bottom-5 right-0 flex'>
          <AddBtn />
        </div>
      )}
    </section>
  );
}

export default HomePage;
