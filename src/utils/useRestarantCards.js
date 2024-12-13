// import { useEffect, useState } from "react";

const useRestarantCards = async (location) => {
  // const [listOfRestarant, setListOfRestarant] = useState([]);

  // useEffect(() => {
  //   fetchData(location);
  // }, []);

  // const fetchData = async (location) => {
  const cards = await fetch(
    `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.lat}&lng=${location.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
  );

  const json = await cards.json();

  const fuck = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants
    ? json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    : json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
  // setListOfRestarant(fuck);
  // };
  console.log("use", fuck);
  // return [listOfRestarant];
  return fuck;
};

export default useRestarantCards;
