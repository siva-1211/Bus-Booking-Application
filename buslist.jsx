
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { VscAccount } from "react-icons/vsc";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBus } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { Buses, locations } from './data';
import { useState } from 'react';
import './buslist.css'
import { useNavigate ,Route,Routes} from 'react-router-dom';
import Buslayout from './buslayout';


function Buslist(props) {

    const [switchComponents , setSwitchComponents] = useState(props.switchComponents)
    console.log("DCD" , switchComponents)

const [id, setId] = useState(-1)
    // const [filteredbus, setFilteredbus] = useState(null)

    const [filteredbus, setFilteredbus] = useState(props.filteredbus)
    const [travelbus ,setTravelbus] = useState([])

const navigate = useNavigate()
    console.log("buslistpage", filteredbus)

    function navi(id){
        setId(id)
        console.log(id)
        setTravelbus(filteredbus.filter((data) =>
       data.id === id 
    ));
    console.log(travelbus)
    }

    


    return (
        <>

    {
        id === -1 &&
    
      <div> 
       
           <h1 className='main-title'>Available Busses</h1>
            <div className="buslist">

                {
                    filteredbus.map((data) => {
                        return (
                            <>
                                <div className='display-layout'>
                                    <div className="bus-titles">
                                        <div>{data.name}</div>
                                        <div className='bus-types'>{data.busType}</div>
                                    </div>
                                    <div className="bus-travel-details">
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
                                        <button className='seat-button' onClick={() =>navi(data.id)}>Show Seats</button>
                                        <div>{data.availableSeats.length} Seats Available </div>
                                    </div>

                                </div>
                            </>
                        )
                    })
                }
            </div>
            </div> 
}


{
    id !== -1 && <Buslayout travelbus={travelbus} switchComponents = {switchComponents} id ={id}/>
}
       
        </>


    );
}

export default Buslist;
