// import resCard from "../utils/mockData";
import Restaurantcard, { withPromotedLabel } from "./RestarantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimer";
import { Link } from "react-router-dom";
import useRestarantCards from "../utils/useRestarantCards";
import userContext from "../utils/userContext";
import { useContext } from "react";

const Body = () => {
  const [listOfRestarants] = useRestarantCards();
  const [filteredRestarants, setFilteredRestarants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(userContext);

  const RestarantOffer = withPromotedLabel(Restaurantcard);

  useEffect(() => {
    if (listOfRestarants.length > 0) {
      setFilteredRestarants(listOfRestarants);
    }
  }, [listOfRestarants]);

  const filter = (searchText, listOfRestarants) => {
    const Cards = listOfRestarants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return Cards;
  };

  if (!listOfRestarants || listOfRestarants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body px-28">
      <div className="my-5 flex gap-2 items-center">
        <div className="search  pl-4 flex gap-1 items-center">
          <input
            className="border border-solid border-black w-80 h-8 mr-7 placeholder-gray-700 pl-3"
            placeholder="Enter restarant to search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>

          <div className="flex mr-5">
            <button
              className="border border-collapse border-black bg-blue-400 px-2 py-1 rounded-lg"
              onClick={() => {
                const searchCards = filter(searchText, listOfRestarants);
                setFilteredRestarants(searchCards);
              }}
            >
              Search
            </button>
          </div>
        </div>

        <button
          className="border border-collapse border-black bg-orange-400 text-white px-2 py-1 rounded-full"
          onClick={() => {
            const filteredCard = listOfRestarants.filter(
              (res) => res.info.avgRating >= 4.4
            );
            setFilteredRestarants(filteredCard);
          }}
        >
          Top Rated Restarant
        </button>

        <div>
          <label className="font-medium ml-3">UserName : </label>
          <input
            className="border border-black rounded-lg pl-1 py-1 "
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="flex flex-wrap gap-7">
        {filteredRestarants.map((res) => (
          <Link to={"/restarants/" + res.info.id} key={res.info.id}>
            {res?.info?.aggregatedDiscountInfoV3?.header ? (
              <RestarantOffer restarant={res} />
            ) : (
              <Restaurantcard restarant={res} />
            )}
          </Link>
        ))}
        ;
      </div>
    </div>
  );
};

export default Body;
