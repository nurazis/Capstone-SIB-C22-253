import { useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getCollection } from '../utils/firestore';
import PropTypes from 'prop-types';
function useGetArtikels(setLoading, setArtikels) {
  const [value, loading, error] = useCollection(getCollection('artikels'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return useEffect(() => {
    if (!loading && !error) {
      setLoading(false);
    }
    if (value) {
      if (value.docs.length > 0) {
        setArtikels(() => {
          return value.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
        });
      }
    }
  }, [value]);
}

useGetArtikels.propTypes = {
  setLoading: PropTypes.func.isRequired,
  setArtikels: PropTypes.func.isRequired,
};

export default useGetArtikels;
