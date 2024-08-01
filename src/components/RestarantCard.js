import CDN_URL from "../utils/constants";
import { FaStar } from "react-icons/fa";

const Restaurantcard = (props) => {
    const {restarant} = props;
    const { name = 'Unknown', cuisines = [] ,avgRating = 0,
        sla :{deliveryTime,slaString},cloudinaryImageId,locality}
         = restarant?.info || {};

    return (
        <div className="resto-card">

            <div className="food-img">
                 <img id="resto-img" src={CDN_URL + cloudinaryImageId} alt="biryani" />   
            </div>

            <div className="info">
                <div className="restName">{name}</div>

                <div className="rate-duration">

                    <div className="star"><FaStar /></div>
                    <div className="rating">{avgRating}</div>
                    <div className="time">{" . "+slaString}</div>

                </div>

                <div className="location-cuisine">
                    <div className="cuisine">{cuisines.join(", ")}</div>
                    <div className="location">{locality}</div>
                </div>
            </div>
        </div>
    )
};

export default  Restaurantcard;