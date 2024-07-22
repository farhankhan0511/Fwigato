
import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restuarantmenu from "./components/Restuarantmenu";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";

const Grocery=lazy(()=>import("./components/Grocery"))

const Applayout=()=>{
    return <div className="app">
        <Header></Header>
       
        <Outlet/>
        

    </div>
}






const appRouter=createBrowserRouter([
  {path:"/",
    element:<Applayout/>,
    children:[ 
      {path:"/",
        element:<Body/>},
      {path:"/About",
      element:<About/>
      
    },
    {
      path:"/Contact",
      element:<Contact/>
    },{
      path:"/restaurants/:resId",
      element:<Restuarantmenu/>
    
    },{
      path:"/Grocery",
      element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
    }
  ], 
    errorElement:<Error/>
  }
 

])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
