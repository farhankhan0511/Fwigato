
import React,{useState,useEffect}  from "react";
import Restuarantcard from "./Restuarantcard"

import Shimmer from "./Shimmer";
import Restuarantmenu from "./Restuarantmenu";
import { Link } from "react-router-dom";
import { SWIGGYAPI } from "../../utils/constants";

 


export const Body=()=>{
   
    const [resl,setresl]=useState([]);
    const [inpval,setinpval]=useState("")
    const [filterdlists,setfilteredlists]=useState(resl)


const fetchdata=async ()=>{
    
    try{
        const data= await fetch(SWIGGYAPI)
    
    const jsondata=await data.json();
    setresl(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredlists(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


    console.log(jsondata)

    }
    catch(err){
        console.log(err)
    }
   
}

 
useEffect(()=>{
    fetchdata();
},[]);


if (!resl || resl.length===0){
    return <Shimmer/>
}
    let reslbug=resl
    return <div className="body">
        <div className="filter">
          
            <div>  
            <input type="text"  className="searchbox" onChange={(e)=>setinpval(e.target.value)
                
            } value={inpval}
            
            />
            
            <button
             onClick={()=>{
                    
                   const searched=reslbug.filter((res)=>((res.info.name).toLowerCase()).includes(inpval.toLowerCase()))
                   if(searched.length!=0){setfilteredlists(searched);}
                   else{
                    console.log(inpval,"not found")
                    
                   }
                   
               
                   
                    

            }} className="searchbtn">Search</button>
            </div>

           <button className="toprated" onClick={()=>{
            const filterdlist=resl.filter((res)=> res.info.avgRating>4.5 );
            setfilteredlists(filterdlist);
            
           }
           
            }>Top Rated Restaurants</button>
        </div>
        <div className="restuarant-container">
        {
        filterdlists.map((restuarant) => (
         <Link className="link" to={"/restaurants/"+restuarant.info.id} > <Restuarantcard key={restuarant.info.id} resdata={restuarant} /></Link>
        ))} 
        
         
        
        
        
  
        </div>
    </div>
        }
export default Body;