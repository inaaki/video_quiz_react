import img from '../../images/login.svg';
import Image from '../Image';
import LoginForm from '../LoginForm';

function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className='column'>
        <Image src={img} alt='Login' />
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
