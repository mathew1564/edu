import React, { useContext, useEffect, useState } from 'react'
import './Profile.scss'
import { LoginContext } from '../../components/Authentication/LoginContext';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/img/banner-profile.jpg'
export default function Profile() {
  const { loginValue } = useContext(LoginContext)
  const [name, setName] = useState();
  const [role, setRole] = useState()
  const [email, setEmail] = useState()
  useEffect(() => {
    setEmail(loginValue.email)
    if (loginValue.position === '1') {
      setName('Student')
      setRole('Student')
    }
    else if (loginValue.position === '2') {
      setName("Teacher")
      setRole("Teacher")
    }
    else if (loginValue.position === '3') {
      setName("Parent")
      setRole("Parent")
    }
  }, [])
  return (

    <Container className='profile mb-3'>
      <Row className='container-header'>
        <img className='logo-profile' src={logo} />
        <Col lg={12} className='profile-header'>
          <div className='avatar-profile'>
            <div className='status-profile'>

            </div>
          </div>
          <section className='title-profile'>

            <div className='fs-3 d-inline-block   me-4'>
              {name} - C2208I1
            </div>
            <div className='role-profile d-inline-block fw-bold p-1'>
              {role}
            </div>

          </section>
          <div className='email-profile text-black-50'>
            {email}
          </div>
        </Col>
      </Row>
      <Row className='container-body'>
        <section  >
          <div className='title-body fs-4 pb-3'>
            Details
          </div>

        </section>
        <section className='text-center'>
          
        <Row  className='  mb-3 mt-4'>
          <Col sm={4} xs={12}>
            <Row>
              <Col lg={6} sm={12} xs={12} className='text-body-tertiary mb-2'>Frist Name</Col>
              <Col lg={6} sm={12} xs={12} className='mb-4'>{name}</Col>
            </Row>
          </Col>
          <Col sm={4} xs={12} >
            <Row>
              <Col lg={6} sm={12} xs={12} className='text-body-tertiary mb-2'>Phone number</Col>
              <Col lg={6} sm={12} xs={12} className='mb-4'>1234566789</Col>
            </Row>
          </Col>
          <Col sm={4} xs={12}>
            <Row>
              <Col lg={6} sm={12} xs={12} className='text-body-tertiary mb-2'>Birthdate</Col>
              <Col lg={6} sm={12} xs={12} className='mb-4'>15/06/2004  </Col>
            </Row>
          </Col>

        </Row>
        <Row  className='  mb-3 mt-2'>
          <Col sm={4} xs={12}>
            <Row>
              <Col lg={6} sm={12} xs={12} className='text-body-tertiary mb-2'>Last Name</Col>
              <Col lg={6} sm={12} xs={12} className='mb-4'>{name}</Col>
            </Row>
          </Col>
          <Col sm={4} xs={12} >
            <Row>
              <Col lg={6} sm={12} xs={12} className='text-body-tertiary mb-2'>Email</Col>
              <Col lg={6} sm={12} xs={12} className='mb-4'>{email}</Col>
            </Row>
          </Col>
          <Col sm={4} xs={12}>
            <Row>
              <Col lg={6} sm={12} xs={12} className='text-body-tertiary mb-2'>Gender</Col>
              <Col lg={6} sm={12} xs={12} className='mb-4'>Male </Col>
            </Row>
          </Col>

        </Row>
        <Row  className='mb-3 mt-2 mb-4 '>
          <Col sm={4} xs={12}>
            <Row>
              <Col lg={6} sm={12} xs={12} className='text-body-tertiary mb-2'>Your Class</Col>
              <Col lg={6} sm={12} xs={12} className='mb-4'>C2208I1</Col>
            </Row>
          </Col>
          <Col sm={4} xs={12} >
            <Row>
              <Col lg={6} sm={12} xs={12} className='text-body-tertiary mb-2'>Addrress</Col>
              <Col lg={6} sm={12} xs={12} className='mb-4'>Aptech</Col>
            </Row>
          </Col>
          <Col sm={4} xs={12}>
            <Row>
              <Col lg={6} sm={12} xs={12} className='text-body-tertiary mb-2'>Guardian</Col>
              <Col lg={6} sm={12} xs={12} className='mb-4'>Nguyen Van A </Col>
            </Row>
          </Col>

        </Row>
        </section>
      </Row>

    </Container>
  )
}
