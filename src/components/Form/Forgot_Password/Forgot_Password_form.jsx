import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import forgotPasswordImg from '../../../assets/cover img/Login form img.png';
// import google from '../../../assets/icons/google icon.png';
 import './Forgot.css'

const  Forgot_Password_form = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (isValid) {
      setSuccessMessage('Password reset link sent to your email');
      setEmail('');
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={5} className="d-none d-md-block p-0">
          <div>
            <img style={{ height: '100vh' }} className=' loginimage' src={forgotPasswordImg} alt='' />
          </div>
        </Col>

        <Col md={7} className="d-flex align-items-center justify-content-center">
          <div className="p-4 d-grid align-items-center" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4">Forgot Password</h2>
            <p className='fw-bold text-muted'>Enter your email to receive a password reset link.</p>

            <Form onSubmit={handleSubmit}>
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

              <Button variant="primary" type="submit" className="w-100 mb-3 fw-bold">
                Reset Password
              </Button>

              {successMessage && <p className="text-success text-center fw-bold">{successMessage}</p>}

              <p style={{ fontSize: '12px' }} className="text-center mt-4">Remember your password? <a style={{ fontWeight: '600' }} href="/log-in">Log in</a></p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default  Forgot_Password_form;
