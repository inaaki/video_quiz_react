import { get, getDatabase, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

function useAnswer(id) {
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    async function fetchQuiz() {
      //changing loading state to true
      setLoading(true);
      //
      const db = getDatabase();
      const quizRef = ref(db, 'answers/' + id + '/questions');
      //
      try {
        const snapshot = await get(quizRef);
        if (snapshot.exists()) {
          console.log('data called');
          setAnswer([...snapshot.val()]);
        }
        //**important**: to set loading state to false
        setLoading(false);
      } catch (error) {
        //on error actions
        setErr(error.message);
        setLoading(false);
      }
    }

    fetchQuiz();
  }, [id]);

  return {
    err,
    loading,
    answer
  };
}

export default useAnswer;
