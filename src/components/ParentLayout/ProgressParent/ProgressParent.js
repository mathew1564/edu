
import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Form, Table } from 'react-bootstrap'
import './ProgressParent.scss'
import { LoginContext } from '../../Authentication/LoginContext'
import { ProgressSubject } from '../../../initialData/dataMenu'
import { BsFileEarmarkText } from "react-icons/bs";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Pagination from 'react-bootstrap/Pagination';
export default function ProgressParent() {
  const subject = ProgressSubject;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * 5;
  const indexOfFirstItem = indexOfLastItem - 5;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const currentItems = subject.slice(indexOfFirstItem, indexOfLastItem);
  const bodysubject = (text) => {
    if (text !== 'Exam') {

      return (
        <div className='subject-progress me-2 d-inline-block'  >
          {text}
        </div>
      )
    }
    else {
      return (
        <div className='exam-progress me-2 d-inline-block'  >
          {text}
        </div>
      )
    }
  }
  const bodyFile = (text) => {
    return (
      <div className='file-body'>
        <BsFileEarmarkText /> {text}
      </div>
    )
  }
  const bodyProgress = (text) => {
    if (text < 100) {
      return (
        <ProgressBar striped variant="info" label={text + '%'} now={text} />
      )
    }
    else if (text === 100) {
      return (
        <ProgressBar striped variant="success" label={'Completed'} now={text} />
      )
    }
  }
  const bodyStatus = (text) => {
    if (text === 'Completed') {

      return (
        <div className='body-status'>
          {text}
        </div>
      )
    }
    else if (text === 'Schedule') {
      return (

        <div className='body-status-schedule'>
          {text}
        </div>

      )
    }
  }

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <Container className='progressParent'>
      <Row className='progressParent-header pb-4'>
        <Row className='mt-3'>
          <Col lg={6}>
            <Form.Group>
              <Form.Label>
                Choose student :
              </Form.Label>
              <Form.Select>
                <option>Student</option>
                <option>Student</option>
                <option>Student</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group>
              <Form.Label>
                Choose year :
              </Form.Label>
              <Form.Select>
                <option>2021-2023</option>
                <option>2021-2023</option>
                <option>2021-2023</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col lg={6}>
            <Form.Group>
              <Form.Label>
                Choose Module :
              </Form.Label>
              <Form.Select>
                <option>Html,Css</option>
                <option>Html,Css</option>
                <option>Html,Css</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group>
              <Form.Label>
                Choose Semester :
              </Form.Label>
              <Form.Select>
                <option>Sem 1</option>
                <option>Sem 1</option>
                <option>Sem 1</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Row>
      <Row className='mt-4 progressParent-table text-center mb-5 '>

        <Table striped bordered hover className='table-striped table-progress'>
          <thead>
            <tr>
              <th>Module</th>
              <th>Lesson</th>
              <th >File</th>
              <th>Progress</th>
              <th className='item-hidden'>Date Start</th>
              <th className='item-hidden' >Date end</th>
              <th className='item-hidden'>Status</th>
            </tr>
          </thead>
          <tbody>


            {currentItems.map((subject, index) => (
              <>
                <tr className='row-show'>
                  <td>
                    {bodysubject(subject.subject)}
                    <span className='text-primary progress-module'> {subject.module}</span>
                  </td>
                  <td>{subject.lesson}</td>
                  <td >{bodyFile(subject.file)}</td>
                  <td>{bodyProgress(subject.progress)}</td>
                  <td className='item-hidden'>{subject.dateStart} <span className='text-primary progress-module'>{subject.classStart}</span> </td>
                  <td className='item-hidden'>{subject.dateEnd} <span className='text-primary progress-module'>{subject.classEnd}</span> </td>
                  <td className='item-hidden'>{bodyStatus(subject.status)}</td>

                </tr>
                <div className='row-hidden'>
                  <div className='hover-hidden' >
                    <section className='text-start ms-3'>
                      Status: {bodyStatus(subject.status)}
                      <br />
                      <br />
                      Start date: {subject.dateStart} <span className='text-primary progress-module'>{subject.classStart}</span>
                      <br />
                      <br />
                      End date:  {subject.dateEnd}
                      <span className='text-primary progress-module'>{subject.classEnd}</span>
                    </section>
                  </div>

                </div>
              </>
            ))}

          </tbody>
        </Table>
      </Row>
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
          disabled={currentPage === Math.ceil(subject.length / 5)}
        />
        <Pagination.Last
          onClick={() => handlePageChange(Math.ceil(subject.length / 5))}
          disabled={currentPage === Math.ceil(subject.length / 5)}
        />
      </Pagination>
    </Container>
  )
}
