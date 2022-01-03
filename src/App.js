import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import NoPageFound from './components/NoPageFound';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Quiz from './components/pages/Quiz';
import Result from './components/pages/Result';
import SignUp from './components/pages/SignUp';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import { VideoListProvider } from './context/VideoListContext';
import './styles/App.css';

function App() {
  return (
    <Layout>
      <VideoListProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />
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
            path='/quiz/:id'
            element={
              <PrivateRoute>
                <Quiz />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path='/result/:id'
            element={
              <PrivateRoute>
                <Result />
              </PrivateRoute>
            }
          />
          <Route path='/404' element={<NoPageFound />} />
          <Route path='*' element={<NoPageFound />} />
        </Routes>{' '}
      </VideoListProvider>
    </Layout>
  );
}

export default App;
