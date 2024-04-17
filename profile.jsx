import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import "./profile.css"
import { useSelector } from "react-redux";
import { useNavigate,Routes,Route } from 'react-router-dom';
import Homepage from "./homepage";

function Profile(props) {

  const Array = useSelector((state) => state.Array)
const navigate = useNavigate()

  const [travelbus, setTravelbus] = useState(props.travelbus)
  const [booked, setBooked] = useState(props.booked)




  return (
    <>
    <Routes>
    <Route path='/homepage' element={<Homepage />}></Route>

    </Routes>

      <div className="profile">
        <div className="profile-info" style={{ width: "20%", margin: "0 auto 0 auto" }}>
          <VscAccount style={{ width: "", fontSize: "250px" }} />
          <div style={{ textAlign: "center", fontSize: "55px", fontWeight: "600" }}>{Array[Array.length - 1].name}</div>


        </div>
        {
          travelbus.map((data) => {
            return (
              <>
                <div className='profile-display-layout' style={{width:"100%"}}>
                  <div className="profile-bus-titles">
                    <div>{data.name}</div>
                    <div className='profile-bus-types'>{data.busType}</div>
                  </div>
                  <div className="profile-bus-travel-details">
                    <div className="bus-place">
                      <div>{data.arrivalTime}</div>
                      <div>{data.source}</div>

                    </div>
                    <div className="total-time">{data.duration}</div>

                    <div className="bus-place">
                      <div>{data.departureTime}</div>
                      <div>{data.destination}</div>

                    </div>


                  </div>

                  <div className="seat-list">
                    <button className='seat-button'>Booked Seats</button>
                    {
                      booked.map((data) =>{
                        return(
                          <>
                          <div style={{display:"flex", gap:"10px", flexDirection:"row"}}>{data}  </div>
                          </>
                        )
                      })
                    }
                    
                  </div>

                </div>
              </>
            )
          })
        }
      </div>

    </>
  )
}


export default Profile;