import React from 'react';
import Alert from '../Alert';
import FormBody from './partials/FormBody';
import FormButton from './partials/FormButton';
import FormInput from './partials/FormInput';
import PropTypes from 'prop-types';
function FormLogin({ onSubmit, errMsg }) {
  return (
    <FormBody
      title={'Login Admin.'}
      className={'md:w-1/2 w-11/12'}
      onSubmit={onSubmit}
    >
      {errMsg && <Alert body={errMsg} className={'mt-5 alert-error'} />}
      <FormInput
        className={'w-full'}
        name={'email'}
        label={'Email'}
        type={'email'}
      />
      <FormInput
        className={'w-full'}
        name={'password'}
        label={'Password'}
        type={'password'}
      />
      <FormButton label={'Login'} type={'submit'} />
    </FormBody>
  );
}

FormLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errMsg: PropTypes.string,
};

export default FormLogin;
