import classes from '../styles/Answer.module.css';
import Checkbox from './Checkbox';

function Answer({ id, text }) {
  if (true) {
    const style = classes.answer + ' ' + classes.correct;
    return (
      <label class={style} htmlFor={id}>
        <span>{text}</span>
        {true && <span>Correct answer</span>}
      </label>
    );
  } else {
    return <Checkbox className={classes.answer} id={id} text={text} />;
  }
}

export default Answer;
