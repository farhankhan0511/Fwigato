
import React from "react";
import {CDN_URL} from "../../utils/constants"
import { removeitem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";





const Cartitem = (props) => {
    const {dishdata}=props;
    const dispatch =useDispatch();
    
    
     return <div className="w-[253px] p-2 m-6 bg-gray-100  hover:scale-95 hover:bg-gray-200 relative" >
         
        
         <img className="w-[253.84] h-[169.23]" src={CDN_URL+ (dishdata?.card?.info?.imageId || dishdata?.card?.info?.cloudinaryImageId )}/>
            <h1 className="m-4 font-bold">{dishdata?.card?.info?.name}</h1>
         <h2 className="m-4">Price: Rs { (dishdata?.card?.info?.defaultPrice)/100 || (dishdata?.card?.info?.price)/100 }</h2>
         <h3 className="m-4">Portion Size:  {dishdata?.card?.info?.itemAttribute?.portionSize}</h3>
         <h3 className="m-4">Type:   {dishdata?.card?.info?.itemAttribute?.vegClassifier}</h3>
         <h3 className="m-4"
          >Rating: {dishdata?.card?.info?.ratings?.aggregatedRating?.rating} stars</h3>
           
            <button  onClick={()=>{
            dispatch(removeitem());

           }} className="bg-black text-white rounded-md absolute top-40 left-24 px-2 py-1 z-10 hover:bg-slate-500">Remove</button>
          
        
      
     </div>
}

export default Cartitem;