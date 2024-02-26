import React from 'react'
import { Row, Col, Card, Form,Button } from 'react-bootstrap'
import feedback from '../../assets/img/feedback.png'
import './FeedBack.scss'
export default function FeedBack() {
  return (
    <>
      <Row className=''>
        <Col sm={5} md={6} className='mb-4 col-feedback d-flex align-items-center'>
          <img className='img-feedback' src={feedback} />
        </Col>
        <Col sm={7} md={6} className=' mb-4 d-flex justify-content-center col-feedback '>
          

          <Card className='card-feedback ' >
            <Card.Body className='card-feeback-body'>
              <Card.Title className='text-center fw-bold'>
                FeedBack Form
              </Card.Title>
              <Form>
                <Form.Group className='mt-3'>
                  <Form.Label className='fw-bold'>
                    Name :
                  </Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group className='mt-3'>
                  <Form.Label className='fw-bold'>
                   Class :
                  </Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group className='mt-3'>
                  <Form.Label className='fw-bold'>
                   Email :
                  </Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group className='mt-3'>
                  <Form.Label className='fw-bold'>
                   Subject:
                  </Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form>
              <Form.Group className='mt-3'>
                  <Form.Label  className='fw-bold'>
                    Message :
                  </Form.Label>
                  <Form.Control  as={'textarea'}/>
                </Form.Group>
            <div className=' text-center mb-3'>
            <Button className='mt-4'>Submit</Button> 
            </div>
            </Card.Body>
            
          </Card>
         
        </Col>
      </Row>
    </>
  )
}
