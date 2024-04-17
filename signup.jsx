
import './homepage.css';

import { VscAccount } from "react-icons/vsc";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBus } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { Buses, locations } from './data';
import { useContext, useState } from 'react';
import Buslist from './buslist';
import { useNavigate, Route, Routes, Link } from 'react-router-dom';
import { ImFacebook2 } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { GrYoutube } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import Homepage from './homepage';
import { useDispatch, useSelector } from "react-redux";
import xtype from 'xtypejs'
import { colorProvider } from './App';




const items = [
    {
        label: <Link href="/test">My Profile</Link>,
        key: '0',
    },
    {
        label: <Link href="/signup">Sign Out</Link>,
        key: '1',
    },
    {
        type: 'divider',
    }
];

function Signup() {
const navigate = useNavigate()
    const [name , setName] = useState("");
   
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("")
  
    const Array=useSelector((state) => state.Array)
    const currentuser=useSelector((state) => state.currentuser)

    const dispatchEvent = useDispatch()




    const myStyle = {
        backgroundImage:
            "url('https://static.abhibus.com/web/media/install/download-app.20230824.webp')",

        backgroundSize: "cover",
        width: "100%",
        height: "530px",
        padding: "50px 0 80px"

    };

    

    // const handlesearch = () => {
      

    // };

    function change(){
        dispatchEvent({
          type: "CHANGE_ARRAY",
          data: {
            id: Array.length+1,
            name,
            
            email,
            password
      
          }
         })

         

         navigate("/homepage")
       }

    // function adduser(){
    //     console.log("success")
        
    
    //     if(name !='' && email !='' && password != ""){
    //       let checkmail= user.filter((items) => items.email === email)
    //       if( checkmail.length === 0){
    //         const obj={
    //           id: user.length+1,
    //           name,
            
    //           email,
    //           password
    //         }
    
            
            
    //           user.push(obj)
    //           console.log("obj" , obj)
    //           setCurrentuser(obj)
    //           navigate('/homepage')

    //       }
    
    //       else{
    //         alert("Email already exist")
    //       }
          
            
    //       }
    //       else{
    //         alert("Fill all details")
    //       }
    //     console.log(user)
    //     console.log("current" , currentuser)
    //     }


    return (
        <>



            <Routes>

                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/homepage' element={<Homepage />}></Route>

            </Routes>
            <div className='overall'>
                <div className="container">
                    <header className="App-header">
                        <div className="main">

                            <div className="navbars">
                                <div className="heading">Bus Booking App</div>
                                <div className="content">
                                    <div className="navbarmenu">
                                        <ul className="navbaritem">
                                            <li className="navbaroption" style={{ color: '#f4093c' }}>Home</li>
                                            <li className="navbaroption">Contact Us</li>

                                            <li className="navbaroption">Help</li>
                                            <li className="navbaroption">Follow Us</li>


                                        </ul>
                                    </div>
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <VscAccount style={{ width: "30px", height: "30px", borderRadius: "50%" }} />
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                    <div className="account">

                                    </div>




                                </div>
                            </div>

                        </div>
                    </header>
                </div>
            </div>
            <div className="" style={myStyle}>

                <div className="signup-space">
                    <div className='first-name-space'>
                    <MdOutlineDriveFileRenameOutline className="from-station-icon" />
                        <input className='first-name-input'type='text' placeholder='Enter name'onChange={(event) => setName(event.target.value)}/>



                    </div>
                    <div className='first-name-space'>
                    <MdOutlineMailOutline className="from-station-icon" />                       
                    <input className='first-name-input'type="email" placeholder='Enter email'onChange={(event) => setEmail(event.target.value)}/>



                    </div>
                    
                    <div className='first-name-space'>
                    <IoMdLock className="from-station-icon" />
                        < input className='first-name-input'type='password' placeholder='Enter password'onChange={(event) => setPassword(event.target.value)}/>



                    </div>
                    <div className="signup-search" onClick={() => change()}>
                        Sign Up
                    </div>
                </div>
            </div>





            <div className="footer">
                <div className="footer-content1">
                    <div className="company">
                        <div className="company-title">Bus Booking App</div>

                        <div>Ride a Yolo today for a comfortable, on-time, safe ride and experience the next generation inter-city transportation network and mobility platform in your vicinity!</div>

                    </div>
                    <div className='footer-content2'>
                        <div className="useful-links">
                            <div className="company-title1">Quick Links</div>

                            <ul className="company-list">
                                <li className="company-inner-list">About Us</li>
                                <li className="company-inner-list">Bus Tickets</li>
                                <li className="company-inner-list">careers</li>
                                <li className="company-inner-list">Contact Us</li>
                            </ul>

                        </div>

                        <div className="resourses">
                            <div className="company-title1">Information</div>

                            <ul className="company-list">
                                <li className="company-inner-list">Terms & Conditions</li>
                                <li className="company-inner-list">Privacy Policy</li>


                            </ul>


                        </div>

                        <div className="follow-us">
                            <div className="follow-us-title">Follow Us</div>
                            <div className="follow-social-media">
                                <ImFacebook2 className="social-image" />
                                <IoLogoInstagram className="social-image" />
                                <FaTwitter className="social-image" />

                                <GrYoutube className="social-image" />

                            </div>

                            <div className="download-app-title">Download Mobile App</div>
                            <div className="app-image">
                                <img src="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/app-store.png" alt="" className="app-iamges" />
                                <img src="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/google-play.png" alt="" className="app-iamges" />
                            </div>

                        </div>
                    </div>




                </div>

                <div className="footer-bottom">
                    <div className="bottom-line" style={{ borderBottom: "1px solid #2a2a2a", marginTop: "80px" }}></div>

                    <div className="copyright">© 2024, <strong>Bus Booking App</strong>. All rights reserved. Powered by ABCD</div>
                </div>
            </div>
        </>


    );
}

export default Signup;




