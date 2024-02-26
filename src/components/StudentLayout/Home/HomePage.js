import React from "react"
import {Row,Col, ProgressBar } from 'react-bootstrap'
import './Home.scss'

import {students, notifications} from '../../../initialData/student'
import {teachers} from '../../../initialData/teacher'

import {PiHandWavingFill} from 'react-icons/pi'
import {RiMedalLine} from 'react-icons/ri'
import {GoDotFill} from 'react-icons/go'
import {MdKeyboardArrowRight} from 'react-icons/md'

import imgstudent from '../../../assets/img/schoolchildren.png'

const HomePage = () => {
    return (
        <div className="homepage_student">
            <div className="homepage_div">
                <div className="container">
                    <Row>
                        <Col lg={8} md={12} sm={12} xs={12} className="col_left">
                            <div className="banner_welcome ">
                                <Col lg={8} md={9} sm={8} xs={8}>
                                    <div className="banner_content">
                                        <span className="content_wel">Welcom student, {students[0].name} <PiHandWavingFill className="icon_hand"/> </span>
                                        <br/>
                                        <div className="content_small">
                                            <span>You're learn <strong>70%</strong> of your goal this week</span>
                                            <br/>
                                            <span>Keep it up and improve your progress</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={3} sm={4} xs={3}>
                                    <div className="img_pos">
                                        <img alt="" src={imgstudent} className="img_children"/>
                                    </div>
                                </Col>
                            </div>
                            <div className="prepare_progress">
                                <Row className="d-flex justify-space-between">
                                    <Col lg={7} md={8} sm={12} xs={12}>
                                        <div className="content_prepare_div">
                                            <div className="label_header">
                                                <label className="label_content">Tasks</label>
                                                <a className="label_view" ><strong>View all</strong></a>
                                            </div>
                                            <div className="content_prepare">
                                                <div className="content_task_div">
                                                    <Row >
                                                        <Col lg={3} md={3} sm={3} xs={3}>
                                                            <img className='avatar_task' src={teachers[0].avatar} alt />

                                                        </Col>
                                                        <Col lg={6} md={6} sm={6} xs={6}>
                                                            <ul className="ul_task">
                                                                <strong className="name_teacher">{teachers[0].name}</strong>
                                                                <li className="task_name">Please download this file to do the  exercise</li>
                                                            </ul>
                                                        </Col>
                                                        <Col lg={3} md={3} sm={3} xs={3}>
                                                            <span className="time-task">9.54 AM</span>
                                                        </Col>
                                                    </Row>
                                                    <Row >
                                                        <Col lg={3} md={3} sm={3} xs={3}>
                                                            <img className='avatar_task' src={teachers[0].avatar} alt />

                                                        </Col>
                                                        <Col lg={6} md={6} sm={6} xs={6}>
                                                            <ul className="ul_task">
                                                                <strong className="name_teacher">{teachers[0].name}</strong>
                                                                <li className="task_name">Please download this file to do the  exercise</li>
                                                            </ul>
                                                        </Col>
                                                        <Col lg={3} md={3} sm={3} xs={3}>
                                                            <span className="time-task">9.54 AM</span>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={1} className="d-lg-block d-none d-md-none"></Col>
                                    <Col lg={4} md={4} sm={12} xs={12}>
                                        <div className="content_progress">
                                            <Row>
                                                <span className="content_label">The learning process</span>
                                            </Row>
                                            <div className="content_progress_div">
                                                <Row>
                                                    <Col lg={7} md={7} sm={7} xs={7} className="title_subject">
                                                        <div className="title_subject_div">
                                                            <label>Mathematics</label><br/>
                                                            <span>Unit 3</span>
                                                        </div>
                                                    </Col>
                                                    <Col lg={5} md={5} sm={5} xs={5} className="progress_subject">
                                                        <div className="circular-progress">
                                                            <ProgressBar className="progress_posi" animated now={78} />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={8} className="d-lg-block d-md-none d-none">
                                        
                                    </Col>
                                    <Col lg={4} md={5} sm={12} xs={12}>
                                        <div className="content_toprank">
                                            <Row>
                                                <span className="toprank_label">Student Ranking Chart</span>
                                            </Row>
                                            <div className="content_toprank_div">
                                                <Row>
                                                    <Col lg={3} md={3} sm={3} xs={3}>
                                                        <img src={students[0].imgstu} className="avatar-stu"/>
                                                    </Col>
                                                    <Col lg={7} md={7} sm={7} xs={7}>
                                                        <div className="content_toprank_posi">
                                                            <span className="name_toprank">{students[0].name}</span><br />
                                                            <span className="point_toprank">Point: 98/100</span>
                                                        </div>
                                                    </Col>
                                                    <Col lg={2} md={2} sm={2} xs={2}>
                                                        <RiMedalLine className="medal_toprank"/>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="content_toprank1_div">
                                                <Row>
                                                    <Col lg={3} md={3} sm={3} xs={3}>
                                                        <img src={students[0].imgstu} className="avatar1-stu"/>
                                                    </Col>
                                                    <Col lg={7} md={7} sm={7} xs={7}>
                                                        <div className="content_toprank1_posi">
                                                            <span className="name_toprank1">{students[0].name}</span><br />
                                                            <span className="point_toprank1">Point: 98/100</span>
                                                        </div>
                                                    </Col>
                                                    <Col lg={2} md={2} sm={2} xs={2}>
                                                        <RiMedalLine className="medal_toprank1"/>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="content_toprank2_div">
                                                <Row>
                                                    <Col lg={3} md={3} sm={3} xs={3}>
                                                        <img src={students[0].imgstu} className="avatar2-stu"/>
                                                    </Col>
                                                    <Col lg={7} md={7} sm={7} xs={7}>
                                                        <div className="content_toprank2_posi">
                                                            <span className="name_toprank2">{students[0].name}</span><br />
                                                            <span className="point_toprank2">Point: 98/100</span>
                                                        </div>
                                                    </Col>
                                                    <Col lg={2} md={2} sm={2} xs={2}>
                                                        <RiMedalLine className="medal_toprank2"/>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={4} className="col_right d-none d-lg-block d-md-none">
                            <div className="noti_event">
                                <div className="label_noti_event">
                                    <span className="label_noti">Information & Events</span>
                                    <a className="label_seeall">See all</a>
                                </div>
                                <div className="noti_posi">
                                    <Row>
                                        <div className="noti_div">
                                            <Col lg={3} md={3}>
                                                <img src={notifications[0].img_noti} className="img_noti"/>
                                            </Col>
                                            <Col lg={8} md={8}>
                                                <ul className="ul_noti">
                                                    <li className="noti_title">{notifications[0].title}</li>
                                                    <li className="noti_datetime">
                                                        <span>{notifications[0].date}</span> &nbsp;&nbsp; <GoDotFill style={{color: '#007bff', fontSize: '11px', marginTop: '-2px'}}/>
                                                        <span>{notifications[0].time}</span>
                                                    </li>
                                                    <li className="noti_mess">{notifications[0].message}</li>
                                                </ul>
                                            </Col>
                                            <Col lg={1} md={1}>
                                                <div className="arrow_show">
                                                    <MdKeyboardArrowRight style={{fontSize: '18px'}}/>
                                                </div>
                                            </Col>
                                        </div>
                                    </Row>
                                </div>
                                
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default HomePage

