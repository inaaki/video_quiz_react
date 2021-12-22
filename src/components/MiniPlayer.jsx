import { useRef } from 'react';
import img from '../images/3.jpg';
import style from '../styles/MiniPlayer.module.css';

function MiniPlayer({ title, thumbnail }) {
  const float = style.floatingBtn; //floatingBtn class
  const player = useRef();

  const open = (e) => {
    e.stopPropagation();
    player.current.classList.remove(float);
  };

  const close = (e) => {
    e.stopPropagation();
    player.current.classList.add(float);
  };

  return (
    <div ref={player} onClick={open} className={`${style.miniPlayer} ${float}`}>
      <span className={`material-icons-outlined ${style.open}`}>
        play_circle_filled
      </span>
      <span
        onClick={close}
        className={`material-icons-outlined ${style.close}`}
      >
        close
      </span>
      <img src={thumbnail || img} alt='Video thumbnail' />
      <p>{title}</p>
    </div>
  );
}

export default MiniPlayer;
