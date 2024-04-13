import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams} from "react-router-dom"
import {useParams} from "react-router-dom";



const RestaurantMenu = ()=>{

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
   
     if(resInfo === null) return <Shimmer/>;

     const {name , cuisines ,costForTwoMessage} = (resInfo?.cards[2]?.card?.card?.info);

     const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    

     const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]===
     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

     console.log(categories);
    return  (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
           
        </div>
    );
};

export default RestaurantMenu;