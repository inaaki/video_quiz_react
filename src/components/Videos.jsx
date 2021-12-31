import { Link } from 'react-router-dom';
import classes from '../styles/Videos.module.css';
import Video from './Video';

function Videos({ hasMore, videos, loading }) {
  return (
    <>
      <div className={classes.videos}>
        {videos.map(({ youtubeID, noq, title, ...rest }) =>
          noq ? (
            <Link
              to={`/quiz/${youtubeID}`}
              key={youtubeID}
              state={{ videoTitle: title }}
            >
              <Video noq={noq} title={title} id={youtubeID} {...rest} />
            </Link>
          ) : (
            <Video
              key={youtubeID}
              title={title}
              noq={noq}
              {...rest}
              id={youtubeID}
            />
          )
        )}
      </div>

      {loading && (
        <p
          style={{
            padding: '1rem 0',
            textAlign: 'center'
          }}
        >
          loading...
        </p>
      )}

      {!hasMore && (
        <p style={{ textAlign: 'center' }}>
          End of the page!! | visit later for more content
        </p>
      )}
    </>
  );
}

export default Videos;
