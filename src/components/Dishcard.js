
import React from "react";
import {CDN_URL} from "../../utils/constants"






const Dishcard = (props) => {
    const {dishdata}=props;
    
     return <div className="dishcard">
         <div className="dishcardinfo"> 
            <h1>{dishdata?.card?.info?.name}</h1>
         <h2>Price: Rs { (dishdata?.card?.info?.defaultPrice)/100 || (dishdata?.card?.info?.price)/100 }</h2>
         <h3 className="dishattributes">Portion Size:  {dishdata?.card.info.itemAttribute?.portionSize}</h3>
         <h3 className="dishattributes">Type:   {dishdata?.card.info.itemAttribute?.vegClassifier}</h3>
         <h3
          className="Star-ratings">Rating: {dishdata?.card.info.ratings?.aggregatedRating?.rating} stars</h3>
          </div>
        
        <img className="dishimage" src={CDN_URL+ (dishdata?.card?.info?.imageId)}/>
         
     </div>
}

export default Dishcard