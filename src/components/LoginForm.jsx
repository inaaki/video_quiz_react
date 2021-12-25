import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Form from '../Form';
import TextInput from '../TextInput';

function LoginForm() {
  return (
    <Form className='login'>
      <TextInput icon='alternate_email' placeholder='Enter email' type='text' />
      <TextInput icon='lock' placeholder='Enter password' type='password' />
      <Button>Login</Button>
      <div class='info'>
        Don't have an account? <Link to='/signup'>Signup</Link> instead.
      </div>
    </Form>
  );
}

export default LoginForm;
