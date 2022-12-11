import React from 'react';
import FormBody from './partials/FormBody';
import FormButton from './partials/FormButton';
import FormInput from './partials/FormInput';
import FormTextarea from './partials/FormTextarea';
import PropTypes from 'prop-types';
function FormAdd({ onSubmit, editorRef }) {
  return (
    <FormBody
      title={'Tambah Artikel'}
      className={'md:w-4/5 w-11/12 '}
      onSubmit={onSubmit}
    >
      <FormInput
        label={'Judul'}
        name={'title'}
        type={'text'}
        className={'md:w-full'}
      />
      <FormInput
        label={'Link Thumbnail'}
        name={'thumbnail'}
        type={'text'}
        className={'md:w-full'}
      />
      <FormTextarea label={'Isi Artikel'} editorRef={editorRef} />
      <FormButton label={'Tambah'} type={'submit'} />
    </FormBody>
  );
}

FormAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  editorRef: PropTypes.func.isRequired,
};

export default FormAdd;
