import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../Loading';
import FormBody from './partials/FormBody';
import FormButton from './partials/FormButton';
import FormInput from './partials/FormInput';
import FormTextarea from './partials/FormTextarea';
import PropTypes from 'prop-types';
function FormEdit({ onSubmit, editorRef, useDoc }) {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [value, loading] = useDoc();

  useEffect(() => {
    if (value) {
      setTitle(value.get('title'));
      setThumbnail(value.get('thumbnail'));
    }
  }, [value]);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeThumbnail = (e) => {
    setThumbnail(e.target.value);
  };

  return (
    <>
      {loading && <Loading className={'m-auto'} />}
      {value && (
        <FormBody
          title={'Edit Artikel'}
          className={'md:w-4/5 w-11/12'}
          onSubmit={onSubmit}
        >
          <FormInput
            value={title}
            onChange={onChangeTitle}
            label={'Judul'}
            name={'title'}
            type={'text'}
            className={'w-full'}
          />
          <FormInput
            value={thumbnail}
            onChange={onChangeThumbnail}
            label={'Link Thumbnail'}
            name={'thumbnail'}
            type={'text'}
            className={'w-full'}
          />
          <FormTextarea
            label={'Isi Artikel'}
            editorRef={editorRef}
            initVal={value.get('body')}
          />
          <FormButton label={'Simpan'} type={'submit'} />
        </FormBody>
      )}
    </>
  );
}

FormEdit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  editorRef: PropTypes.func.isRequired,
  useDoc: PropTypes.func.isRequired,
};

export default FormEdit;
