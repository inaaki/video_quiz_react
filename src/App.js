import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Quiz from './components/pages/Quiz';
import Result from './components/pages/Result';
import SignUp from './components/pages/SignUp';
import './styles/App.css';

function App() {
  return (
  <Layout>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/result' element={<Result />} />
        <Route exact path='/quiz' element={<Quiz />} />
      </Routes>
    </Layout>
  );
}

export default App;
