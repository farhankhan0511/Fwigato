
import React from "react";
import {CDN_URL} from "../../utils/constants"






const Restuarantcard=(props)=>{
    const {resdata}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla}=resdata?.info
     return <div className="w-[280px] p-2 m-6 bg-gray-100 border border-solid border-black hover:scale-95 hover:bg-gray-200">
         
         <img className="w-[280]" src={CDN_URL+cloudinaryImageId}/>
         <h3 
         className="font-bold">{name}</h3>
         <h4 className="Cusine">{cuisines.join(", ")}</h4>
         <h4
          className="Star-ratings">{avgRating} stars</h4>
         <h4 className="Delivery ETA">{sla.deliveryTime +" to deliver"}</h4>
         
     </div>  
 }

 export default Restuarantcard;