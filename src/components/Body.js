
import React,{useState,useEffect}  from "react";
import Restuarantcard,{withlabel} from "./Restuarantcard"

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import useOnlineStatus from "../../utils/useOnlineStatus";
import useSwiggyApi from "../../utils/useSwiggyApi";

 


export const Body=()=>{
    const RestaurantNear=withlabel(Restuarantcard);
    const [resl,setresl]=useState([]);
    const [inpval,setinpval]=useState("")
    const [filterdlists,setfilteredlists]=useState(resl)

    const data = useSwiggyApi();

    useEffect(() => {
        if (data) {
            setresl(data);
            setfilteredlists(data);
        }
    }, [data]);
    
    let reslbug=resl

 const onlinestatus=useOnlineStatus()
if(onlinestatus===false){
    return <h1>You are offline please check your connection</h1>
}
return (resl.length===0)?
     <Shimmer/>:


    <div className="body">
        <div className="flex">
          
            <div>  
            <input type="text"  className=" p-1 m-4 border border-solid border-black  " onChange={(e)=>setinpval(e.target.value)
                
            } value={inpval}
            
            />
            
            <button className="px-4 py-2 bg-green-200 m-4 cursor-pointer hover:bg-green-300 rounded-lg"
             onClick={()=>{
                    
                   const searched=reslbug.filter((res)=>((res.info.name).toLowerCase()).includes(inpval.toLowerCase()))
                   if(searched.length!=0){setfilteredlists(searched);}
                   else{
                    console.log(inpval,"not found")
                    
                   }
                   
               
                   
                    

            }} >Search</button>
            </div>

           <button className="px-4 py-2 bg-green-200 m-4 cursor-pointer hover:bg-green-300 rounded-lg" onClick={()=>{
            const filterdlist=resl.filter((res)=> res.info.avgRating>4.5 );
            setfilteredlists(filterdlist);
            
           }
           
            }>Top Rated Restaurants</button>
        </div>
        <div className="flex flex-wrap justify-around">
        {
        filterdlists.map((restuarant) => (
         <Link className="link" to={"/restaurants/"+restuarant.info.id} > 
         
            {(restuarant?.info?.sla?.deliveryTime<=25)?<RestaurantNear key={restuarant.info.id} resdata={restuarant} />:
         <Restuarantcard key={restuarant.info.id} resdata={restuarant} />
            }
        
         </Link>
        ))} 
        
         
        
        
        
  
        </div>
    </div>
        }
export default Body;
        