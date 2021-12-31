import btnStyle from '../styles/Button.module.css';
import classes from '../styles/ProgressBar.module.css';
import Button from './Button';

function ProgressBar({ progress, prev, next, submit }) {
  return (
    <div className={classes.progressBar}>
      <Button className={btnStyle.backButton} onClick={prev}>
        <span className='material-icons-outlined'> arrow_back </span>
      </Button>

      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{progress}% Complete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: progress + '%' }}
          ></div>
        </div>
      </div>

      {/* <Link to='/result'> */}
      <Button
        className={btnStyle.next}
        onClick={progress !== 100 ? next : submit}
      >
        <span>{progress === 100 ? 'Result' : 'Next Question'}</span>
        <span className='material-icons-outlined'> arrow_forward </span>
      </Button>
      {/* </Link> */}
    </div>
  );
}

export default ProgressBar;
