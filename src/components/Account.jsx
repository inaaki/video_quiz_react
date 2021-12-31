import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import classes from '../styles/Account.module.css';

function Account() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate('/login');
      })
      .catch((e) => {
        alert('Failed to Log out');
      });
  };

  return (
    <div className={classes.account}>
      <span className='material-icons-outlined' title='Account'>
        account_circle
      </span>

      {!currentUser ? (
        <>
          <Link to='/signup'>Signup</Link>
          <Link to='/login'>Login</Link>
        </>
      ) : (
        <>
          {currentUser?.email}{' '}
          <span
            className='material-icons-outlined'
            title='Logout'
            onClick={handleLogout}
            style={{ marginLeft: '1em' }}
          >
            {' '}
            logout{' '}
          </span>
        </>
      )}
    </div>
  );
}

export default Account;
