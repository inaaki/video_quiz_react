import {
  endAt,
  getDatabase,
  onValue,
  orderByKey,
  query,
  ref,
  startAfter
} from 'firebase/database';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

//context creation
const videoListContext = createContext();

//exporting context access hook
export const useVideoList = () => useContext(videoListContext);

//context provider component
export function VideoListProvider({ children }) {
  const perPage = 10;

  const [page, setPage] = useState(1);
  const [err, setErr] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    function fetchVideos() {
      console.log('calling video list data');
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
  }, [page]);

  const incrementPage = useCallback((callback) => {
    setPage(callback);
  }, []);

  const value = {
    err,
    hasMore,
    incrementPage,
    loading,
    videos
  };
  return (
    <videoListContext.Provider value={value}>
      {children}
    </videoListContext.Provider>
  );
}
