import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Loading from './Loading';
import { Online, Offline } from 'react-detect-offline';
import PropTypes from 'prop-types';
function PageLayout({ useAdmin, useUserId }) {
  const [admin, setAdmin] = useAdmin();
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dracula'
  );

  const [, loading] = useUserId();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <Header useAdmin={useAdmin} useTheme={() => [theme, setTheme]} />
      <main className='flex min-h-screen w-full max-w-screen-2xl mx-auto'>
        <Offline>
          <div className='text-base md:text-xl font-semibold m-auto'>
            Cek koneksi internet anda!
          </div>
        </Offline>
        <Online>
          {loading ? (
            <Loading
              className={
                'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              }
            />
          ) : (
            <Outlet context={[admin, setAdmin, theme, setTheme]} />
          )}
        </Online>
      </main>
    </>
  );
}

PageLayout.propTypes = {
  useAdmin: PropTypes.func.isRequired,
  useUserId: PropTypes.func.isRequired,
};

export default PageLayout;
