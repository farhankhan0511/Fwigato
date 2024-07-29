
import React from "react";
import {CDN_URL} from "../../utils/constants"






const Restuarantcard=(props)=>{
    const {resdata}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla}=resdata?.info
     return <div className="w-[253px] p-2 m-6 bg-gray-100  hover:scale-95 hover:bg-gray-200 ">
         
         <img className="w-[253.84] h-[169.23]" src={CDN_URL+cloudinaryImageId}/>
         <h3 
         className="font-bold">{name}</h3>
         <h4 className="Cusine">{cuisines.join(", ")}</h4>
         <h4
          className="Star-ratings">{avgRating} stars</h4>
         <h4 className="Delivery ETA">{sla.deliveryTime +" to deliver"}</h4>
         
     </div>  
 }

export const withlabel=(Restuarantcard)=>{
    return (props)=>{
            return (<div className="relative">
            <label className="bg-black text-white rounded-md absolute top-2 left-2 px-2 py-1 z-10">Promoted</label>
            <Restuarantcard {...props}/>
            </div>);
        };
    
};


 export default Restuarantcard;