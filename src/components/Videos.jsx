import { Link } from 'react-router-dom';
import classes from '../styles/Videos.module.css';
import Video from './Video';

function Videos({ videos, hasMore }) {
  return (
    <>
      <div className={classes.videos}>
        {videos.map(({ youtubeID, noq, ...rest }) =>
          noq ? (
            <Link to='/quiz' key={youtubeID}>
              <Video noq={noq} {...rest} id={youtubeID} />
            </Link>
          ) : (
            <Video key={youtubeID} noq={noq} {...rest} id={youtubeID} />
          )
        )}
      </div>
      {!hasMore && (
        <p style={{ textAlign: 'center' }}>
          End of the page!! | visit later for more content
        </p>
      )}
    </>
  );
}

export default Videos;
