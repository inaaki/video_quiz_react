import img from '../../images/login.svg';
import Button from '../Button';
import Form from '../Form';
import Image from '../Image';
import TextInput from '../TextInput';

function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className='column'>
        <Image src={img} alt='Login' />
        <Form className='login'>
          <TextInput
            icon='alternate_email'
            placeholder='Enter email'
            type='text'
          />
          <TextInput icon='lock' placeholder='Enter password' type='password' />
          <Button></Button>
          <div class='info'>
            Don't have an account? <a href='signup.html'>Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
