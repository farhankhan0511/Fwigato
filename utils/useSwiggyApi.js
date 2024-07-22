import React,{useEffect,useState} from 'react'
import { SWIGGYAPI } from './constants';




const useSwiggyApi = () => {
    const [data,setdata]=useState(null)
    
   useEffect(()=>{
    const fetchdata=async ()=>{
    
        try{
            const pata= await fetch(SWIGGYAPI)
        
        const jsondata=await pata.json();
       setdata(jsondata)
       
        
    
        }
        catch(err){
            console.log(err)
        }
       
    }
    
    fetchdata();
   },[])
  
   return data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
}


export default useSwiggyApi;
