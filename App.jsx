
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { VscAccount } from "react-icons/vsc";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBus } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { Buses, locations } from './data';
import React, { createContext, useContext, useEffect, useState ,Fragment} from 'react';
import Buslist from './buslist';
import Profile from './profile';
import Homepage from './homepage';
import { useNavigate,Routes,Route } from 'react-router-dom';
import Buslayout from './buslayout';
import Signup from './signup';


export const colorProvider = createContext()
function App() {
  
console.log("d")
const navigate = useNavigate()


const [user , setUser] =  useState([
      
  { id: 1, name: "suresh", email: "suresh@gmail.com" ,password:"P@ssw0rd!2024" },
  { id: 1, name: "suresh", email: "suresh@gmail.com" ,password:"P@ssw0rd!2024" },
  { id: 2, name: "ramesh", email: "ramesh@gmail.com", password:"Secur3P@ss!"},
  { id: 3, name: "john" , email: "john@gmail.com",password:"$tr0ngP@ss"},
  { id: 4, name: "alice", email: "alice@gmail.com" ,password:"8#C0mpl3xPwd"},
  { id: 5, name: "bob", email: "bob@gmail.com" ,password:"!Safe&Secure#2"},
  { id: 6, name: "emma", email: "emma@gmail.com" ,password:"P@ssphr@se5"},
  { id: 7, name: "alex", email: "alex@gmail.com" ,password:"L0ckD0wn2024"},
  { id: 8, name: "lisa", email: "lisa@gmail.com" ,password:"$tr0ngP@ssw0rd"},
  { id: 9, name: "kevin", email: "kevin@gmail.com",password:"2F@ct0rA#uth!" },
  { id: 10, name: "sara", email: "sara@gmail.com",password:"S3cur1ty!Now" }

]);


 
useEffect(() =>{
  navigate('/homepage')
},[])


  return (
    <>
    



    <Routes>

  <Route path='/homepage/*' element={<Homepage />}></Route>
  <Route path='/homepage' element={<Homepage />}></Route>

  <Route path='/buslayout' element={<Buslayout />}></Route>
  <Route path='/signup' element={<Signup />}></Route>
  <Route path='/buslist' element={<Buslist />}></Route>

  
</Routes>
  

  


      
    </>


  );
}

export default App;


