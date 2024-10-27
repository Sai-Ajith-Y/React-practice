/* <div id="parent">
          <div id="child">
               <h1> i am a h1 tag</h1>
               <h2> i am a h2 tag</h2>
          </div>
          <div id="child2">
               <h1> i am a h1 tag</h1>
               <h2> i am a h2 tag</h2>
          </div>
   </div>
   we need to use array for the parent object to pass
    multiple div childs
*/
import React from "react";
import ReactDOM from "react-dom";
const parent = React.createElement("div",{id: "parent"},[
     React.createElement("div",{id: "child"},[
          React.createElement("h1",{},"I,m a h1 tag"),
          React.createElement("h1",{},"I,m a h2 tag")
     ]),
     React.createElement("div",{id: "child"},[
          React.createElement("h1",{},"I,m a h1 tag"),
          React.createElement("h1",{},"I,m a h2 tag")
     ])
]
     
)     
        
console.log(parent); // object       
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);