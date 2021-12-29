import classes from '../styles/Answer.module.css';
import Checkbox from './Checkbox';

function Answer({ onChange, text, ...rest }) {
  if (onChange) {
    return (
      <Checkbox
        onChange={onChange}
        {...rest}
        className={classes.answer}
        text={text}
      />
    );
  } else {
    return (
      <label className={`${classes.answer} ${classes.correct}`}>
        <span>{text}</span>
        {true && <span>Correct answer</span>}
      </label>
    );
  }
}

export default Answer;
