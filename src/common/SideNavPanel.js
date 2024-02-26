import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/StudentLayout/Home/HomePage'
import { SideBarItem } from './SideBarItem'
import { Topbar } from './Topbar';
import { Navigation } from './Topbar';
import NotFound from '../components/NotFound';
import { students, notifications } from '../initialData/student';
import './style.scss'
  ;
export const SideNavPanel = ({ menuItems, allRoutes, menuItemsTeachers }) => {



  return (
    <Container fluid >
      <div className="edu-master " >
        <Topbar menuItems={menuItems}/>
        <Row>
          <Col md={2}>
            <SideBarItem menuItems={menuItems} />
          </Col>
          <Col md={10} className='body'>
            <Routes>
              
              {/* {allRoutes.map((menuItem, index) =>  
          
          
            ( <Route key={index} path={menuItem.link} element={menuItem.component} />)
          
            
            )} */}

            {allRoutes.map((menuItem, index)=>(
              <Route key={index} path={menuItem.link} element={menuItem.component} />
            ))}

            <Route path="*" element={<NotFound />} />

            </Routes>
          </Col>
        </Row>
      </div>
    </Container>

  );
};