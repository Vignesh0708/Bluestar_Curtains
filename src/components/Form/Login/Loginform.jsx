import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginimg from '../../../assets/cover img/Login form img.png';
import google from '../../../assets/icons/google icon.png';
import './login.css';
import { Link } from 'react-router-dom';

const Loginform = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Valid credentials
  const validCredentials = {
    email: 'user@example.com',
    password: ' qwe123',
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    setPasswordError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setEmailError('');
    setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isValid) {
      if (email === validCredentials.email && password === validCredentials.password) {
        setSuccessMessage('Login successfully');
        setEmail('');
        setPassword('');
      } else {
        setEmailError('Invalid email or password');
        setPasswordError('Invalid email or password');
        setSuccessMessage('');
      }
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={5} className="d-none d-md-block p-0">
          <div>
            <img style={{ height: '100vh' }} className='loginimage' src={loginimg} alt='' />
          </div>
        </Col>

        <Col md={7} className="d-flex align-items-center justify-content-center">
          <div className="p-4 d-grid align-items-center" style={{ maxWidth: '400px'  }}>
            <h2 className="mb-4">Log in to your account</h2>
            <p className='fw-bold text-muted'>Welcome back! Please enter your details.</p>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className='fw-bold'>Email<span className="text-danger">*</span></Form.Label>
                <Form.Control
                  className='shadow-sm'
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={handleEmailChange}
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
                    onChange={handlePasswordChange}
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

              <Form.Group className="mb-4 mt-4" controlId="formRemember">
                <Form.Check style={{ fontSize: '12px' }} className='d-inline-block' type="checkbox" label="Remember For 30 Days" />
                <Link style={{ fontSize: '13px', fontWeight: '500' }}  to="/forgot-password" className="float-end">Forgot Password</Link>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3 fw-bold">
                Sign in
              </Button>

              {successMessage && <p className="text-success text-center fw-bold">{successMessage}</p>}

              <Button variant="light" className="w-100 mb-3 d-flex align-items-center justify-content-center shadow-sm fw-bold">
                <img className='me-2' src={google} alt='google icon' /> Sign in with Google
              </Button>

              <p style={{ fontSize: '12px' }} className="text-center mt-4">Don't have an account? <a style={{ fontWeight: '600' }} href="/sign-up">Sign up</a></p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Loginform;
