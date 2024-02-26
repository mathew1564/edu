import './App.scss';
import { menuItemStudents,  AllRoutesStudent,AllRoutesParent,menuItemsParent,menuItemTeachers ,AllRoutesTeachers} from './initialData/dataMenu';

import { useEffect, useState } from 'react';

import { LoginContext } from './components/Authentication/LoginContext';
import { useNavigate } from 'react-router-dom';
import Login from './components/Authentication/login';
import Cookies from 'js-cookie';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import { SideNavPanel } from './common/SideNavPanel';
import Profile from './common/Profile/Profile';


function App() {
    const navigate = useNavigate();
    
    const [menuItems,setMenuItems] = useState();
    const [allRoutes,setAllRoutes]= useState();

   
    const menuItemsTeachers = menuItemTeachers
    const [isLogin, setIslogin] = useState(false);
    const [loginValue, setLoginValue] = useState()
    const pathname = window.location.pathname;
    const filename = pathname.substring(pathname.lastIndexOf('/') + 1);
    useEffect(() => {
        if (Cookies.get('isLogin')) {
            setIslogin(true)
            setLoginValue(JSON.parse(Cookies.get('isLogin')))

            let value=JSON.parse(Cookies.get('isLogin'));
            if(value&&value.position==='1') {
                setAllRoutes(AllRoutesStudent);
                setMenuItems(menuItemStudents)
            }
            else if(value&&value.position==='2') {
                setAllRoutes(AllRoutesTeachers);
                setMenuItems(menuItemTeachers)
            }
            else if(value&&value.position==='3') {
                setAllRoutes(AllRoutesParent);
                setMenuItems(menuItemsParent)
            }
        }

    }, [])
    
    return (
        <>
            <Routes>
                {!isLogin?<Route path='/login' element={<Login />} /> :''}
              
            </Routes>

            <LoginContext.Provider value={{ isLogin, loginValue }}>

                {/* {isLogin ? <SideNavPanel menuItems={menuItems} allRoutes={allRoutes}/> : filename !== 'login' ? <Login /> : ''} */}
                
                {isLogin ? <SideNavPanel menuItems={menuItems} allRoutes={allRoutes} /> : filename !== 'login' ? <Login /> : ''}

            </LoginContext.Provider>




        </>
    );
}

export default App;
