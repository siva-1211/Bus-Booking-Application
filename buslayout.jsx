import { React, useState } from "react";
import './buslayout.css';
import { FaArrowsAltH } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import Profile from "./profile";
import { useDispatch, useSelector } from "react-redux";


function Buslayout(props) {

    const [switchComponents, setSwitchComponents] = useState(props.switchComponents)
    const [id, setId] = useState(props.id)

    const [booked, setBooked] = useState([])


    const [travelbus, setTravelbus] = useState(props.travelbus)
    console.log("type", travelbus)

    console.log("CD", switchComponents)

    const issleeper = (travelbus[0].busType === "Sleeper")

    const seatwidth = issleeper ? "125px" : "65px";


    console.log("sleep", issleeper)




    const [price, setPrice] = useState()

    function notifi() {
        alert("Ticket Booked")
        setSwitchComponents(true)
        setId(-1)
    }

    return (

        <>
            {

                id !== -1 &&

                <div>

                    {
                        issleeper ? <div>

                            {
                                travelbus && travelbus.map((data) => {

                                    return (
                                        <>
                                            <div className="buslayout">
                                                <div className="bus-title">{data.name}</div>
                                                <div className="bus-type">{data.busType}</div>
                                                <div className="bus-details">
                                                    <div className="bus-starting-time">
                                                        <div className="bus-place">{data.source}</div>
                                                        <div className="bus-time">{data.departureTime}</div>
                                                    </div>
                                                    <div className="center-data">
                                                        <div className="bus-duration">{data.duration}</div>
                                                        <FaArrowsAltH className="bus-arrow" />

                                                    </div>
                                                    <div className="bus-starting-time">
                                                        <div className="bus-place">{data.destination}</div>
                                                        <div className="bus-time">{data.arrivalTime}</div>
                                                    </div>
                                                </div>


                                                <div className="bus-seat-view">
                                                    <div className="bus-lower">
                                                        <div className="bus-upper-title">LOWER</div>
                                                        <div className="seat-arrange1">
                                                            <GiSteeringWheel style={{ color: "white", fontSize: "60px" }} />
                                                            {
                                                                data.seatLayout.lower.first[0].map((seats, index) => {
                                                                    return (
                                                                        <>
                                                                            <div style={{ width: seatwidth }} className={booked.includes(seats) ? "seater-selected" : data.availableSeats.includes(seats) ? "seater" : "seater-booked"} onClick={() => data.availableSeats.includes(seats) && booked.indexOf(seats) == -1 && setBooked([...booked, seats])} >{seats}</div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                        <div className="seat-arrange2">
                                                            {
                                                                data.seatLayout.lower.first[1].map((seats, index) => {
                                                                    return (
                                                                        <>
                                                                            <div style={{ width: seatwidth }} className={booked.includes(seats) ? "seater-selected" : data.availableSeats.includes(seats) ? "seater" : "seater-booked"} onClick={() => data.availableSeats.includes(seats) && booked.indexOf(seats) == -1 && setBooked([...booked, seats])} >{seats}</div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                        <div className="seat-arrange3">
                                                            {
                                                                data.seatLayout.lower.second.map((seats, index) => {
                                                                    return (
                                                                        <>
                                                                            <div style={{ width: seatwidth }} className={booked.includes(seats) ? "seater-selected" : data.availableSeats.includes(seats) ? "seater" : "seater-booked"} onClick={() => data.availableSeats.includes(seats) && booked.indexOf(seats) == -1 && setBooked([...booked, seats])}>{seats}</div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>

                                                    <div className="bus-upper">
                                                        <div className="bus-upper-title">UPPER</div>
                                                        <div className="seat-arrange4">
                                                            {
                                                                data.seatLayout.upper.first[0].map((seats, index) => {
                                                                    return (
                                                                        <>
                                                                            <div style={{ width: seatwidth }} className={booked.includes(seats) ? "seater-selected" : data.availableSeats.includes(seats) ? "seater" : "seater-booked"} onClick={() => data.availableSeats.includes(seats) && booked.indexOf(seats) == -1 && setBooked([...booked, seats])}>{seats}</div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                        <div className="seat-arrange5">
                                                            {
                                                                data.seatLayout.upper.first[1].map((seats, index) => {
                                                                    return (
                                                                        <>
                                                                            <div style={{ width: seatwidth }} className={booked.includes(seats) ? "seater-selected" : data.availableSeats.includes(seats) ? "seater" : "seater-booked"} onClick={() => data.availableSeats.includes(seats) && booked.indexOf(seats) == -1 && setBooked([...booked, seats])}>{seats}</div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                        <div className="seat-arrange6">
                                                            {
                                                                data.seatLayout.upper.second.map((seats, index) => {
                                                                    return (
                                                                        <>
                                                                            <div style={{ width: seatwidth }} className={booked.includes(seats) ? "seater-selected" : data.availableSeats.includes(seats) ? "seater" : "seater-booked"} onClick={() => data.availableSeats.includes(seats) && booked.indexOf(seats) == -1 && setBooked([...booked, seats])}>{seats}</div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>

                                                    <div className="seats-info">
                                                        <div className="booked-seats-info">
                                                            <div className="booked-seats"></div>
                                                            <div className="booked-seats-data">Booked Seats</div>
                                                        </div>
                                                        <div className="available-seats-info">
                                                            <div className="available-seats"></div>
                                                            <div className="available-seats-data">Available Seats</div>
                                                        </div>
                                                        <div className="selected-seats-info">
                                                            <div className="selected-seats"></div>
                                                            <div className="selected-seats-data">Selected Seats</div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="selected-seats-view">
                                                    {
                                                        booked &&
                                                        <div className="selected-seats-title">Selected Seats -

                                                            {

                                                                booked.map((seats) => {
                                                                    return (
                                                                        <>

                                                                            <div className="selected-final">{seats}</div>
                                                                        </>
                                                                    )
                                                                })
                                                            }

                                                        </div>

                                                    }
                                                </div>


                                                <div className="selected-seats-price" >Price - ₹{booked.length * data.price}/-</div>

                                                <div className="pay-now" onClick={() => notifi()}>Pay Now</div>

                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>

                            :
                            <div>

                                {
                                    travelbus && travelbus.map((data) => {

                                        return (
                                            <>
                                                <div className="buslayout">
                                                    <div className="bus-title">{data.name}</div>
                                                    <div className="bus-type">{data.busType}</div>
                                                    <div className="bus-details">
                                                        <div className="bus-starting-time">
                                                            <div className="bus-place">{data.source}</div>
                                                            <div className="bus-time">{data.departureTime}</div>
                                                        </div>
                                                        <div className="center-data">
                                                            <div className="bus-duration">{data.duration}</div>
                                                            <FaArrowsAltH className="bus-arrow" />

                                                        </div>
                                                        <div className="bus-starting-time">
                                                            <div className="bus-place">{data.destination}</div>
                                                            <div className="bus-time">{data.arrivalTime}</div>
                                                        </div>
                                                    </div>


                                                    <div className="bus-seat-view">


                                                        <div className="seater-arrange1">
                                                            <GiSteeringWheel style={{ color: "white", fontSize: "60px" }} />
                                                            {
                                                                data.seatLayout.first[0].map((seats, index) => {
                                                                    return (
                                                                        <>
                                                                            <div style={{ width: seatwidth }} className={booked.includes(seats) ? "seater-selected" : data.availableSeats.includes(seats) ? "seater" : "seater-booked"} onClick={() => data.availableSeats.includes(seats) && booked.indexOf(seats) == -1 && setBooked([...booked, seats])} >{seats}</div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                        <div className="seater-arrange2">
                                                            {
                                                                data.seatLayout.first[1].map((seats, index) => {
                                                                    return (
                                                                        <>
                                                                            <div style={{ width: seatwidth }} className={booked.includes(seats) ? "seater-selected" : data.availableSeats.includes(seats) ? "seater" : "seater-booked"} onClick={() => data.availableSeats.includes(seats) && booked.indexOf(seats) == -1 && setBooked([...booked, seats])} >{seats}</div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                        <div className="seater-arrange3">
                                                            {
                                                                data.seatLayout.first[2].map((seats, index) => {
                                                                    return (
                                                                        <>
                                                                            <div style={{ width: seatwidth }} className={booked.includes(seats) ? "seater-selected" : data.availableSeats.includes(seats) ? "seater" : "seater-booked"} onClick={() => data.availableSeats.includes(seats) && booked.indexOf(seats) == -1 && setBooked([...booked, seats])} >{seats}</div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                        <div className="seater-arrange4">
                                                            {
                                                                data.seatLayout.second[0].map((seats, index) => {
                                                                    return (
                                                                        <>
                                                                            <div style={{ width: seatwidth }} className={booked.includes(seats) ? "seater-selected" : data.availableSeats.includes(seats) ? "seater" : "seater-booked"} onClick={() => data.availableSeats.includes(seats) && booked.indexOf(seats) == -1 && setBooked([...booked, seats])}>{seats}</div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                        <div className="seater-arrange3">
                                                            {
                                                                data.seatLayout.second[1].map((seats, index) => {
                                                                    return (
                                                                        <>
                                                                            <div style={{ width: seatwidth }} className={booked.includes(seats) ? "seater-selected" : data.availableSeats.includes(seats) ? "seater" : "seater-booked"} onClick={() => data.availableSeats.includes(seats) && booked.indexOf(seats) == -1 && setBooked([...booked, seats])}>{seats}</div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>



                                                        <div className="seats-info">
                                                            <div className="booked-seats-info">
                                                                <div className="booked-seats"></div>
                                                                <div className="booked-seats-data">Booked Seats</div>
                                                            </div>
                                                            <div className="available-seats-info">
                                                                <div className="available-seats"></div>
                                                                <div className="available-seats-data">Available Seats</div>
                                                            </div>
                                                            <div className="selected-seats-info">
                                                                <div className="selected-seats"></div>
                                                                <div className="selected-seats-data">Selected Seats</div>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="selected-seats-view">
                                                        {
                                                            booked &&
                                                            <div className="selected-seats-title">Selected Seats -

                                                                {

                                                                    booked.map((seats) => {
                                                                        return (
                                                                            <>

                                                                                <div className="selected-final">{seats}</div>
                                                                            </>
                                                                        )
                                                                    })
                                                                }

                                                            </div>

                                                        }
                                                    </div>


                                                    <div className="selected-seats-price" >Price - ₹{booked.length * data.price}/-</div>

                                                    <div className="pay-now" onClick={() => notifi()}>Pay Now</div>

                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                    }
                </div>
            }


            {
                switchComponents == true && id == -1 && <Profile travelbus={travelbus} booked={booked} />
            }




        </>
    )
}

export default Buslayout;