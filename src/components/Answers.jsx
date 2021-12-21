import classes from '../styles/Answers.module.css';
import Answer from './Answer';

function Answers({ children }) {
  return (
    <div className={classes.answers}>
      <Answer id={1} text='A new hope 1' />
      <Answer id={1} text='A new hope 1' />
      <Answer id={1} text='A new hope 1' />
      <Answer id={1} text='A new hope 1' />
      <Answer id={1} text='A new hope 1' />
      <Answer id={1} text='A new hope 1' />
      <Answer id={1} text='A new hope 1' />
      <Answer id={1} text='A new hope 1' />
      <Answer id={1} text='A new hope 1' />
      <Answer id={1} text='A new hope 1' />
    </div>
  );
}

export default Answers;
