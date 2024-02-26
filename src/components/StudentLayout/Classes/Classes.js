import React from 'react'
import './Classes.scss'
import { Link } from "react-router-dom";
import { BsPeople, BsBookmarkDash } from 'react-icons/bs'
import { classesDatas } from '../../../initialData/student'
import { Col, Table, Card, Pagination } from 'react-bootstrap';
function Classes() {
    return (
        <div className='container classe'>
            <section className='classe-info row'>
                <div className='d-flex gap-1'>
                    <span>Learning page of </span> <b> Long Phi</b>
                </div>
                <p className='mt-3'>Class list:</p>
                <div className='classes-infor-list-form col-lg-4 col-md-6 col-sm-12'>
                    <p>C2208I1</p>
                    <button type="button" className='btn btn-roll-call'><BsPeople /> <span>Roll call</span></button>
                </div>
                <div className='classe-info-choose-sub col-lg-4 col-md-6 col-sm-12'>
                    <span>Choose Subject:</span>
                    <select class="form-select form-select-lg form-select-sub w-50 " >
                        <option selected>Subject</option>
                        <option >Math</option>

                        {/* {classesDatas.map((classeSub,index)=>(
                            <><option value="index">{classeSub.subject}</option></>
                        ))                   
                        } */}
                    </select>
                </div>
            </section>
            <section className='classe-table'>

                <Table striped bordered hover variant="white" className='col-12'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Class /Room</th>
                            <th>Teacher</th>
                            <th>Date Study</th>

                        </tr>
                    </thead>
                    <tbody>
                        {classesDatas.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="content_colmark d-flex gap-2 align-items-center ">
                                        <button type="" className='btn btn-primary btn-sub'>{item.subject}</button>
                                        <span className='sub-title'>{item.title} ,</span>  <span>{item.time}</span>
                                    </div>

                                </td>
                                <td>{item.class}/{item.room}</td>
                                <td>{item.teacher}</td>
                                <td>{item.dateCreated}</td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Pagination >
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
            </section>

        </div>
    )
}

export default Classes
