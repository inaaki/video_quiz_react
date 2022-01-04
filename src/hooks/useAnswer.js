import { get, getDatabase, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useAnswer(id, state) {
  const navigate = useNavigate();
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    //handling invalid routing 
    if (!state) return navigate('/404', { replace: true });

    //declaring IIFE to get data for valid routing
    (async function () {
      setLoading(true);
      //
      const db = getDatabase();
      const quizRef = ref(db, 'answers/' + id + '/questions');
      //
      try {
        const snapshot = await get(quizRef);
        if (snapshot.exists()) {
          setAnswer([...snapshot.val()]);
        } else {
          setErr('No Answer Found');
        }
        setLoading(false);
      } catch (error) {
        setErr(error.message);
        setLoading(false);
      }
    })();
  }, [id, state, navigate]);

  return {
    err,
    loading,
    answer
  };
}

export default useAnswer;
