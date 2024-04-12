import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [BtnNameReact ,setBtnNameReact] = useState("login");

    const onlineStatus = useOnlineStatus();
   
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100  ">

            <div className="logo-container">
                <img className="w-36 " src ={LOGO_URL}
                />
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4"> 
                    <li className="px-4">
                        Online status :{onlineStatus?"🟢" :"🔴"}</li>
                    <li className="px-4">
                        <Link to="/">Home</Link></li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link></li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link></li>


                    <li className="px-4">Cart</li>
                    <button className="login"
                    onClick={()=>{
                        BtnNameReact === "login"?
                        setBtnNameReact("logout"):setBtnNameReact("login")}}>{BtnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;