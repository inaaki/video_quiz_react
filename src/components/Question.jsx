import style from '../styles/Question.module.css';
import Answers from './Answers';
function Question() {
  return (
    <div className={style.question}>
      <div class={style.qtitle}>
        <span class='material-icons-outlined'> help_outline </span>
        {/* question title below */}
        Here goes the question from Learn with Sumit?
      </div>

      <Answers />
    </div>
  );
}

export default Question;
