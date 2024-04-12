import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";


class About extends Component{
    constructor(props){
        super(props);

        
    }
   render(){

    return(
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web series</h2>
          
            <UserClass name={"sourabh joshi(class)"} location={"indore (class)"}/>

        </div>
    );
   }
}


export default About;