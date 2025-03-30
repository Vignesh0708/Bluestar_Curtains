import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import signupimg from '../../../assets/cover img/Login form img.png';
import google from '../../../assets/icons/google icon.png';
 import './sign.css'

const Sign_up = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!name) {
      setNameError('Name is required');
      isValid = false;
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    if (isValid) {
      setSuccessMessage('Account created successfully');
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={5} className="d-none d-md-block p-0">
          <div>
            <img style={{ height: '100vh' }} className=' loginimage' src={signupimg} alt='' />
          </div>
        </Col>

        <Col md={7} className="d-flex align-items-center justify-content-center">
          <div className="p-4 d-grid align-items-center" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4">Create an account</h2>
            <p className='fw-bold text-muted'>Join us today! Please enter your details.</p>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className='fw-bold'>Full Name<span className="text-danger">*</span></Form.Label>
                <Form.Control
                  className='shadow-sm'
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {nameError && <small className="text-danger">{nameError}</small>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className='fw-bold'>Email<span className="text-danger">*</span></Form.Label>
                <Form.Control
                  className='shadow-sm'
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {emailError && <small className="text-danger">{emailError}</small>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label className='fw-bold'>Password<span className="text-danger">*</span></Form.Label>
                <div className="position-relative">
                  <Form.Control
                    className='shadow-sm'
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span className='text-muted'
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {passwordError && <small className="text-danger">{passwordError}</small>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label className='fw-bold'>Confirm Password<span className="text-danger">*</span></Form.Label>
                <Form.Control
                  className='shadow-sm'
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {confirmPasswordError && <small className="text-danger">{confirmPasswordError}</small>}
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3 fw-bold">
                Sign up
              </Button>

              {successMessage && <p className="text-success text-center fw-bold">{successMessage}</p>}

              <Button variant="light" className="w-100 mb-3 d-flex align-items-center justify-content-center shadow-sm fw-bold">
                <img className='me-2' src={google} alt='google icon' /> Sign up with Google
              </Button>

              <p style={{ fontSize: '12px' }} className="text-center mt-4">Already have an account? <a style={{ fontWeight: '600' }} href="/log-in">Log in</a></p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default  Sign_up;
