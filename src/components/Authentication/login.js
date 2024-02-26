import React ,{ useState}from 'react'
import { Row, Col, Container } from "react-bootstrap"
import logo1 from "../../assets/img/logo (1).png"
import "./Login.scss"
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap"
import {AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import Cookies from 'js-cookie';
export default function Login() {
   
    const [email,setEmail]=useState();
    const [password,setPassword]=useState()
    const [position,setPosition]=useState('1')
    const [showPass,setShowPass]=useState(true)
    const [validate,setValidate]=useState(false)
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000);
    const handleLogin=(event)=> {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidate(true);
      if(form.checkValidity()===true) {
        let obj={isLogin:true,email:email,position:position};
        Cookies.set('isLogin', JSON.stringify(obj),{expires:expiryDate})
      }
    }
    console.log(position);
  return (
    <>

      <Container className='container mb-5 mt-5'>

        <Row className='header'>

        <img src={logo1} className='logo' alt="" />
        </Row>

        <Row className=' margin-logo '>
          <Col lg={6} className='mb-3'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className='img-background' alt="" />
          </Col>
          <Col className=''>
            <Form  noValidate validated={validate} onSubmit={handleLogin}>
              <Form.Group >
                <Form.Label>Email</Form.Label>
                <Form.Control  required type='email' placeholder='Enter the email' value={email} onChange={e=>setEmail(e.target.value)} />
                <Form.Control.Feedback type="invalid">
              Please enter a email.
            </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mt-3 password'>
                <Form.Label>Password</Form.Label>
                <Form.Control required type={`${showPass?'password':'text'}`} placeholder='Enter the password' value={password} onChange={e=>setPassword(e.target.value)} />
                <AiFillEye className={`pass-eye ${showPass?'':'d-none'}`} onClick={()=>setShowPass(false)} />
                <AiFillEyeInvisible className={`pass-eye ${showPass?'d-none':''}`} onClick={()=>setShowPass(true)} />
                <Form.Control.Feedback type="invalid">
              Please enter a password.
            </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mt-3'>
                <Form.Label>Choose the position</Form.Label>
                <Form.Select required  value={position} onChange={e=>setPosition(e.target.value)}>

                  <option value="1">Student</option>
                  <option value="2">Teacher</option>
                  <option value="3">Parent</option>
                </Form.Select>
              </Form.Group>
              <Row className='mt-3'>

                <Col xs={6} className='d-inline-block'>
                  <Form.Check type={'checkbox'} label={'Remember me'} />
                </Col>
                <Col xs={6} className='d-inline-block text-end'>
                  <p>Forgot password?</p>
                </Col>
              </Row>
              <Row className='mt-3'>

                <Col xs={6} className='d-inline-block'>
                  <Button type='submit' className='pe-3 ps-3'  >Sign in</Button>

                </Col>
                <Col xs={6} className='d-inline-block text-end'>

                  <section >
                    <span className='fw-bold'>Don't have an account?</span>
                    <span className='text-danger'> Register</span>
                  </section>
                </Col>
              </Row>
            </Form>
          </Col>

        </Row>
      </Container>

      <Row className='footer'>
        <p className='text-light ms-5'>Copyright © 2020. All rights reserved.</p>
      </Row>
    </>
  )
}
