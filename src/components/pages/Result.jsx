import _ from 'lodash/lang';
import { useLocation, useParams } from 'react-router-dom';
import useAnswer from '../../hooks/useAnswer';
import Analysis from '../Analysis';
import Summary from '../Summary';

//
//
const POINTSperQUESTION = 5;
//
//
const calculateResult = (questions, answer, POINTSperQUESTION = 5) => {
  if (answer.length <= 0)
    return {
      score: 0,
      totalScore: questions.length * POINTSperQUESTION,
      questions
    };

  let correctAnswer = questions.length;
  const questionClone = _.cloneDeep(questions);
  for (let i = 0; i < questionClone.length; i++) {
    let questionOptions = questionClone[i].options;
    let answerOptions = answer[i].options;

    //creating correct property in result array
    //based on answer
    for (let i = 0; i < questionOptions.length; i++) {
      //creating correct property to calculate score
      questionOptions[i].correct = answerOptions[i].correct ? true : false;
    }

    //looping for score count
    for (let i = 0; i < questionOptions.length; i++) {
      //if one of the option false, lose a score
      if (questionOptions[i].correct !== questionOptions[i].checked) {
        correctAnswer--;
        break;
      }
    }
  }

  return {
    score: correctAnswer * POINTSperQUESTION,
    totalScore: questions.length * POINTSperQUESTION,
    questions: questionClone
  };
};

export default function Result() {
  const { id } = useParams();
  const { data } = useLocation().state;

  //states inside hooks
  const { answer, loading, err } = useAnswer(id);

  const { score, totalScore, questions } = calculateResult(
    data,
    answer,
    POINTSperQUESTION
  );

  return (
    <>
      {loading && <p>loading...</p>}
      {err && <p>There was an error.</p>}
      {!loading && !err && questions.length > 0 && (
        <>
          <Summary score={score} totalScore={totalScore} />
          <Analysis questions={questions} />
        </>
      )}
    </>
  );
}
