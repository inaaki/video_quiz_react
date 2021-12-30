import img from '../images/success.png';
import style from '../styles/Summary.module.css';
import Image from './Image';

function Summary({score,totalScore}) {
  return (
    <div className={style.summary}>
      <div className={style.point}>
        {/* progress bar will be placed here */}
        <p className={style.score}>
          Your score is <br />{score} out of {totalScore}
        </p>
      </div>

      <Image className={style.badge} src={img} alt='Success' />
    </div>
  );
}

export default Summary;
