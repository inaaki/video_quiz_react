import classes from '../styles/Video.module.css';
import getThumbnail from '../utils/getThumbnail';

function Video({ title, id, noq }) {
  return (
    <div className={classes.video}>
      <img src={getThumbnail(id)} alt={title} />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
}

export default Video;
