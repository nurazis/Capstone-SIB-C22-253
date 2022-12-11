import { useRef } from 'react';

import { addArtikel } from '../utils/firestore';
import { useNavigate } from 'react-router-dom';
import FormAdd from '../components/Form/FormAdd';
function ArtikelAddPage() {
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (editorRef.current) {
      const { title, thumbnail } = e.target;
      const body = editorRef.current.getContent();
      await addArtikel({
        title: title.value,
        thumbnail: thumbnail.value,
        body,
      });
      navigate('/');
    }
  };

  return (
    <section className='max-w-5xl w-full mx-auto h-screen flex'>
      <FormAdd onSubmit={onSubmit} editorRef={editorRef} />
    </section>
  );
}
export default ArtikelAddPage;
