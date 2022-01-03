import { get, getDatabase, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useQuizList(id) {
  const navigate = useNavigate();
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(true);
  const [quiz, setQuizList] = useState([]);

  useEffect(() => {
    async function fetchQuiz() {
      //changing loading state to true
      setLoading(true);
      //
      const db = getDatabase();
      const quizRef = ref(db, 'quiz/' + id + '/questions');
      //
      try {
        const snapshot = await get(quizRef);
        if (snapshot.exists()) {
          setQuizList((prev) => [...snapshot.val()]);
        } else {
          return navigate('/404', { replace: true });
        }
        //important: to set loading state to false
        setLoading(false);
      } catch (error) {
        //on error actions
        setErr(error.message);
        setLoading(false);
      }
    }

    fetchQuiz();
  }, [id,navigate]);

  return {
    err,
    loading,
    quiz
  };
}

export default useQuizList;
