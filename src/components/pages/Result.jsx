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
  if (!answer.length || !questions.length)
    return {
      score: 0,
      totalScore: 0,
      questions: []
    };

  let correctAnswer = questions.length;
  const questionClone = _.cloneDeep(questions);
  for (let i = 0; i < questionClone.length; i++) {
    let questionOptions = questionClone[i].options;
    let answerOptions = answer[i].options;

    //creating correct property in result's array
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
  const { state } = useLocation();

  // passing location state to useAnswer hook
  // to handle >>invalid routing<< to this component
  const { answer, loading, err } = useAnswer(id, state);

  const { score, totalScore, questions } = calculateResult(
    state?.questions,
    answer,
    POINTSperQUESTION
  );
  return (
    <>
      {loading && <p>loading...</p>}
      {err && <p>{err}</p>}
      {!loading && !err && questions?.length > 0 && (
        <>
          <Summary score={score} totalScore={totalScore} />
          <Analysis questions={questions} />
        </>
      )}
    </>
  );
}
