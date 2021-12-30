import style from '../styles/Analysis.module.css';
import Question from './Question';

function Analysis({ questions }) {
  console.log('inside analysis', questions);
  return (
    <div className={style.analysis}>
      <h1>Question Analysis</h1>
      {/* <h4>You answerd 5 out of 10 questions correctly</h4> */}
      {questions.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </div>
  );
}

export default Analysis;
