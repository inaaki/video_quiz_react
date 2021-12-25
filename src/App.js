import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Quiz from './components/pages/Quiz';
import Result from './components/pages/Result';
import SignUp from './components/pages/SignUp';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import './styles/App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          exact
          path='/signup'
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          exact
          path='/result'
          element={
            <PrivateRoute>
              <Result />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/quiz'
          element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
