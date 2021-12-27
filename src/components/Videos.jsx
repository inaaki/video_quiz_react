import Link from '../hoc/ToQuiz';
import classes from '../styles/Videos.module.css';
import Video from './Video';

function Videos({ videos }) {
  return (
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
  );
}

export default Videos;
