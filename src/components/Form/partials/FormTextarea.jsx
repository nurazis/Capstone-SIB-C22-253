import { useEffect } from 'react';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import TinyEditor from './TinyEditor';
import PropTypes from 'prop-types';
function FormTextarea({ label, editorRef, initVal }) {
  const [, , theme] = useOutletContext();
  const [reTheme, setRetheme] = useState();
  useEffect(() => {
    setRetheme(theme);
  }, [theme]);
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      {reTheme === 'dracula' && (
        <TinyEditor
          skin={'oxide-dark'}
          content_css={'dark'}
          editorRef={editorRef}
          initialValue={initVal}
        />
      )}

      {reTheme === 'retro' && (
        <TinyEditor
          skin={'oxide'}
          content_css={'light'}
          editorRef={editorRef}
          initialValue={initVal}
        />
      )}
    </div>
  );
}

FormTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  editorRef: PropTypes.func.isRequired,
};

export default FormTextarea;
