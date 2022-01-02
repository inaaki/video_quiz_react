import { useEffect } from 'react';
import { useVideoList } from '../../context/VideoListContext';
import addEvent from '../../utils/eventListener';
import Videos from '../Videos';

function Home() {
  const { loading, videos, hasMore, err, incrementPage } = useVideoList();

  useEffect(() => {
    //set page only once if only the video length change
    let setPageCallCount = true;
    const { remove: removeWindowOnscroll } = addEvent(
      window,
      'scroll',
      onScroll
    );
    function onScroll() {
      if (!hasMore) {
        removeWindowOnscroll();
      } else if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        setPageCallCount
      ) {
        setPageCallCount = false;
        incrementPage((prevPage) => prevPage + 1);
      }
    }

    //removing existing listener on unmount and useEffect cleanup
    return removeWindowOnscroll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMore, videos.length]);

  return (
    <>
      {loading && videos.length === 0 && <p>loading...</p>}
      {videos.length > 0 && (
        <Videos loading={loading} videos={videos} hasMore={hasMore} />
      )}
      {err && <p style={{ textAlign: 'center' }}>{err}</p>}
    </>
  );
}

export default Home;
