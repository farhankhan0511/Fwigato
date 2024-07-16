
import React from "react";
import ReactDOM from "react-dom/client"

const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"1"},"Fuck off"),React.createElement("h1",{id:"2"},"Bitch")]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{id:"12"},"Fuck off"),React.createElement("h1",{id:"22"},"Bitch")]
    )]
    )




console.log(parent);












const heading=React.createElement("h1",{id:"head"},"Helloworld from React!")
    const root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent);
