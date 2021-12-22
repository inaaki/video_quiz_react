import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import TextInput from '../../components/TextInput';
import img from '../../images/signup.svg';
import Form from '../Form';
import Image from '../Image';

function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className='column'>
        <Image src={img} alt={'Sign Up'} />
        <Form className='signup'>
          <TextInput type='text' placeholder='Enter name' icon='person' />
          <TextInput
            type='text'
            placeholder='Enter email'
            icon='alternate_email'
          />
          <TextInput type='password' placeholder='Enter password' icon='lock' />
          <TextInput
            type='password'
            placeholder='Confirm password'
            icon='lock_clock'
          />
          <Checkbox text='I agree to the Terms &amp; Conditions' />
          <Button>Submit now</Button>
          <div class='info'>
            Already have an account? <Link to='/login'>Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default SignUp;
