
import React from "react";
import ReactDOM from "react-dom/client"

//react element just like dom elements
const oilte=<div><h1>Fuck u</h1></div>

const Title=()=>(
    <div>
        {oilte}
        <h1>React functional component</h1>
        </div>
)
    
    


const Jsxhaeding=()=>(
     <div id="Container">
    <h1>Namaste React using JSX </h1>
    
    <Title/>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Jsxhaeding/>);
