import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import btnStyle from '../styles/Form.module.css';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import FormError from './FormError';
import TextInput from './TextInput';

function SignupForm() {
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: '',
    email: '',
    pass: '',
    confirmPass: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    const newForm = { ...form };
    newForm[name] = checked || value;
    setForm(newForm);
  };

  const { signup } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const { confirmPass, email, pass, username } = form;
    if (pass !== confirmPass) {
      setErr('Password do no match');
      return;
    }

    setLoading(true);

    signup(email, pass, username)
      .then(() => {
        navigate('/', { replace: true });
      })
      .catch(() => {
        setErr('Unable to signup, please try again');
        setLoading(false);
      });
  };

  return (
    <Form className='signup' onSubmit={handleSubmit}>
      <TextInput
        icon='person'
        name='username'
        placeholder='Enter name'
        type='text'
        value={form.username}
        onChange={handleChange}
      />
      <TextInput
        icon='alternate_email'
        name='email'
        placeholder='Enter email'
        type='text'
        value={form.email}
        onChange={handleChange}
      />
      <TextInput
        icon='lock'
        name='pass'
        placeholder='Enter password'
        type='password'
        value={form.pass}
        onChange={handleChange}
      />
      <TextInput
        icon='lock_clock'
        name='confirmPass'
        placeholder='Confirm password'
        type='password'
        value={form.confirmPass}
        onChange={handleChange}
      />
      <Checkbox
        name='agree'
        text='I agree to the Terms &amp; Conditions'
        value={form.agree}
        onChange={handleChange}
      />
      <Button className={btnStyle.button} type='submit' disabled={loading}>
        Submit now
      </Button>
      {err && <FormError text={err} />}

      <div className='info'>
        Already have an account? <Link to='/login'>Login</Link> instead.
      </div>
    </Form>
  );
}

export default SignupForm;
