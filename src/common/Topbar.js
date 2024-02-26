import React, { useState, useContext, useEffect, useRef } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { BsBell } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { IoLogOutOutline } from 'react-icons/io5'
import { TbTextDirectionLtr } from "react-icons/tb";
import { LoginContext } from "../components/Authentication/LoginContext";
import { menuItemProfile } from "../initialData/dataMenu";
import { notificationsTopbar } from "../initialData/student";
import './style.scss'
import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";
import NavbarMD from "./NavbarMD";
import AOS from "aos";
import "aos/dist/aos.css";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export const Topbar = ({  menuItems }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    // ham logout
    const logout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                Cookies.remove('isLogin')
                window.location.reload();

            }
        })

    }
    const currentTime = new Date().toLocaleTimeString()
    const currentDate = new Date().toLocaleDateString()
    const { loginValue } = useContext(LoginContext);
    console.log("chekc login from topbar", loginValue);

    const [showInfor, setShowInfor] = useState(false);
    const handleShowInfor = () => {
        setShowInfor(!showInfor)
    }
    const [showNotifi, setShowNotifi] = useState(false);
    const handleShowNotifi = () => {
        setShowNotifi(!showNotifi)
    }
    const TruncatedTitle = ({ content }) => {
        if (content.length > 10) {
            return <span className="info_name">{content.slice(0, 10)}...</span>;
        } else {
            return <span className="info_name">{content}</span>;
        }
    };
    const showMenu = useRef(null);
    return (
        <>
            <div className="top-bar ">
                <NavbarMD show={showMenu} menuItems={menuItems} />
                <div className="d-block d-lg-none top-bar-icon-menu" style={{ zIndex: '6' }} ref={showMenu}>
                    <AiOutlineMenuFold />
                </div>
                <div className="top-bar-item ">

                    <div className="row top-bar-item-child ">

                        <Link to='/' className="top-bar-logo col-lg-2 d-lg-flex d-none " >
                            <img src={logo} alt="" width={50} className="img-logo" />
                            <div className="text-logo"> eStudiez</div>
                        </Link>
                        <div className="top-bar-search col-lg-5 col-md-6 col-sm-6  ">
                            <div className="input-group">
                                <span className="input-group-text input-group-icon-search"><CiSearch className="icon-search" /></span>
                                <input type="text" placeholder="Search Courses, Documents, Activities... " className="form-control top-bar-search-input" />
                            </div>

                        </div>
                        <div className="top-bar-time col-lg-2 d-none d-lg-flex d-md-flex justify-content-center" >
                            {currentTime} <br />
                            {currentDate}
                        </div>

                        <div className="top-bar-icon-notification col-lg-1 col-sm-1 d-flex align-items-center justify-content-end" onClick={handleShowNotifi}>
                            <BsBell />
                            {showNotifi && (
                                <div className="top-bar-show-notifi " data-aos='fade'>
                                    <div className="top-bar-show-notifi-title">
                                        <p>Notifications</p>
                                        <p>...</p>
                                    </div>
                                    {notificationsTopbar.map((item, index) => (
                                        <div key={index} >
                                            {item.status === 'New' && (
                                                /* Hiển thị các thông báo có trạng thái "New" */
                                                <>
                                                    <div className="title-notifi">
                                                        <span>{item.status}</span>
                                                        <Link> See All</Link>
                                                    </div>
                                                    <div >
                                                        {item.notifiItem.map((notification, idx) => (
                                                            <div key={idx} className="top-bar-notifi-item d-flex align-items-center mt-2 ">
                                                                <img src={notification.img_noti} alt="avatar" width={45} height={45} />
                                                                <div className="top-bar-notifi-item-content ">
                                                                    <span style={{ color: 'black' }} className="top-bar-notifi-item-content-name">{notification.name}</span>
                                                                    <span className="top-bar-notifi-item-content-sub">{notification.subContent}</span>
                                                                    <span className="top-bar-notifi-item-content-time">{notification.time}</span>
                                                                </div>

                                                            </div>
                                                        ))}
                                                    </div>

                                                </>
                                            )}

                                            {item.status === 'Older' && (
                                                /* Hiển thị các thông báo có trạng thái "Older" */
                                                <>
                                                    <div className="title-notifi">
                                                        <span>{item.status}</span>
                                                    </div>
                                                    <div >
                                                        {item.notifiItem.map((notification, idx) => (
                                                            <div key={idx} className="top-bar-notifi-item d-flex">
                                                                <img src={notification.img_noti} alt="avatar" width={45} height={45} />
                                                                <div className="top-bar-notifi-item-content ">
                                                                    <span style={{ color: 'black' }} className="top-bar-notifi-item-content-name">{notification.name}</span>
                                                                    <span className="top-bar-notifi-item-content-sub">{notification.subContent}</span>
                                                                    <span className="top-bar-notifi-item-content-time">{notification.time}</span>
                                                                </div>

                                                            </div>
                                                        ))}
                                                    </div>

                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="top-bar-info col-lg-2 col-sm-2 " onClick={handleShowInfor}>
                            <div>
                                <img src={require(`../assets/img/img-todolist.jpg`)} alt="avatar" className="avatar" width={40} />
                                <TruncatedTitle content={loginValue.email} />
                            </div>
                            <span className="icon-dropdown"><IoIosArrowDown /></span>
                            {showInfor && (
                                <div className="top-bar-show-info">
                                    <div className="d-flex justify-content-start gap-2 ">
                                        <img src={require(`../assets/img/img-todolist.jpg`)} alt="avatar" className="avatar-show" width={40} />

                                        <span className="info_name_show">
                                            Long Phi
                                            <br />
                                            <span className="top-bar-show-sub-email">{loginValue.email}</span>
                                        </span>
                                    </div>
                                    <ul >
                                        {menuItemProfile.map((item, index) => (
                                            <Link
                                                key={index}
                                                to={item.link}
                                            >
                                                <li
                                                    key={index}
                                                    className={``}
                                                >
                                                    <div className="top-bar-item-content">
                                                        <span
                                                            className="item_icon_sidebar"
                                                        >
                                                            {item.icon}
                                                        </span> &nbsp;
                                                        <span className="item_content_sidebar">{item.content}</span>
                                                    </div>
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                    <hr />
                                    <div className="left-bar-logout hide-title" onClick={logout} >
                                        <IoLogOutOutline className="left-bar-icon-logout" /> <span>Logout</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}