import { AiFillHome, AiOutlineRead } from 'react-icons/ai'
import { BsPeople, BsBookmarkDash } from 'react-icons/bs'
import { GrInProgress } from 'react-icons/gr'
import { GiEmptyHourglass } from 'react-icons/gi'
import { VscFeedback } from 'react-icons/vsc'
import { FiPhoneCall } from 'react-icons/fi'
import { IoSettingsOutline } from 'react-icons/io5'
import { FaRegUser} from 'react-icons/fa'
// icon menu
import {GiBiohazard} from 'react-icons/gi'
import {FcBiotech} from 'react-icons/fc'
import {SlGlobeAlt} from 'react-icons/sl'
import {BiMath} from 'react-icons/bi'
import{HiLanguage} from 'react-icons/hi'
import {SlChemistry} from 'react-icons/sl'
import HomePage from '../components/StudentLayout/Home/HomePage'
import FeedBack from '../common/FeedBack/FeedBack';
import ContactUs from '../common/ContactUs/ContactUs';
import Setting from '../common/Setting/Setting';
import Profile from '../common/Profile/Profile'
import ViewMarks from '../components/ParentLayout/ViewMarks/ViewMarks'
import ProgressParent from '../components/ParentLayout/ProgressParent/ProgressParent'
import HomePageParent from '../components/ParentLayout/ParentHome/HomePageParent'

import { Route } from 'react-router-dom'
import Mark from '../components/StudentLayout/Mark/Mark'
import Progress from '../components/StudentLayout/Progress/Progress'
import Resources from '../components/StudentLayout/Resources/Resources'
import Classes from '../components/StudentLayout/Classes/Classes'
// ========================================Teacher===========================================//
import HomePageTeacher from '../components/TeacherLayout/HomeTeacher/HomePageTeacher'
import AddStudyRes from '../components/TeacherLayout/AddStudy/AddStudyRes'
import RevisionClasses from '../components/TeacherLayout/RevisionClasses/RevisionClasses'

export const menuItemProfile = [
    {content: 'Profile', icon: <FaRegUser />, link: '/profile', component: <Profile/>},
    {content: 'Setting', icon: <IoSettingsOutline />, link: '/setting',component: <Setting />}
];
export const menuItemStudents = [
    { content: 'Home', icon: <AiFillHome />, link: '/', component: <HomePage /> },
    { content: 'Revision Classes', icon: <BsPeople />, link: '/revision', component: <Classes/> },
    { content: 'Study Resources', icon: <AiOutlineRead />, link: '/resources', component: <Resources/>},
    { content: 'Your Marks', icon: <BsBookmarkDash />, link: '/your_mark', component: <Mark /> },
    { content: 'Academic Progress', icon: <GiEmptyHourglass />, link: '/progress', component: <Progress /> },
    { content: 'Feedback', icon: <VscFeedback />, link: '/feedback', component: <FeedBack /> },
    { content: 'Contact Us', icon: <FiPhoneCall />, link: '/contact_us', component: <ContactUs /> },
    { content: 'Setting', icon: <IoSettingsOutline />, link: '/setting', component: <Setting /> },

];
export const menuItemSub = [
    { content: 'Math', icon: <BiMath />, link: '/math', component: <HomePage /> },
    { content: 'Chemistry', icon: <SlChemistry />, link: '/', component: <Classes/> },
    { content: 'English', icon:<SlChemistry />, link: '/resources', component: <Resources/>},
    { content: 'Physical', icon: <FcBiotech/>, link: '/your_mark', component: <Mark /> },
    { content: 'Biology', icon:  <FcBiotech/>, link: '/progress', component: <Progress />},
    { content: 'Geopraphy', icon: <SlGlobeAlt />, link: '/feedback', component: <FeedBack /> },
  
];

export const AllRoutesStudent = [
    { content: 'Revision Classes', icon: <BsPeople />, link: '/revision', component: <Classes/> },
    { content: 'Study Resources', icon: <AiOutlineRead />, link: '/resources', component: <Resources/>},
    { content: 'Home', icon: <AiFillHome />, link: '/', component: <HomePage /> },
    { content: 'Revision Classes', icon: <BsPeople />, link: '/revision',component:'' },
    { content: 'Study Resources', icon: <AiOutlineRead />, link: '/resources' },
    { content: 'Your Marks', icon: <BsBookmarkDash />, link: '/your_mark', component: <Mark /> },
    { content: 'Academic Progress', icon: <GiEmptyHourglass />, link: '/progress', component: <Progress /> },
    { content: 'Feedback', icon: <VscFeedback />, link: '/feedback', component: <FeedBack /> },
    { content: 'Contact Us', icon: <FiPhoneCall />, link: '/contact_us', component: <ContactUs /> },
    { content: 'Setting', icon: <IoSettingsOutline />, link: '/setting', component: <Setting /> },
    { content: 'Profile', icon: <IoSettingsOutline />, link: '/profile', component: <Profile /> },
];

