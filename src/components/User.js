import { useState } from "react";

const User = ({name}) =>{
    
    const [ count] = useState(0);
    const [count2] = useState(2);

    return (

        <div className="user-card">
            <h1> count : {count}</h1>
            <h1>count2 :{count2}</h1>
            <h2>Name : {name} </h2>
            <h3>Location : Indore</h3>
            <h4>Contact : @Sourabh321joshi</h4>
        </div>
    );
};

export default User;