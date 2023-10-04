import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './SignUp.css'; // Import the provided CSS

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = () => {
    // Handle signup logic here (e.g., send data to a server)
    console.log('Signup:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Signup</h2>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={handleSignup}
            className="signup-button"
          >
            Signup
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;