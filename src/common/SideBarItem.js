import React, { useState, useEffect } from "react";
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { IoLogOutOutline } from 'react-icons/io5'
import { PiStudentDuotone } from 'react-icons/pi'
import { LiaChalkboardTeacherSolid } from 'react-icons/lia'
import { BsPeople } from 'react-icons/bs'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { TbDeviceImacSearch } from 'react-icons/tb'
import './style.scss'
import AOS from "aos";
import "aos/dist/aos.css";

import Cookies from "js-cookie";
import Swal from "sweetalert2";
export const SideBarItem = ({ menuItems }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [activeItem, setActiveItem] = useState(null);
  console.log('check menu items from side', menuItems);
  // const handleClickActive = (itemId) => {
  //   setActiveItem(itemId);
  // };

  // path active
  const [activeLink, setActiveLink] = useState('');
  const navigate=useNavigate()
  const location = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  // ham logout
  const logout=()=>  {
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
  return (
    <aside className={`left-bar-main ${collapsed ? "collapsed" : ""} d-none d-lg-block d-sm-none d-md-none`} >
      <div className="left-bar-list-menu" >
        <label onClick={toggleCollapse} ><AiOutlineMenuFold className="left-bar-icon-list"></AiOutlineMenuFold></label>
        <ul>
          {menuItems.map((item, index) => (

              <Link
              key={index}
              to={item.link}
            >
              <li
                key={index}
                className={` ${activeLink === `${item.link}` ? 'left-bar-active-item' : ''}`}

                {...(collapsed ? { title: item.content } : {})}
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
          )
          
            
           
          )}
        </ul>
        <div className="left-bar-logout hide-title"  {...(collapsed ? { title: 'Logout' } : {})} onClick={()=>logout()} >
          <IoLogOutOutline className="left-bar-icon-logout"  /> <span>Logout</span>
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
    </aside>
  );
};
