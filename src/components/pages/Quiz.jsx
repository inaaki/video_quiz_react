import Answers from '../Answers';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';

function Quiz() {
  const title = '#23 React Hooks Bangla - React useReducer hook Bangla';

  return (
    <>
      <h1>Pick three of your favorite Star Wars Films</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer title={title} />
    </>
  );
}

export default Quiz;
