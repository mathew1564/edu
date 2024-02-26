import React, { useState } from "react";
import { Row, Col, Form, Table, Card, Pagination, Dropdown } from 'react-bootstrap';
import { students } from "../../../initialData/student";
import { progressdatas } from "../../../initialData/student";
import {FiFilter} from 'react-icons/fi' 

import './AddStudyRes.scss'
const AddStudyRes = () => {
    const [showFilter, setShowFilter] = useState(null)

    const handleSelectedStatus = () => {
        setShowFilter(!showFilter)
    }
  return (
    <div className="addresources_master">
      <div className="container">
        <Row className="mt-3 ">
          <Col lg={12}>
              <Row>
                <div className="document-title">Document Form</div>
              </Row>
          </Col>
          <div className="mt-4">
            <Row>
              <Col lg={12} md={12} xs={12} className="mt-1">
                Name Document &nbsp;
                <input type="text" />
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12} className="mt-1">
                Link Document &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col lg={1} md={2} xs={3} className="sub-div">
                <Dropdown >
                  <Dropdown.Toggle className="subject-drop">
                    Subject
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col lg={2} md={3} xs={5}>
                <div className="d-flex justify-content-center">
                  <div className="upload-span"> 
                    <span className="upload-title">Upload Image</span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={1} md={12} className="mt-2">
                <div className="span-add">
                  <span className="add-title">Add</span>
                </div>
              </Col>
            </Row>
          </div>
          <div className="table_div">
            <Col lg={12} md={12} xs={12}>
              <div className="span-add-edit">
                <div className="span-edit">
                  <span className="edit-title">Edit</span>
                </div>
              </div>
            </Col>
            <Col lg={12} md={12} xs={12} className="mt-2">
                <Table striped bordered hover variant="white">
                    <thead>
                        <tr>
                            <th>Name Document</th>
                            <th>Link</th>
                            <th>Subject</th>
                            <th>Img</th>
                        </tr>
                    </thead>
                    <tbody>
                        {progressdatas.map((item,index)=>(
                            <tr key={index}>
                                <td>
                                  {item.detail}
                                </td>
                                <td>{item.seesion}</td>
                                <td>{item.lesson}</td>
                                <td>{item.teacher}</td>
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

export default AddStudyRes;