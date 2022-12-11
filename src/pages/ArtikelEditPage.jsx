import { useRef } from 'react';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import FormEdit from '../components/Form/FormEdit';
import { editArtikel, getDocRef, model } from '../utils/firestore';
function ArtikelEditPage() {
  const editorRef = useRef();
  const navigate = useNavigate();
  const { artikelId } = useParams();  
  const [value, loading] = useDocument(getDocRef('artikels', artikelId), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  
  const onSubmit = async (e) => {
    e.preventDefault();
    if (value) {
      const { title, thumbnail } = e.target;
      const body = editorRef.current.getContent();
      model.title = title.value;
      model.thumbnail = thumbnail.value;
      model.body = body;
      await editArtikel(artikelId, {
        title: title.value,
        thumbnail: thumbnail.value,
        body,
      });
      navigate('/');
    }
  };

  return (
    <section className='w-full h-screen flex'>
      <FormEdit onSubmit={onSubmit} editorRef={editorRef} useDoc={() => [value, loading]} />
    </section>
  );
}
export default ArtikelEditPage;
