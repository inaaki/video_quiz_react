import Checkbox from '../components/Checkbox';
import classes from '../styles/Answers.module.css';

function getClassName(checked, isThisCorrect) {
  return checked === true && isThisCorrect === true
    ? classes.correct
    : checked !== isThisCorrect
    ? classes.wrong
    : '';
}

function Answers({ options, ...rest }) {

  console.log(getClassName(true,true))
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          checked={option.checked}
          defaultChecked={option.checked}
          defaultClass={classes.answer}
          analysisClass={getClassName(option.checked, option.correct)}
          index={index}
          text={option.title}
          {...rest}
        />
      ))}
    </div>
  );
}

export default Answers;