export const menuItemsParent = [
    { content: 'Home ', icon: <AiFillHome />, link: '/', component: <HomePageParent /> },
    { content: 'View marks', icon: <BsBookmarkDash />, link: '/viewmark', component: <ViewMarks /> },
    { content: 'Academic Progress', icon: <GiEmptyHourglass />, link: '/studentprogress', component: < ProgressParent /> },
    { content: 'Contact Us', icon: <FiPhoneCall />, link: '/contact_us', component: <ContactUs /> },
    { content: 'Feedback', icon: <VscFeedback />, link: '/feedback', component: <FeedBack /> },
    { content: 'Setting', icon: <IoSettingsOutline />, link: '/setting', component: <Setting /> },

]



export const AllRoutesParent = [
    { content: 'Home ', icon: <AiFillHome />, link: '/', component: <HomePageParent /> },
    { content: 'View marks', icon: <BsBookmarkDash />, link: '/viewmark', component: <ViewMarks /> },
    { content: 'Academic Progress', icon: <GiEmptyHourglass />, link: '/studentprogress', component: < ProgressParent /> },
    { content: 'Feedback', icon: <VscFeedback />, link: '/feedback', component: <FeedBack /> },
    { content: 'Contact Us', icon: <FiPhoneCall />, link: '/contact_us', component: <ContactUs /> },
    { content: 'Setting', icon: <IoSettingsOutline />, link: '/setting', component: <Setting /> },
    { content: 'Profile', icon: <IoSettingsOutline />, link: '/profile', component: <Profile /> },
];
export const AllRoutesTeachers = [
    { content: 'Home', icon: <AiFillHome />, link: '/', component: <HomePageTeacher /> },
    { content: 'Revision Classes Updations', icon: <BsPeople />, link: '/revision', component: <RevisionClasses /> },
    { content: 'Add Study Resources', icon: <AiOutlineRead />, link: '/resources', component: <AddStudyRes /> },
    { content: 'Feedback', icon: <VscFeedback />, link: '/feedback', component: <FeedBack /> },
    { content: 'Contact Us', icon: <FiPhoneCall />, link: '/contact_us', component: <ContactUs /> },
    { content: 'Setting', icon: <IoSettingsOutline />, link: '/setting', component: <Setting /> },
    { content: 'Profile', icon: <IoSettingsOutline />, link: '/profile', component: <Profile /> },

];
export const menuItemTeachers = [
    { content: 'Home', icon: <AiFillHome />, link: '/', component: <HomePageTeacher /> },
    { content: 'Revision Classes Updations', icon: <BsPeople />, link: '/revision', component: <RevisionClasses /> },
    { content: 'Add Study Resources', icon: <AiOutlineRead />, link: '/resources', component: <AddStudyRes /> },
    { content: 'Feedback', icon: <VscFeedback />, link: '/feedback', component: <FeedBack /> },
    { content: 'Contact Us', icon: <FiPhoneCall />, link: '/contact_us', component: <ContactUs /> },
    { content: 'Setting', icon: <IoSettingsOutline />, link: '/setting', component: <Setting /> },
    

];




export const markStudent = [
    { name: 'Html,css,js', mark: 15, maxMark: 20, time: '15/06/2004', status: 'pass' },
    { name: 'python', mark: 50, maxMark: 100, time: '16/06/2004', status: 'pass' },
    { name: 'java', mark: 17, maxMark: 20, time: '17/06/2004', status: 'fail' },
    { name: 'ruby', mark: 14, maxMark: 20, time: '18/06/2004', status: 'fail' },
    { name: 'Sass', mark: 12, maxMark: 20, time: '19/06/2004', status: 'pass' },
    { name: 'C#', mark: 11, maxMark: 20, time: '12/06/2004', status: 'pass' },

]

export const ProgressSubject = [
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 100, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Completed' },
    { module: 'Html,css', subject: 'Exam', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Exam', lesson: '10', file: 'how to code ', progress: 100, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Completed' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 100, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Completed' },
    { module: 'Html,css', subject: 'Exam', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Exam', lesson: '10', file: 'how to code ', progress: 100, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Completed' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 100, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Completed' },
    { module: 'Html,css', subject: 'Exam', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Exam', lesson: '10', file: 'how to code ', progress: 100, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Completed' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 100, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Completed' },
    { module: 'Html,css', subject: 'Exam', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },
    { module: 'Html,css', subject: 'Exam', lesson: '10', file: 'how to code ', progress: 100, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Completed' },
    { module: 'Html,css', subject: 'Math', lesson: '10', file: 'how to code ', progress: 50, dateStart: '08/01/2023', classStart: '7 AM', dateEnd: '20/02/2023', classEnd: '8 AM', status: 'Schedule' },

]






