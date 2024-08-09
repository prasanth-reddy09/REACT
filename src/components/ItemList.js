import CDN_URL from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      <div className="itemcard ">
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="border-b-2 border-b-slate-200 mb-3 mt-7 px-4  flex justify-between items-start pb-10 "
          >
            <div className="w-9/12">
              <div>
                <h2 className="text-lg font-bold">{item?.card?.info?.name}</h2>
                <span className="font-medium">
                  ₹
                  {item?.card?.info?.defaultPrice
                    ? item?.card?.info?.defaultPrice / 100
                    : item?.card?.info?.price / 100}
                </span>
              </div>
              <div className="">
                <p className="description  text-gray-500">
                  {item?.card?.info?.description}
                </p>
              </div>
            </div>

            <div className="relative">
              {item?.card?.info?.imageId ? (
                <div>
                  <img
                    src={CDN_URL + item?.card?.info?.imageId}
                    className="w-[156px] object-cover h-36 rounded-xl"
                  ></img>
                  <button className="absolute bottom-[-18px] left-5 bg-white py-2 px-10 text-lime-600 shadow font-black rounded-lg">
                    ADD
                  </button>
                </div>
              ) : (
                <button className="absolute top-6 right-5 bg-white py-2 px-10 text-lime-600 shadow-lg font-black rounded-lg">
                  ADD
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
