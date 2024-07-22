

import React,{useState} from "react";

import ReactDOM from "react-dom/client"
import myimage from "../pictures/image.png"
import { Link } from 'react-router-dom';

const Header=()=>{
    const [btnname,setbtnname]=useState("Login")

    

    return <div className="header">
        <div className="Logocontainer">
            <img
             className="logo" src={myimage}/>
        </div>
        <div className="nav-items">
            <ul >
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/Grocery">Grocery</Link></li>
                <li>
                    <Link to="/About">About Us</Link></li>
                <li> <Link to="/Contact">Contact Us</Link></li>
                <li><button>Cart</button></li>
                <li><button onClick={()=>{
                    if (btnname=="Login"){
                        setbtnname("Logout")
                    }
                    else{
                       setbtnname("Login")
                    }

                }}>{btnname}</button></li>
            </ul>
        </div>
    </div>
}
export default Header;