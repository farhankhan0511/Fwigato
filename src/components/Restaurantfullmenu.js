import React,{useEffect,useState} from 'react'
import reactDom from 'react-dom'
import { useParams } from 'react-router'
import Dishcard from './Dishcard'
import Shimmer from './Shimmer'
import { CDN_URL, } from '../../utils/constants'
import useRestaurantMenu from '../../utils/useRestaurantMenu'



const Restaurantfullmenu = () => {
    const {resId}=useParams();
    const [menu,setmenu]=useState();
    const menudata=useRestaurantMenu(resId);
    const [show,setshow]=useState(false);
    

    useEffect(() => {
        if (menudata?.data?.cards) {
            setmenu(menudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
            
        }
    }, [menudata]);
    console.log(menudata)
    const singlecategory=menudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    const nestedcategory=menudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")


    const handleClick=()=>{
        setshow(!show);
    }
    return (!menudata) ?
         <Shimmer />:
    

   (
    
    <div className="menu">
        <div className="flex w-3/4 items-center border border-solid border-black justify-around mx-auto mt-5">
        <div>
        <h1 className="font-bold text-2xl">{menudata?.data?.cards[2]?.card?.card?.info.name}</h1>
        <h3>{menu?.data?.cards[2]?.card?.card?.info.cuisines.join(",")}</h3>
        </div>
        <div>
            <img className="w-40" src={CDN_URL+menudata?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId }/>
        </div>
    
        </div>
       
        <div className="flex flex-col items-center">
        <div className="justify-center items-center
        m-10"><h2 className=" font-bold text-xl">Menu</h2></div>

           
        { singlecategory?.map((sing)=>(
            <div key={sing.card.card.title} >
                  <div className=" bg-gray-200  w-full shadow-lg flex">
                  <h1 className="font-bold text-xl cursor-pointer"  onClick={handleClick}>{sing.card.card.title} ({sing.card.card.itemCards.length} )</h1>
                    <span>🔽</span>
                </div>
             
              <div  className="flex flex-wrap m-6"> 
              { show && sing.card?.card?.itemCards?.map((item)=>(
                <div key={item.card.info.id}>
                    <Dishcard  dishdata={item}/>
                </div>
                
                ))}
              </div>
            
         

            </div>
           

        ))}
        { nestedcategory?.map((nest)=>(
            <div key={nest?.card?.card?.title}>
                <div className=" bg-gray-200 shadow-lg flex">
                <h1 className="font-bold cursor-pointer " onClick={handleClick}>{nest?.card?.card?.title} ({nest?.card?.card?.categories?.length})</h1>
                </div>
               {nest.card?.card?.categories?.map((dish)=>(
                <div className="flex flex-wrap">
                    { show &&  dish?.itemCards?.map((item)=>(
                <div key={item?.card?.info?.id}>
                   <Dishcard dishdata={item}/>
                </div>
                
                ))}
                </div>
                
                ))}
            
         

            </div>
        
        ))}



            



        </div>
           
        
    
       


    </div>
  )


}


export default Restaurantfullmenu;