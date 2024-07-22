import React,{useEffect,useState} from 'react'
import reactDom from 'react-dom'
import { useParams } from 'react-router'
import Dishcard from './Dishcard'
import Shimmer from './Shimmer'
import { CDN_URL, } from '../../utils/constants'
import useRestaurantMenu from '../../utils/useRestaurantMenu'

const Restuarantmenu = () => {
const [menuDish,setmenuDish]=useState(null)
const {resId}=useParams();
       

  const restinfo=useRestaurantMenu(resId)

  useEffect(() => {
        if (restinfo?.data?.cards) {
            setmenuDish(restinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        }
    }, [restinfo]);

    if (!restinfo) {
        return <Shimmer />;
    }

   
   
 return(
    <div className="menu">
        <div className="Hotel">
        <div>
        <h1>{restinfo?.data?.cards[2]?.card?.card?.info.name}</h1>
        <h3>{restinfo?.data?.cards[2]?.card?.card?.info.cuisines.join(",")}</h3>
        </div>
        <div>
            <img className="Hotelimg" src={CDN_URL+restinfo?.data?.cards[2]?.card?.card?.info.cloudinaryImageId}/>
        </div>

        </div>
        <h2>Menu</h2>
        <div className="menucontain">
        {menuDish?.map((menu) => (
                <Dishcard 
                key={menuDish?.card?.info?.id}
                 dishdata={menu} />
            ))}
        </div>
           
        
    </div>
  )
}

export default Restuarantmenu;

