import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash/lang';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import useQuizList from '../../hooks/useQuizList';
import getPercentage from '../../utils/getPercentage';
import Answers from '../Answers';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';

function Quiz() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { quiz, loading } = useQuizList(useLocation().state);
  const [localQuiz, setLocalQuiz] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(0);

  useEffect(() => {
    const newQuiz = _.cloneDeep(quiz);
    newQuiz.forEach((element) => {
      element.options.forEach((option) => (option.checked = false));
    });
    setLocalQuiz(newQuiz);
  }, [quiz]);

  const handleChange = (e, idx) => {
    console.log('im in handle change');

    const newQuiz = _.cloneDeep(localQuiz);
    newQuiz[currentQuiz].options[idx].checked = e.target.checked;
    setLocalQuiz(newQuiz);
  };

  //handle prev question
  const prevQuestion = (e) => {
    if (!!currentQuiz) {
      setCurrentQuiz((prev) => prev - 1);
    }
  };
  //handle next question
  const nextQuestion = (e) => {
    if (currentQuiz < localQuiz.length - 1) {
      setCurrentQuiz((prev) => prev + 1);
    }
  };

  const submitResult = async () => {
    //get user id
    const { uid } = currentUser;

    //save to cloud
    const db = getDatabase();
    const dbRef = ref(db, `/results/${uid}`);
    try {
      await set(dbRef, localQuiz);
    } catch (e) {}

    //direct to result page
    //direct data to the next page
    navigate('/result', { replace: true, state: localQuiz });
  };

  return (
    <>
      {loading && <p>Loading...</p>}

      {!loading && localQuiz && localQuiz.length > 0 && (
        <>
          <h1>{localQuiz[currentQuiz].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={localQuiz[currentQuiz].options}
            onChange={handleChange}
          />

          <ProgressBar
            progress={getPercentage(currentQuiz + 1, localQuiz.length)}
            next={nextQuestion}
            prev={prevQuestion}
            submit={submitResult}
          />

          <MiniPlayer title={localQuiz[currentQuiz]?.title} />
        </>
      )}
    </>
  );
}

export default Quiz;
