import { useDocument } from 'react-firebase-hooks/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import ArtikelDetail from '../components/Artikel/ArtikelDetail';
import DeleteBtn from '../components/Artikel/DeleteBtn';
import EditBtn from '../components/Artikel/EditBtn';
import Loading from '../components/Loading';
import { deleteArtikel, getDocRef } from '../utils/firestore';
import NotFoundPage from './NotFoundPage';
function ArtikelDetailAdminPage() {
  const { artikelId } = useParams();
  const navigate = useNavigate();
  const [value, loading] = useDocument(getDocRef('artikels', artikelId), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const onDelete = async () => {
    if (value?.data()) {
      await deleteArtikel(artikelId);
    }
    navigate('/');
  };
  return (
    <section className='w-full h-full flex'>
      {loading && (
        <Loading
          className={'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}
        />
      )}
      {value?.data() && (
        <>
          <ArtikelDetail {...value.data()} />
          <div className='fixed bottom-5 right-0 flex gap-x-4'>
            <DeleteBtn onDelete={onDelete} />
            <EditBtn />
          </div>
        </>
      )}
      {!loading && !value?.data() && <NotFoundPage />}
    </section>
  );
}

export default ArtikelDetailAdminPage;
