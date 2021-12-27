import { getDatabase, onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

function useVideoList() {
  const [videos, setVideos] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    function fetchVideos() {
      const db = getDatabase();
      const dbRef = ref(db, 'videos');

      return onValue(
        dbRef,
        (snapshot) => {
          if (snapshot.exists()) {
            const videos = Object.values(snapshot.val());
            setVideos(videos);
          } else {
            setErr('No data found');
          }
        },
        //this options reads data only first time
        { onlyOnce: true }
      );
    }
    //unsubscribing on unmount with return
    return fetchVideos();
  }, []);

  return { videos, err };
}

export default useVideoList;
