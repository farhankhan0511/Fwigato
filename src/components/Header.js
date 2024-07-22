

import React,{useState} from "react";

import ReactDOM from "react-dom/client"
import myimage from "../pictures/image.png"
import { Link } from 'react-router-dom';

const Header=()=>{
    const [btnname,setbtnname]=useState("Login")

    

    return <div className="flex justify-between bg-pink-100">
        <div >
            <img
             className="w-40 shadow-md" src={myimage}/>
        </div>
        <div className="flex items-center">
            <ul className="flex m-4">
                <li className="px-2"><Link to="/">Home</Link></li>
                <li className="px-2"> <Link to="/Grocery">Grocery</Link></li>
                <li className="px-2">
                    <Link to="/About">About Us</Link></li>
                <li className="px-2"> <Link to="/Contact">Contact Us</Link></li>
                <li className="px-2"><button >Cart</button></li>
                <li className="px-2"><button onClick={()=>{
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