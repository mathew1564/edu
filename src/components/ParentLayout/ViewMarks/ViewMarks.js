import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Form, Table, Pagination } from 'react-bootstrap'
import './ViewMarks.scss'
import { LoginContext } from '../../Authentication/LoginContext'
import { markStudent } from '../../../initialData/dataMenu'

export default function ViewMarks() {
    const [name, setName] = useState('1');
    const [value, setValue] = useState();
    const { loginValue } = useContext(LoginContext)
    const [hidden, setHidden] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const last = currentPage * 5;
    const first = last - 5;
    const mark = markStudent;
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const currentItems = mark.slice(first, last);
    useEffect(() => {

        if (name === '1') {
            setValue('Nguyen Phi Long')
        }
        else if (name === '2') {
            setValue('Le Thi Phuong Anh')
        }
        else if (name === '3') {
            setValue('Truong Trung Nguyen')
        }
    }, [name])
    return (
        <Container className='viewMark' >
            <Row className='container-headerViewMark'>
                <Col lg={8} xs={12} className='header-viewMark mt-5 pb-3 '>
                    <Col lg={6} xs={12} className='mt-4' >
                        <Form.Group>
                            <Form.Label>
                                Choose student
                            </Form.Label>
                            <Form.Select value={name} onChange={e => setName(e.target.value)}>
                                <option value="1">Nguyen Phi Long</option>
                                <option value="2">Le Thi Phuong Anh</option>
                                <option value="3">Truong Trung Nguyen</option>

                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col lg={4} xs={12} className='mt-4'>
                        <Form.Group>
                            <Form.Label>
                                Choose Subject
                            </Form.Label>
                            <Form.Select >
                                <option value="1">Subject</option>
                                <option value="2">Subject</option>
                                <option value="3">Subject</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Col>
            </Row>
            <Row className='body-viewMark '>
                <Col lg={4} className='infor-viewmark'>
                    <div className='fs-5 fw-bold text-center mt-3 body-title pb-2 '>
                        STUDENT INFORMATION
                    </div>
                    <section className='item-viewMark mt-4 mb-4  '>
                        <div className='item-title fw-bold d-inline-block me-4 col-4'>
                            name
                        </div>
                        <div className='item-content d-inline-block'>
                            {value}
                        </div>
                    </section>
                    <section className='item-viewMark mt-4 mb-4  '>
                        <div className='item-title fw-bold d-inline-block me-4 col-4'>
                            Birthdate
                        </div>
                        <div className='item-content d-inline-block'>
                            15/06/2004
                        </div>
                    </section>
                    <section className='item-viewMark mt-4 mb-4  '>
                        <div className='item-title fw-bold d-inline-block me-4 col-4'>
                            Email
                        </div>
                        <div className='item-content d-inline-block'>
                            {loginValue.email}
                        </div>
                    </section>
                    <section className='item-viewMark mt-4 mb-4  '>
                        <div className='item-title fw-bold d-inline-block me-4 col-4'>
                            Phone
                        </div>
                        <div className='item-content d-inline-block'>
                            0123456789
                        </div>
                    </section>
                    <section className='item-viewMark mt-4 mb-4  '>
                        <div className='item-title fw-bold d-inline-block me-4 col-4'>
                            Class
                        </div>
                        <div className='item-content d-inline-block'>
                            C2208I1
                        </div>
                    </section>


                </Col>
                <Col lg={7} className='container-table mt-4 mb-5'>


                    <Table triped hover className='table-viewMark table-striped mt-3 col-10 ' >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th >Mark</th>
                                <th className='item-hidden'>MaxMark</th>
                                <th className='item-hidden'>Time</th>
                                <th >Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((mark, index) => (
                                <>
                                    <tr className='row-show'>
                                        <td>{mark.name}</td>
                                        <td>{mark.mark}</td>
                                        <td className='item-hidden'>{mark.maxMark}</td>
                                        <td className='item-hidden'>{mark.time}</td>
                                        <td >
                                            <div className={`${mark.status}`}>
                                                {mark.status}
                                            </div>
                                        </td>

                                    </tr>
                                    <div className='row-hidden'>

                                        <div className=' item-row-hidden1 '>

                                            &nbsp;  Maxmark:  &nbsp;  {mark.maxMark}  <br />   &nbsp;  Time:  &nbsp; {mark.time}
                                        </div>
                                        {/* <td className='item-row-hidden2'>
                                        
                                       
                                        </td> */}





                                    </div>
                                </>
                            ))}
                        </tbody>
                    </Table>

                </Col>
                <Pagination className='d-flex justify-content-center'>
                    <Pagination.First
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                    />
                    <Pagination.Prev
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    />

                    <Pagination.Item active>{currentPage}</Pagination.Item>

                    <Pagination.Next
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === Math.ceil(mark.length / 5)}
                    />
                    <Pagination.Last
                        onClick={() => handlePageChange(Math.ceil(mark.length / 5))}
                        disabled={currentPage === Math.ceil(mark.length / 5)}
                    />
                </Pagination>
            </Row>
        </Container>

    )
}
