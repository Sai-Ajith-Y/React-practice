import React from "react";
import ReactDOM from "react-dom/client";
// React Element
const title = (
     <h1 className="Head">
          React Element in Class Composition 
      </h1>
);  
// functional component 
const Title = () => (
     <h1 className="Head">
          Hello
     </h1>
);    
// component composition 
const HeadingComponent = () => (
     <div>
          {title} // code inside this is nothing but a js code in this way we call react elements in a component
          <Title /> // this way we used to call one component in another component and this is called as component composition 
          <h1 className="Heading">
               Hello React
          </h1>
     </div>
);     
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);  // in this way we render a component  