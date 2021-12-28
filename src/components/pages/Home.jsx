import { useEffect, useState } from 'react';
import useVideoList from '../../hooks/useVideoList';
import addEvent from '../../utils/eventListener';
import Videos from '../Videos';

function Home() {
  const [page, setPage] = useState(1);
  const { loading, videos, hasMore, err } = useVideoList(page, 10);

  useEffect(() => {
    //set page only once if only the video length change
    let setPageCallCount = 1;

    const { remove: removeWindowOnscroll } = addEvent(
      window,
      'scroll',
      onScroll
    );

    function onScroll() {
      if (!hasMore) {
        console.log('else');
        removeWindowOnscroll();
      } else if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        setPageCallCount
      ) {
        console.log('if');
        setPageCallCount -= 1;
        setPage((prevPage) => prevPage + 1);
      }
    }

    //removing existing listener on unmount and useEffect cleanup
    return removeWindowOnscroll;
  }, [hasMore, videos.length]);

  return (
    <>
      {videos.length > 0 && <Videos videos={videos} hasMore={hasMore} />}
      {err && <p style={{ textAlign: 'center' }}>{err}</p>}
    </>
  );
}

export default Home;
