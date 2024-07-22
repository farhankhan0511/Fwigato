
import React from "react";
import {CDN_URL} from "../../utils/constants"






const Dishcard = (props) => {
    const {dishdata}=props;
    
     return <div className="p-2 m-6 w-3/5 flex justify-around  border border-solid border-black hover:scale-95">
         <div className=""> 
            <h1 className="m-4 font-bold">{dishdata?.card?.info?.name}</h1>
         <h2 className="m-4">Price: Rs { (dishdata?.card?.info?.defaultPrice)/100 || (dishdata?.card?.info?.price)/100 }</h2>
         <h3 className="m-4">Portion Size:  {dishdata?.card.info.itemAttribute?.portionSize}</h3>
         <h3 className="m-4">Type:   {dishdata?.card.info.itemAttribute?.vegClassifier}</h3>
         <h3 className="m-4"
          >Rating: {dishdata?.card.info.ratings?.aggregatedRating?.rating} stars</h3>
          </div>
        
        <img className="h-80 w-1/4" src={CDN_URL+ (dishdata?.card?.info?.imageId)}/>
         
     </div>
}

export default Dishcard