import style from '../styles/Analysis.module.css';
import Question from './Question';

function Analysis() {
  return (
    <div className={style.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>

      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </div>
  );
}

export default Analysis;
