import { useEffect, useState } from "react";

const useRestarantCards = () => {
  const [listOfRestarants, setListOfRestarants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  //   https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0692593&lng=77.7982428&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
  // lat=12.9352403&lng=77.624532
  // lat=12.9715987&lng=77.5945627
  const fetchData = async () => {
    const cards = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0692593&lng=77.7982428"
    );

    const json = await cards.json();

    const fuck = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants
      ? json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      : json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
    setListOfRestarants(fuck);
  };

  return [listOfRestarants];
};

export default useRestarantCards;
