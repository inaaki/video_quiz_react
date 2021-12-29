import classes from '../styles/Answers.module.css';
import Answer from './Answer';

function Answers({ children, options, ...rest }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Answer
          key={index}
          index={index}
          text={option.title}
          checked={option.checked}
          {...rest}
        />
      ))}
    </div>
  );
}

export default Answers;
