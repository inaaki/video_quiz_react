import {
  endAt,
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
  startAfter
} from 'firebase/database';
import { useEffect, useState } from 'react';

function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const perPage = 10;

    async function fetchVideos() {
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
      try {
        const snapshot = await get(videoQuery);
        if (snapshot.exists()) {
          const videos = Object.values(snapshot.val());
          setVideos((prev) => [...prev, ...videos]);
        } else {
          setHasMore(false);
        }
        //
        setLoading(false);
      } catch (e) {
        setErr(e.message);
        setLoading(false);
      }
    }
    //
    fetchVideos();
  }, [page]);

  return {
    err,
    hasMore,
    loading,
    videos
  };
}

export default useVideoList;
