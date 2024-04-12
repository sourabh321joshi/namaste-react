import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = ()=> {
    const [ListOfRestaurants ,setListOfRestaurants] = useState([]);

    const[filteredRestaurant ,setFilteredRestaurant] = useState([]);

    const[searchText ,setSearchText] = useState("");

   console.log("body rendered" ,ListOfRestaurants);
useEffect(() =>{
    fetchData();
} ,[]);     
  
 const fetchData = async ()=>{
    const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.681711298285776&lng=75.83385474979877&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

 const json = await data.json();
 console.log(json);
 setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 } ;

        const onlineStatus = useOnlineStatus();
        if(onlineStatus === false)
        return(
        <h1>Looks like You are offline!! Please check your internet connection</h1>);


    return ListOfRestaurants.length === 0 ?(<Shimmer/>): (
        <div className="body">
            <div className="flex">
                <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText}
                onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={ ()=>{console.log(searchText);
                 
              const filteredRestaurant =  ListOfRestaurants.filter((res)=>
               res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
            }}

                >Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-200 rounded-lg"
                onClick={()=>{
                const filteredList = ListOfRestaurants.filter(
                    (res) => res.info.avgRating >4
                );
                setFilteredRestaurant(filteredList);
                }}
                >
                Top rated Restaurant</button>
                </div>
             
            </div>
            <div className="flex flex-wrap">
             {
             filteredRestaurant.map((restaurant ,index) => (
            <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>  <RestaurantCard resData = {restaurant}/></Link> ))
             }


        </div>
        </div>
    );
};

export default Body;