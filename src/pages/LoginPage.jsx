import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { auth } from '../utils/firebaseAuth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import FormLogin from '../components/Form/FormLogin';

function LoginPage() {
  const navigate = useNavigate();
  const [, setAdmin] = useOutletContext();
  const [errMsg, setErrMsg] = useState('');
  const [signInWithEmailAndPassword, user, _, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    signInWithEmailAndPassword(email.value, password.value);
  };

  useEffect(() => {
    if (error) {
      switch (error.code) {
        case 'auth/network-request-failed':
          setErrMsg('Tidak terkoneksi internet');
          break;
        case 'auth/user-not-found':
          setErrMsg('Email atau password salah!');
          break;
      }
    }
    if (user) {
      setAdmin(true);
      navigate('/');
    }
  }, [user, error]);

  return (
    <section className='w-full h-full flex m-auto '>
      <FormLogin errMsg={errMsg} onSubmit={onSubmit} />
    </section>
  );
}

export default LoginPage;
