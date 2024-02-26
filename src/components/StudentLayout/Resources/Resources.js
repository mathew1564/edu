import React, { useState ,useEffect } from 'react'
import { resourceDatas } from '../../../initialData/student'
import './Resources.scss'
import { Link } from 'react-router-dom'
import { menuItemSub } from '../../../initialData/dataMenu'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { LuClipboardList } from 'react-icons/lu'
import AOS from "aos";
import "aos/dist/aos.css";
function Resources() {
  const iconColors = ['#0077FF', '#FF1D86', '#008B1F', '#8A8A8A', '#FD7D45'];
  const bgColors = ['#F0F7FF', '#FFF0F7', '#F0FFF3', '#ECECEC', '#FFF5F0'];
  const [show, setShow] = useState(false);
  const handleShowMenu = () => {
    setShow(!show);
  }
  useEffect(() => {
    AOS.init();
}, []);

  return (
    <div className='container-fluid resource-main'>
      <div className='d-flex gap-1'>
        <span>Learning page of </span> <b> Long Phi</b>
      </div>
      <div className='row mt-4 resource-item '>

        <section className='view-document col-lg-8 col-md-7 col-sm-7 '>
          <div className='row'>
            {
              resourceDatas.map((item, idx) => (
                <a href="" target='/documnet' className=' d-block col-lg-3 col-md-4 col-sm-12 mb-2'>
                  <div className="card " style={{ padding: '0', backgroundColor: 'transparent', border: 'none' }} >
                    <img src={require(`../../../assets/img/${item.img_doc}`)} className="card-img-top" alt="img" style={{ borderRadius: '10px' }} />
                    <div className="card-body card-body-title " style={{ padding: '5px 0 5px 0', }} title={item.title}>
                      <h5 className="card-title" >{item.title}</h5>
                      <button type='button' className="btn " style={{ padding: '0px', backgroundColor: '#1579FC', color: '#fff' }}>Math</button>
                    </div>
                  </div>
                </a>
              ))
            }
          </div>
        </section>

        <article className='menu-document col-lg-3 col-md-4'>
          <h5 className='mb-4'>Subject</h5>
          {menuItemSub.map((item, idx) => (
            <Link to='/' className='div-menu-item-sub  d-block' key={idx}>
              <div className='icon-menu-sub d-flex mb-4' style={{ backgroundColor: bgColors[idx % iconColors.length] }}>
                <div className='child-sub d-flex  gap-2 align-items-center'  >
                  <span className='icon-sub' style={{ backgroundColor: iconColors[idx % iconColors.length] }}>{item.icon}</span>
                  <div>
                    <span className='content'>{item.content}</span>
                    <p className='sub-content-menu'>Document</p>
                  </div>
                </div>
                <div>
                  <MdKeyboardArrowRight />
                </div>

              </div>
            </Link>
          ))}
        </article>
      </div>
      <div>
        <p className=' list-sub-icon d-lg-none' onClick={handleShowMenu} ><LuClipboardList /></p>
        {show && (
          <article className='menu-mobile ' data-aos='fade-left'>
            <h5 className='mb-4' style={{fontSize:'14px'}}>Subject</h5>
            {menuItemSub.map((item, idx) => (
              <Link to='/' className='div-menu-item-sub  d-block' key={idx}>
                <div className='icon-menu-sub d-flex mb-4' style={{ backgroundColor: bgColors[idx % iconColors.length] }}>
                  <div className='child-sub d-flex  gap-2 align-items-center'  >
                    <span className='icon-sub' style={{ backgroundColor: iconColors[idx % iconColors.length] }}>{item.icon}</span>
                    <div>
                      <span className='content' style={{fontSize:'13px'}}>{item.content}</span>
                      <p className='sub-content-menu'>Document</p>
                    </div>
                  </div>
                  <div>
                    <MdKeyboardArrowRight />
                  </div>

                </div>
              </Link>
            ))}
          </article>
        )}
      </div>

    </div>
  )
}

export default Resources
