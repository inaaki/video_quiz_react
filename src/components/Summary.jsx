import img from '../images/success.png';
import style from '../styles/Summary.module.css';
import Image from './Image';

function Summary() {
  return (
    <div className={style.summary}>
      <div className={style.point}>
        {/* progress bar will be placed here */}
        <p className={style.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <Image className={style.badge} src={img} alt='Success' />
    </div>
  );
}

export default Summary;
