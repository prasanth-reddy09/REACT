import Shimmer from "./Shimer";
import useRestarantMenu from "../utils/useRestarantMenu";
import { useParams } from "react-router-dom";
import RestarantCategory from "./RestarantCategory";
import { useState } from "react";

const RestarantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestarantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const fuck =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR ??
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  // console.log(
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const { cards } = fuck;
  console.log(cards);
  const categories = cards.filter(
    (itemCard) =>
      itemCard?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(categories);

  return (
    <div className="menu flex justify-center items-center flex-col ">
      <h1 className="mt-2 mb-1 font-bold">
        {resInfo?.data?.cards[2]?.card?.card?.info?.name}
      </h1>

      <h2 className="mb-3">
        {resInfo?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
      </h2>

      <ul className="w-full">
        {categories.map((category, index) => (
          <li key={category?.card?.card?.title}>
            <RestarantCategory
              itemCard={category?.card?.card}
              showItems={index === showIndex && true}
              setShowIndex={setShowIndex}
              showIndex={showIndex}
              index={index}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestarantMenu;
