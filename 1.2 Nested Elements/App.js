/* <div id="parent">
          <div id="child">
          <h1> i am a h1 tag</h1>
          </div>
   </div>
*
*
*
*
*
*/

const parent = React.createElement(
     "div",
     {id: "parent"},
     React.createElement(
          "div",
          {id: "child"},
          React.createElement("h1",{},"I,m a h1 tag")))     
        
console.log(parent); // object       
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);