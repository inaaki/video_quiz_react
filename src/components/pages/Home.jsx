import useVideoList from '../../hooks/useVideoList';
import Videos from '../Videos';

function Home() {
  const { videos, err } = useVideoList();
  const length = videos.length;

  return length ? (
    <Videos videos={videos} />
  ) : (
    <p style={{ textAlign: 'center' }}>{err}</p>
  );
}

export default Home;
