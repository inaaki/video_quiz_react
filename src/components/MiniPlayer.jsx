import img from '../images/3.jpg';
import classes from '../styles/MiniPlayer.module.css';

function MiniPlayer({ title, thumbnail }) {
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      onClick={() => {}}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        play_circle_filled
      </span>
      <span className={`material-icons-outlined ${classes.close}`}>close</span>
      <img src={thumbnail || img} alt='Video thumbnail' />
      <p>{title}</p>
    </div>
  );
}

export default MiniPlayer;
