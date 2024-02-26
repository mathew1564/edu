import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import contactUs from '../../assets/img/contactUs.png'
import { AiOutlineEnvironment, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import './ContactUs.scss'
export default function ContactUs() {
    return (

        <>
            <Row>
                <Col  sm={5} lg={6} className='mt-3 d-flex justify-content-center align-items-center mb-3'>
                    <Card className='card-contactUs' >
                        <Card.Body>
                            <Card.Title className='text-center'>Helplines</Card.Title>
                            <div className='location-contact p-1  mt-4 border-radius '>
                                <AiOutlineEnvironment className=' ms-2 me-2 text-success fs-4 ' />  Aptech Computer Education
                            </div>
                            <div className='mail-contact p-1  mt-4 border-radius'>
                                <AiOutlineMail className=' ms-2 me-2 text-danger fs-4'  />   eStudiez@gmail.com
                            </div>
                            <div className='phone-contact p-1  mt-4 border-radius'>
                                <BiPhoneCall className=' ms-2 me-2 text-primary fs-4' />
                                <div className='phone-number'>

                                    0123456789
                                    <br/>
                                    0123456789
                                    <br/>
                                    0123456789
                                </div>
                               

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col  sm={7} lg={6} className='mt-3 text-center d-flex '>
                    <img src={contactUs} className='img-contact' />
                </Col>
            </Row>
        </>
    )
}
