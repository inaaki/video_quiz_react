import { useState } from 'react';
import img from '../images/3.jpg';
import classes from '../styles/MiniPlayer.module.css';

function MiniPlayer({ title, thumbnail }) {
  const [float, setFloat] = useState(true);

  const floatBtnClass = `${classes.miniPlayer} ${
    float ? classes.floatingBtn : ''
  }`;

  console.log(floatBtnClass);
  console.log(float);

  const toggleFloat = (e) => {
    e.stopPropagation();
    setFloat((prevState) => !prevState);
  };

  return (
    <div className={floatBtnClass} onClick={toggleFloat}>
      <span className={`material-icons-outlined ${classes.open}`}>
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleFloat}
      >
        close
      </span>
      <img src={thumbnail || img} alt='Video thumbnail' />
      <p>{title}</p>
    </div>
  );
}

export default MiniPlayer;
