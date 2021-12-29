import {
  endAt,
  getDatabase,
  onValue,
  orderByKey,
  query,
  ref,
  startAfter
} from 'firebase/database';
import { useEffect, useState } from 'react';

function useVideoList(page, perPage) {
  const [err, setErr] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    function fetchVideos() {
      //changing loading state to true
      setLoading(true);
      //
      const db = getDatabase();
      const videosRef = ref(db, 'videos');
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAfter('' + (page - 1) * perPage),
        endAt('' + page * perPage)
      );
      //
      return onValue(
        videoQuery,
        (snapshot) => {
          if (snapshot.exists()) {
            console.log('video list data called');
            const videos = Object.values(snapshot.val());
            setVideos((prevVideos) => [...prevVideos, ...videos]);
          } else {
            setHasMore(false);
          }
          //important: to set loading state to false
          setLoading(false);
        },
        (error) => {
          //on error actions
          setErr(error.message);
          setLoading(false);
        },
        //this options reads data only first time
        { onlyOnce: true }
      );
    }

    //unsubscribing on (unmount || cleanup)

    return fetchVideos();
  }, [page, perPage]);

  return {
    err,
    hasMore,
    loading,
    videos
  };
}

export default useVideoList;
