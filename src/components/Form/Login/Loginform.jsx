 
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginimg from '../../../assets/cover img/Login form img.png'
import google from '../../../assets/icons/google icon.png'
import './login.css'

const  Loginform = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container fluid>
      <Row>
       
        <Col md={6} className="d-none d-md-block p-0">
           <div >
            <img style={{height:"100vh"}} className='loginimage' src={loginimg} alt=''/>
           </div>
        </Col>

      
        <Col md={6} className="d-flex align-items-center justify-content-center ">
          <div className="p-4 d-grid align-items-center" style={{ maxWidth: '400px',width:"100%"  }}>
            <h2 className="mb-4">Log in to your account</h2>
            <p className='fw-bold text-muted'>Welcome back! Please enter your details.</p>

            <Form>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className='fw-bold'>Email<span className="text-danger">*</span></Form.Label>
                <Form.Control className='shadow-sm' type="email" placeholder="Enter Your Email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label className='fw-bold'>Password<span className="text-danger">*</span></Form.Label>
                <div className="position-relative">
                  <Form.Control className='shadow-sm'
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="Enter Password" required 
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer',display:"flex",alignItems:"center" }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </Form.Group>

              <Form.Group className="mb-4 mt-4  " controlId="formRemember">
                <Form.Check style={{fontSize:"12px"}} className='d-inline-block' type="checkbox" label="Remember For 30 Days" />
                <a style={{fontSize:"13px",fontWeight:"500"}} href="/forgot-password" className="float-end   ">Forgot Password</a>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3 fw-bold">
                Sign in
              </Button>

              <Button variant="light" className="  w-100 mb-3 d-flex align-items-center justify-content-center shadow-sm fw-bold">
                 <img className='me-2 ' src={google} alt='google icon'/> Sign in with Google
              </Button>

              <p style={{fontSize:"12px"}} className="text-center mt-4 ">Don't have an account? <a style={{fontWeight:"600"}} href="/signup">Sign up</a></p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default  Loginform;
