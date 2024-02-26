import React, { useState } from "react";
import { Row, Col, Form, Table, Card, Pagination } from 'react-bootstrap';
import { students } from "../../../initialData/student";
import { progressdatas } from "../../../initialData/student";
import {FiFilter} from 'react-icons/fi' 

import './Progress.scss'
const Progress = () => {
    const [showFilter, setShowFilter] = useState(null)

    const handleSelectedStatus = () => {
        setShowFilter(!showFilter)
    }
  return (
    <div className="progress_master">
      <div className="container">
        <Row>
          <Col lg={5}>
            <strong>{students[0].name}</strong>'s learning process.
            <br />
            <div className="row_div">
              <Row>
                <Col lg={6} className="mt-1">
                  <span className="chooseyear">Choose year</span>
                </Col>
                <Col lg={6} className="mt-1">
                  <div className="row-select">
                    <section className="select">
                      <Form.Select className="select-form">
                        <option value="">All Years</option>
                        {/* {sortedYears} */}
                      </Form.Select>
                    </section>
                  </div>
                </Col>

                <Col lg={6} className="mt-1">
                  <span className="chooseyear">Choose semester</span>
                </Col>
                <Col lg={6} className="mt-1">
                  <div className="row-select">
                    <section className="select">
                      <Form.Select className="select-form">
                        <option value="">Semester 1</option>
                        {/* {sortedYears} */}
                      </Form.Select>
                    </section>
                  </div>
                </Col>
                <Col lg={6} className="mt-1">
                    <span className="chooseyear">Choose Subject</span>
                </Col>
                <Col lg={6} className="mt-1">
                    <div className="row-select">
                    <section className="select">
                        <Form.Select className="select-form">
                        <option value="">Subject</option>
                        {/* {sortedYears} */}
                        </Form.Select>
                    </section>
                    </div>
                </Col>
              </Row>
            </div>
          </Col>
          <div className="table_div">
            <Col lg={12} md={12} sm={12} xs={12}>
                <Table striped bordered hover variant="white">
                    <thead>
                        <tr>
                            <th>Module</th>
                            <th>Seesion</th>
                            <th>Lesson</th>
                            <th>Teacher</th>
                            <th>Progress</th>
                            <th>Date Start</th>
                            <th>Date End</th>
                            <th>
                                <div className="d-flex justify-content-between">
                                    Status
                                    <div className="filter-icon" onClick={handleSelectedStatus}>
                                        <FiFilter />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {progressdatas.map((item,index)=>(
                            <tr key={index}>
                                <td>
                                    <div className="content_col1">
                                        <Card border="success" className="cardprogess">
                                            <Card.Title className="propresssubject">
                                                {item.subject}
                                            </Card.Title>
                                        </Card>
                                        <div className="progresscontent1">
                                            <div className="progressdetail">
                                                {item.detail}
                                            </div>
                                            <div className="progresstime">
                                                {item.time} 
                                            </div> 
                                        </div>
                                    </div>
                                </td>
                                <td>{item.seesion}</td>
                                <td>{item.lesson}</td>
                                <td>{item.teacher}</td>
                                <td>{item.progress}</td>
                                <td>{item.datestart}</td>
                                <td>{item.dateend}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
          </div>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>

            <Pagination.Ellipsis />
            
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Row>
      </div>
    </div>
  );
};

export default Progress;