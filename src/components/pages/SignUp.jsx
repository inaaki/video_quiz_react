import img from '../../images/signup.svg';
import Image from '../Image';
import SignupForm from '../SignupForm';

function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className='column'>
        <Image src={img} alt={'Sign Up'} />
        <SignupForm />
      </div>
    </>
  );
}

export default SignUp;
