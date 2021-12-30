import style from '../styles/Question.module.css';
import Answers from './Answers';
function Question({  question }) {

  return (
    <div className={style.question}>
      <div className={style.qtitle}>
        <span className='material-icons-outlined'> help_outline </span>
        {question.title}
      </div>

      <Answers options={question.options} />
    </div>
  );
}

export default Question;
