import resCard from "../utils/mockData";
import Restaurantcard from "./RestarantCard";
import { useState } from "react";

const Body = () => {

    const [filterResCards,setfilterResCards] = useState(resCard);

    return (

    <div className="body">

        <div className="filter">
            <button className="filter-btn" onClick={()=>{
            
                const filteredCard = filterResCards.filter(res => res.info.avgRating >= 4.4);
                console.log(filteredCard);
                setfilterResCards(filteredCard);
            }}>Top Rated Restarant</button>
        </div>
 

            <div className="search">Search</div>
            
            <div className="resto-cards">
               {filterResCards.map((res) => <Restaurantcard key="res.info.id" restarant = {res}/>)};
            </div>
        </div>
    )
};

export default Body;
