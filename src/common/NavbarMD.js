import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavbarMD.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLogOutOutline } from 'react-icons/io5'
import { PiStudentDuotone } from 'react-icons/pi'
import { LiaChalkboardTeacherSolid } from 'react-icons/lia'
import { BsPeople } from 'react-icons/bs'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { TbDeviceImacSearch } from 'react-icons/tb'
import { menuItemStudents } from "../initialData/dataMenu";

// thu vien thong bao
import Cookies from "js-cookie";
import Swal from "sweetalert2";

function NavbarMD({ show ,menuItems }) {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS with the "once" option set to true
  }, []);

  useEffect(() => {
    if (show !== null) {
      const handleClick = () => {
        setClickHidden(!clickHidden);
      };
      show.current.addEventListener("click", handleClick);

    }
  }, [show]);
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
  const [clickHidden, setClickHidden] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  function handleOnClickHidden() {
    setClickHidden(!clickHidden);
  }
  function handleDropDown() {
    setDropDown(!dropDown);
  }

  // path active
  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);


  return (
    <section className={`row ${clickHidden ? "" : "d-none"}`} >
      <div className=" col-md-4 nav-bar-md d-lg-none " style={{ zIndex: '7' }}>
        <div className="nav-bar-logo">
          <img
            src={require(`../assets/img/logo.png`)}
            alt="logo"
            width={50}
            className="mt-4"
          />
          <div className="text-logo">eStudiez</div>
        </div>
        <ul>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
            >
              <li
                key={index}
                className={` ${activeLink === `${item.link}` ? 'left-bar-active-item' : ''}`}

                
              >
                <div className="left-bar-item">
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
        <div className="left-bar-logout hide-title" onClick={logout} >
          <IoLogOutOutline className="left-bar-icon-logout" /> <span>Logout</span>
        </div>
        <hr />
        <div className="hide-title" >
          <TbDeviceImacSearch className="left-bar-icon-access d-none " style={{ fontSize: '24px', margin: '20px 0 0 20px', cursor: 'pointer' }} />
        </div>

        <div className="left-bar-access">

          <h5 className="left-bar-text-access" >Statistical Access</h5>
          <div className=" left-bar-subtext-access">
            <p><BsPeople /> Accessing  </p><p>15</p>
          </div>
          <div className=" left-bar-subtext-access">
            <p><LiaChalkboardTeacherSolid />Teacher Login </p><p>15</p>
          </div>
          <div className=" left-bar-subtext-access">
            <p><PiStudentDuotone />Student Login </p><p>15</p>
          </div>

        </div>
      </div>
      <div
        className="col-md-8 out-side d-lg-none  "
        style={{ zIndex: '2' }}
        onClick={handleOnClickHidden}
      ></div>
    </section>
  );
}

export default NavbarMD;
