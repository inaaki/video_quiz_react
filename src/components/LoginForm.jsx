import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import btnStyle from '../styles/Form.module.css';
import Button from './Button';
import Form from './Form';
import FormError from './FormError';
import TextInput from './TextInput';

function LoginForm() {
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: '',
    pass: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form };
    newForm[name] = value;
    setForm(newForm);
  };

  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, pass } = form;

    setLoading(true);
    login(email, pass)
      .then(() => {
        navigate('/', { option: true });
      })
      .catch(() => {
        setErr('Unable to log in, please try again');
        setLoading(false);
      });
  };
  return (
    <Form className='login' onSubmit={handleSubmit}>
      <TextInput
        icon='alternate_email'
        placeholder='Enter email'
        type='text'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      <TextInput
        name='pass'
        value={form.pass}
        icon='lock'
        placeholder='Enter password'
        type='password'
        onChange={handleChange}
      />
      <Button className={btnStyle.button} type='submit' disabled={loading}>
        Login
      </Button>

      {err && <FormError text={err} />}
      <div className='info'>
        Don't have an account? <Link to='/signup'>Signup</Link> instead.
      </div>
    </Form>
  );
}

export default LoginForm;
