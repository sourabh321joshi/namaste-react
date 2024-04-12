import React from "react";

class UserClass extends React.Component{

  constructor(props){
       super(props);
       
       this.state = {
         userInfo :{
          name: "dummy name",
          location:"default",
          avatar_url:"https:url",
         },
      
       };
  }

   async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    
    this.setState({
      userInfo:json,
    });
    console.log(json);

   }

   render() {
        const {name , location ,avatar_url} = this.state.userInfo;
     

      return  (
           <div className="user-card">
            <img src={avatar_url}></img>
            <h2>Name : {name} </h2>
            <h3>Location : {location}</h3>
            <h4>Contact : @Sourabh321joshi</h4>
           </div>
     );
   }
}

export default UserClass;