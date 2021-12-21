import classes from '../styles/Answer.module.css';
import Checkbox from './Checkbox';

function Answer({ id, text }) {
  return <Checkbox className={classes.answer} id={id} text={text} />;
}

export default Answer;
