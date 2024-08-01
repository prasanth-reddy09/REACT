// not yet

import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Header";

import Body from "./Body";


const AppComponent = ()=>{
   return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
   )
}
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppComponent/>);