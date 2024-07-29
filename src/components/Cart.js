import React from 'react'
import reactDom from 'react-dom';
import { useSelector } from 'react-redux';
import { clearcart } from '../../utils/cartSlice';
import Cartitem from './cartitem';
import { useDispatch } from 'react-redux';


const Cart = () => {
    const cartitems=useSelector((store)=>store.cart.items);
    console.log(cartitems)
    const dispatch =useDispatch();
    
  return (
<div >
    <div >
        <button className="font-bold text-lg rounded-lg p-3 m-2 ml-[50%]" onClick={
            ()=>{dispatch(clearcart())}
        }>Clear Cart</button>
        
    </div>
<div className="flex">
        
        { cartitems?.map((item)=>(
        
         <div key={item?.card?.info?.id}>
            <Cartitem dishdata={item}/>
         </div>
          
        )
             
         )}
         </div>    
</div>


    
   
   
    
  )
}

export default Cart; 