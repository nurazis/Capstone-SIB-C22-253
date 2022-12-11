import { useEffect, useState } from 'react';
import { useIdToken } from 'react-firebase-hooks/auth';
import { Routes, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import ArtikelAddPage from './pages/ArtikelAddPage';
import ArtikelDetailAdminPage from './pages/ArtikelDetailAdminPage';
import ArtikelDetailPage from './pages/ArtikelDetailPage';
import ArtikelEditPage from './pages/ArtikelEditPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

import { auth } from './utils/firebaseAuth';
function RoutesApp() {
  const [admin, setAdmin] = useState(false);
  const [user, loading] = useIdToken(auth);

  useEffect(() => {
    if (user) {
      setAdmin(true);
    }
  }, [user]);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <PageLayout
            useAdmin={() => [admin, setAdmin]}
            useUserId={() => [user, loading]}
          />
        }
      >
        <Route index element={<HomePage />} />
        {!admin ? (
          <>
            <Route path='/artikel/:artikelId' element={<ArtikelDetailPage />} />
            <Route path='/admin/login' element={<LoginPage />} />
          </>
        ) : (
          <>
            {/* <Route index element={<HomeAdminPage />} /> */}
            <Route path='admin/addArtikel' element={<ArtikelAddPage />} />
            <Route
              path='admin/editArtikel/:artikelId'
              element={<ArtikelEditPage />}
            />
            <Route
              path='admin/artikel/:artikelId'
              element={<ArtikelDetailAdminPage />}
            />
          </>
        )}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default RoutesApp;
