import db from './firebase';
import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
} from 'firebase/firestore';

import PropTypes from 'prop-types';

const model = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  body: PropTypes.string,
};
const firestore = getFirestore(db);
const getCollection = (collectName) => collection(firestore, collectName);
const getDocRef = (collectName, idDoc) => doc(firestore, collectName, idDoc);

const artikel = ({ title, thumbnail, body }) => {
  model.title = title;
  model.thumbnail = thumbnail;
  model.body = body;
  return model;
};

async function deleteArtikel(id) {
  await deleteDoc(getDocRef('artikels', id));
}
async function editArtikel(id, data) {
  await updateDoc(getDocRef('artikels', id), artikel({ ...data }));
}
async function addArtikel(data) {
  await addDoc(getCollection('artikels'), artikel({ ...data }));
}

getCollection.propTypes = {
  collectName: PropTypes.string.isRequired,
};
getDocRef.propTypes = {
  collectName: PropTypes.string.isRequired,
  idDoc: PropTypes.string.isRequired,
};

export {
  getCollection,
  getDocRef,
  model,
  firestore,
  deleteArtikel,
  editArtikel,
  addArtikel,
};
