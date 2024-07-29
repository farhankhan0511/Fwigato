import { MENU_API } from "./constants"
import react,{useEffect,useState} from "react";
const useRestaurantMenu=(resId)=>{
    const [restinfo,setrestinfo]=useState(null);
    const fetchdata=async ()=>{
        try{
           const datas=await fetch(MENU_API+resId);
        const datajson=await datas.json();
        
        setrestinfo(datajson);
       console.log(datajson)
     
        }
        catch(err){
            console.log(err)
        }
       }
   useEffect(()=>{
    fetchdata();
   },[resId])
   
  
    return restinfo;
}
export default useRestaurantMenu;