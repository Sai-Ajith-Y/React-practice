        const heading = React.createElement(
            "h1",
             {id:"heading", xyz:"zyx"}, 
             "Hello Wrold from react"
            );
        console.log(heading); // this gonna return object to you in the console
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);