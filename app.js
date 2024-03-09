const parent = React.createElement("div" ,{id:"parent" ,})





const heading = React.createElement("h1" ,
{id:"heading", xyz:"abc"},"hello world from react");


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);