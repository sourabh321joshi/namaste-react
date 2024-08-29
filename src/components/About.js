import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";


class About extends Component{
    constructor(props){
        super(props);

        
    }
   render(){

    return(
        <div>
            <h1>About</h1>
            <div>
                sssssssssss
                <UserContext.Consumer>
                 {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}

                </UserContext.Consumer>
            </div>
            <h2>This is Namaste React Web series</h2>
          
            <UserClass name={"sourabh joshi(class)"} location={"indore (class)"}/>

        </div>
    );
   }
}


export default About;