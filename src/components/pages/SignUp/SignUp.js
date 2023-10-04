import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './SignUp.css'

const LoginSignup = () => {
  const [activeForm, setActiveForm] = useState('login');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Send the login or signup data to the server.
    // If the authentication or account creation is successful, redirect the user to the home page.
    // Otherwise, display an error message.
  };

  return (
    <div className="sign-up-container">
      <h1>Login or Sign Up</h1>

      <div className="row">
        <div className="col-md-6">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email address" />
            </Form.Group>

            {activeForm === 'login' && (
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
              </Form.Group>
            )}

            {activeForm === 'signup' && (
              <Form.Group controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            )}

            <Button type="submit">Submit</Button>
          </Form>
        </div>

        <div className="col-md-6">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <a
                className={`nav-link ${activeForm === 'login' ? 'active' : ''}`}
                onClick={() => setActiveForm('login')}
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeForm === 'signup' ? 'active' : ''}`}
                onClick={() => setActiveForm('signup')}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
