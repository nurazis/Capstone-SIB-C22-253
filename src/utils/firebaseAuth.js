// const BASE_URL = 'http://localhost:4000';
import './firebase';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();

function logout() {
  signOut(auth);
}

export { auth, logout };
