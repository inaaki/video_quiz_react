import { Link } from 'react-router-dom';
import style from '../styles/Button.module.css';
import classes from '../styles/ProgressBar.module.css';

function ProgressBar() {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        <span className='material-icons-outlined'> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>20% Complete!</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: '20%' }}></div>
        </div>
      </div>
      <Link to='/result'>
        <button className={`${style.button} ${classes.next}`}>
          <span>Next Question</span>
          <span className='material-icons-outlined'> arrow_forward </span>
        </button>
      </Link>
    </div>
  );
}

export default ProgressBar;
