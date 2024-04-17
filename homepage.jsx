
import './signup.css';

import { VscAccount } from "react-icons/vsc";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBus } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { Buses, locations } from './data';
import { useState } from 'react';
import Buslist from './buslist';
import { useNavigate, Route, Routes, Navigate, Link } from 'react-router-dom';
import { ImFacebook2 } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { GrYoutube } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import Signup from './signup';
import { user } from './App';
import { useDispatch, useSelector } from "react-redux";



const items = [
  {
    label: <Link to="/test" >My Profile</Link>,
    key: '0',
  },
  {
    label: <Link to="/signup">Sign Out</Link>,
    key: '1',
  },
  {
    type: 'divider',
  }
];

function Homepage() {
  const navigate = useNavigate()
  const [searchState, setSearchState] = useState({
    from: locations[0],
    to: locations[5],

    date: ""

  })




  const myStyle = {
    backgroundImage:
      "url('https://static.abhibus.com/web/media/install/download-app.20230824.webp')",

    backgroundSize: "cover",
    width: "100%",
    height: "530px",
    padding: "50px 0 80px"

  };

  const [info, setInfo] = useState("");
  const Array = useSelector((state) => state.Array)

  console.log("data", Array)

  const [filteredbus, setFilteredbus] = useState([])

 
 
 
 const [switchComponents , setSwitchComponents] = useState(false)
 
 
  function handlesearch() {
    setFilteredbus(Buses.filter((data) =>
      data.source === searchState.from && data.destination === searchState.to && data.availableDates.includes(searchState.date)

    ));
    console.log("fil", filteredbus)
    if (filteredbus.length == 0) {
      setInfo("No Buses Available")

    }

   


  };





  return (
    <>



      <Routes>
        <Route path='/homepage/*' element={<Homepage />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/buslist' element={<Buslist />}></Route>

      </Routes>
      {
        switchComponents == false &&

        <div>
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

            <div className="booking-space">
              <div className='from-station'>
                <FaBus className="from-station-icon" />
                <select className='from-station-input'
                  value={searchState.from}

                  onChange={(e) => setSearchState((prevState) => ({

                    ...prevState,

                    from: e.target.value

                  }))}>

                  {
                    locations.map((data) => (

                      <option key={`${data} - source`} value={data}>

                        {data}

                      </option>

                    ))}
                </select>



              </div>
              <div className='to-station'>
                <FaLocationDot className="from-station-icon" />
                <select className='from-station-input'
                  value={searchState.to}

                  onChange={(e) => setSearchState((prevState) => ({

                    ...prevState,

                    to: e.target.value

                  }))}>

                  {
                    locations.map((data) => (

                      <option key={`${data} - desnination`} value={data}>

                        {data}

                      </option>

                    ))}
                </select>
              </div>
              <div className='date-station'>
                <FaCalendarAlt className="from-station-icon" />
                <input type="date" value={searchState.date} className='from-station-input' placeholder='date' onChange={(e) => setSearchState((prevState) => ({
                  ...prevState, date: e.target.value
                }))
                }
                />
              </div>

              <div className="search" onClick={handlesearch}>
                Search
              </div>
            </div>
          </div>

          {
            filteredbus.length > 0 ? <Buslist filteredbus={filteredbus} switchComponents = {switchComponents} /> : <h1 className='main-title'>{info}</h1>

          }


          <div className="subcontent">
            <div className="subcontent-title">Popular Routes</div>
            <div className="sub-route">
              <div className='sub-place'>Bengalore <FaArrowRightLong /> Chennai</div>
              <div className='sub-place'>Chennai <FaArrowRightLong /> Bengalore</div>
              <div className='sub-place'>Hyderabad <FaArrowRightLong /> Chennai</div>
              <div className='sub-place'>Bengalore <FaArrowRightLong /> Hyderabad</div>
              <div className='sub-place'>chennai <FaArrowRightLong /> Coimbatore</div>
            </div>


          </div>

          <div className="sub-route1">
            <div className='sub-place'>Bengalore <FaArrowRightLong /> Goa</div>
            <div className='sub-place'>Chennai <FaArrowRightLong /> Hyderabad</div>
            <div className='sub-place'>Hyderabad <FaArrowRightLong /> Goa</div>
            <div className='sub-place'>Bengalore <FaArrowRightLong /> Pune</div>
            <div className='sub-place'>Pune <FaArrowRightLong /> Goa</div>
            <div className='sub-place'>Mysore <FaArrowRightLong /> Goa</div>
          </div>

          <div className="explore-des">View All Destinations</div>

        </div>
      }






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

export default Homepage;
