import React,{useEffect,useState} from 'react'
import reactDom from 'react-dom'
import { useParams } from 'react-router'
import Dishcard from './Dishcard'
import Shimmer from './Shimmer'
import { CDN_URL, MENU_API } from '../../utils/constants'

const Restuarantmenu = () => {
const [restinfo,setrestinfo]=useState([])
const {resId}=useParams();
    const menu=async ()=>{
        try{
            datas=await fetch(MENU_API+resId)
        datajson=await datas.json()
        setrestinfo(datajson)
        
       
     
        }
        catch(err){
            console.log(err)
        }
        
    }
    useEffect(()=>{ 
        menu();
    },[])
const menuDish = restinfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;



return (restinfo?.length===0)?
<Shimmer/>:
   
 (
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

