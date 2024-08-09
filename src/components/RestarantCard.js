import CDN_URL from "../utils/constants";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import userContext from "../utils/userContext";

const Restaurantcard = (props) => {
  const { restarant } = props;
  const { loggedInUser } = useContext(userContext);
  const {
    name = "Unknown",
    cuisines = [],
    avgRating = 0,
    sla: { deliveryTime, slaString },
    cloudinaryImageId,
    locality,
  } = restarant?.info || {};

  return (
    <div className="grid w-[220.2px] grid-flow-row gap-y-2 transition-all  hover:scale-95 hover:cursor-pointer overflow-hidden">
      <div id="resimg" className="w-full relative inner-shadow ">
        <img
          className="w-full h-[146.8px] object-cover "
          src={CDN_URL + cloudinaryImageId}
          alt="biryani"
        />
      </div>

      <div className="w-full ml-1">
        <div className="w-full font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
          {name}
        </div>

        <div className="flex gap-x-1 items-center">
          <div className="w-5 h-5 text-white font text-xs bg-lime-600 rounded-full flex items-center justify-center">
            <FaStar />
          </div>
          <div className="rating">{avgRating}</div>
          <div className="font-medium">{" . " + slaString}</div>
        </div>

        <div className="text-gray-500 leading-6 w-full">
          <div className="overflow-hidden whitespace-nowrap text-ellipsis w-[219px] text-base ">
            {cuisines.join(", ")}
          </div>
          <div className="location">{locality}</div>
          <div className="font-bold">{loggedInUser}</div>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestarantCard) => {
  return (props) => {
    const { restarant } = props;
    const { header } = restarant?.info?.aggregatedDiscountInfoV3;
    const { subHeader } = restarant?.info?.aggregatedDiscountInfoV3;
    return (
      <div className="relative hover:scale-95">
        <div className="flex absolute left-3 top-[115px] text-white font-black  text-lg  font-poppins z-10 ">
          <p>{header + "\u00A0"}</p>
          <p>{subHeader}</p>
        </div>
        <RestarantCard {...props} />
      </div>
    );
  };
};
export default Restaurantcard;
