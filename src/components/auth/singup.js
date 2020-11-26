import React, { useContext, useState } from 'react';
import { LoginContext } from '../../context/context';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { If } from 'react-if';

import './singup.scss';

export default function Signup() {
  const signupContext = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');

  const handleChange = (e) => {
    if (e.target.name === 'password') {
      setPassword(e.target.value);
      console.log(e.target.value);
    } else if (e.target.name === 'username') {
      setUsername(e.target.value);
      console.log(e.target.value);
    } else if (e.target.name === 'role') {
      setRole(e.target.value);
      console.log(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
      console.log(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    signupContext.signup(username, password, role, email);
  };
  return (
    <If condition={!signupContext.loggedIn}>
      <Form id='signup-form' onSubmit={handleSubmit}>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            name='username'
            type='text'
            placeholder='Enter your userName'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>Enter Your Password</Form.Label>
          <Form.Control
            name='password'
            type='password'
            placeholder='Enter You Password'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter email'
            onChange={handleChange}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            name='role'
            type='text'
            placeholder='Enter your Role user/admin/editor'
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </If>
  );
}
