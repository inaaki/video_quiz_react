import { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import style from '../styles/MiniPlayer.module.css';

function MiniPlayer({ title, thumbnail, id }) {
  const [playing, setPlaying] = useState(false);
  const float = style.floatingBtn; //floatingBtn class
  const playerRef = useRef();
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  const open = (e) => {
    e.stopPropagation();
    playerRef.current.classList.remove(float);
    setPlaying(!playing);
  };
  const close = (e) => {
    e.stopPropagation();
    playerRef.current.classList.add(float);
    setPlaying(!playing);
  };

  return (
    <div
      ref={playerRef}
      onClick={open}
      className={`${style.miniPlayer} ${float}`}
    >
      <span className={`material-icons-outlined ${style.open}`}>
        play_circle_filled
      </span>
      <span
        onClick={close}
        className={`material-icons-outlined ${style.close}`}
      >
        close
      </span>
      <ReactPlayer
        className={style.player}
        url={videoUrl}
        width={'100%'}
        height={'200px'}
        controls={true}
        volume={0.2}
        playing={playing}
      />
      <p>{title}</p>
    </div>
  );
}

export default MiniPlayer;
