
import React from "react";
import {CDN_URL} from "../../utils/constants"






const Restuarantcard=(props)=>{
    const {resdata}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla}=resdata?.info
     return <div className="restuarantcard">
         
         <img className="restuarantimage" src={CDN_URL+cloudinaryImageId}/>
         <h3>{name}</h3>
         <h4 className="Cusine">{cuisines.join(", ")}</h4>
         <h4
          className="Star-ratings">{avgRating} stars</h4>
         <h4 className="Delivery ETA">{sla.deliveryTime +" to deliver"}</h4>
         
     </div>
 }

 export default Restuarantcard;