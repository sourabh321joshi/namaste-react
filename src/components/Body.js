import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardpromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://late-lake-7cdd.theyariyaan738.workers.dev/"
        );
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <h1 className="text-center">Looks like you are offline! Please check your internet connection</h1>
        );

    const { loggedInUser, setUserName } = useContext(UserContext);

    return ListOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body p-4">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="search flex flex-col md:flex-row gap-4 items-center mb-4">
                    <input
                        type="text"
                        className="border border-solid border-black p-2"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 bg-green-100 rounded-lg"
                        onClick={() => {
                            const filteredRestaurant = ListOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
                    <label className="mr-2">Username:</label>
                    <input
                        className="border border-solid border-black p-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 bg-gray-200 rounded-lg"
                        onClick={() => {
                            const filteredList = ListOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-4">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
                        {restaurant.info.isOpen ? (
                            <RestaurantCardpromoted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
