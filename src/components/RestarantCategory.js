import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import ItemList from "./ItemList";
const RestarantCategory = (props) => {
  const { itemCard, showItems, setShowIndex, showIndex, index } = props;
  //   console.log(itemCard)
  const handle = () => {
    showIndex == index ? setShowIndex(null) : setShowIndex(index);
  };

  return (
    <div className="  flex w-full items-center flex-col mb-3  ">
      <div
        className="flex w-8/12 m-auto justify-between items-center bg-gray-300 px-4 py-4 shadow-lg cursor-pointer "
        onClick={handle}
      >
        <span className="font-poppins font-bold">
          {itemCard?.title}({itemCard?.itemCards?.length})
        </span>
        {showItems ? (
          <span className="text-black border-0 rounded-full  text-lg">
            <FaArrowUp />
          </span>
        ) : (
          <span className="text-black border-0 rounded-full  text-lg ">
            <FaArrowDown />
          </span>
        )}
      </div>
      <div className="itemlist w-8/12">
        {showItems && <ItemList items={itemCard?.itemCards} />}
      </div>
    </div>
  );
};

export default RestarantCategory;
