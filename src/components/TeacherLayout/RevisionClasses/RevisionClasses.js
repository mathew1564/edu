import React, { useState } from "react";
import { Row, Col, Form, Table, Card, Pagination } from 'react-bootstrap';
import { students } from "../../../initialData/student";
import { progressdatas } from "../../../initialData/student";
import {FiFilter} from 'react-icons/fi' 

import './RevisionClasses.scss'
const RevisionClasses = () => {
    const [showFilter, setShowFilter] = useState(null)

    const handleSelectedStatus = () => {
        setShowFilter(!showFilter)
    }
  return (
    <div className="revisoionclasses_master">
      <div className="container">
        <Row className="mt-5">
          <Col lg={5}>
            <div className="row_div">
              <Row>
                <Col lg={5}>
                  <span className="chooseyear">Choose year</span>
                </Col>
                <Col lg={7}>
                  <div className="row-select">
                    <section className="select">
                      <Form.Select defaultValue="">
                        <option value="">All Years</option>
                        {/* {sortedYears} */}
                      </Form.Select>
                    </section>
                  </div>
                </Col>

                <Col lg={5}>
                  <span className="chooseyear">Choose semester</span>
                </Col>
                <Col lg={7}>
                  <div className="row-select">
                    <section className="select">
                      <Form.Select defaultValue="">
                        <option value="">Semester 1</option>
                        {/* {sortedYears} */}
                      </Form.Select>
                    </section>
                  </div>
                </Col>
                <Col lg={5}>
                    <span className="chooseyear">Choose Subject</span>
                </Col>
                <Col lg={7}>
                    <div className="row-select">
                    <section className="select">
                        <Form.Select defaultValue="" className="">
                        <option value="">Subject</option>
                        {/* {sortedYears} */}
                        </Form.Select>
                    </section>
                    </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Row>
            <Col lg={12} md={12} xs={12}>
              <div className="span-add-edit">
                <div className="span-add">
                  <span className="add-title">Add</span>
                </div>
                <div className="span-edit">
                  <span className="edit-title">Edit</span>
                </div>
              </div>
            </Col>
          </Row>
          <div className="table_div">
            <Col lg={12} md={12} xs={12} className="mt-2">
                <Table striped bordered hover variant="white">
                    <thead>
                        <tr>
                            <th>Module</th>
                            <th>Leesion</th>
                            <th>Time</th>
                            <th>Room</th>
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

export default RevisionClasses;