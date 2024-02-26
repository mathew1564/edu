import React, { useState } from "react";
import { Row, Col, Form, Table, Card, Pagination } from 'react-bootstrap';
import { students } from "../../../initialData/student";
import './Mark.scss';
import { progressdatas, markdatas } from "../../../initialData/student";
import { FiFilter } from 'react-icons/fi'

const Mark = () => {
  const [showFilter, setShowFilter] = useState(null)

  const handleSelectedStatus = () => {
    setShowFilter(!showFilter)
  }

  return (
    <div className="progress_master">
      <div className="container">
        <Row>
          <Col lg={5} md={5} >
            <strong>{students[0].name}</strong>'s learning process.
            <br />
            <div className="row_div">
              <Row>
                <Col lg={5} className="mt-1">
                  <span className="chooseyear">Choose year</span>
                </Col>
                <Col lg={7} className="mt-1">
                  <div className="row-select">
                    <section className="select">
                      <Form.Select className="select-form">
                        <option value="">All Years</option>
                        {/* {sortedYears} */}
                      </Form.Select>
                    </section>
                  </div>
                </Col>

                <Col lg={5} className="mt-1">
                  <span className="chooseyear">Choose semester</span>
                </Col>
                <Col lg={7} className="mt-1">
                  <div className="row-select">
                    <section className="select">
                      <Form.Select className="select-form">
                        <option value="">Semester 1</option>
                        {/* {sortedYears} */}
                      </Form.Select>
                    </section>
                  </div>
                </Col>
                <Col lg={5} className="mt-1">
                  <span className="chooseyear">Choose Subject</span>
                </Col>
                <Col lg={7} className="mt-1">
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
          <Col lg={6} md={6}>
            <div className="avarage-score">
              <div className="title_avarage">
                <span>Avarage Score</span>
              </div>
              <div className="circle_score">
                80
              </div>
            </div>
          </Col>
          <div className="table_div">
            <Col lg={12} md={12} sm={12} xs={12}>
              <Table striped bordered hover variant="white">
                <thead>
                  <tr>
                    <th>Module</th>
                    <th>Mark</th>
                    <th>Rate</th>
                    <th>
                      <div className="d-flex justify-content-between ">
                        Status
                        <div className="filter-icon" onClick={handleSelectedStatus}>
                          <FiFilter />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {markdatas.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="content_colmark">
                          <Card border="success" className="cardmark">
                            <Card.Title className="marksubject">
                              {item.subject}
                            </Card.Title>
                          </Card>
                        </div>
                      </td>
                      <td>{item.mark}/{item.maxmark}</td>
                      <td>{item.rate}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </div>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
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
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default Mark;