import Checkbox from '../components/Checkbox';
import classes from '../styles/Answers.module.css';

//return specified className to modify background
function modifyBg(user, result) {
  let x = ' ' + classes.cursorDefault + ' ';
  x += user && result ? classes.correct : user !== result ? classes.wrong : '';
  return x;
}

function Answers({ options, ...rest }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          checked={option.checked}
          defaultChecked={option.checked}
          defaultClass={classes.answer}
          modifyBackground={() => modifyBg(option.checked, option.correct)}
          index={index}
          text={option.title}
          {...rest}
        />
      ))}
    </div>
  );
}

export default Answers;
