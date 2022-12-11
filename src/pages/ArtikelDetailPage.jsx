import { useDocument } from 'react-firebase-hooks/firestore';
import { useParams } from 'react-router-dom';
import ArtikelDetail from '../components/Artikel/ArtikelDetail';
import Loading from '../components/Loading';
import { getDocRef } from '../utils/firestore';

function ArtikelDetailPage() {
  const { artikelId } = useParams();

  const [value, loading] = useDocument(getDocRef('artikels', artikelId), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return (
    <section className='w-full h-full'>
      {loading && (
        <Loading
          className={'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}
        />
      )}
      {value?.data() && (
        <>
          <ArtikelDetail {...value.data()} />
        </>
      )}
      {!loading && !value?.data() && <NotFoundPage />}
    </section>
  );
}

export default ArtikelDetailPage;
