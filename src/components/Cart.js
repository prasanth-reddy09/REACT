import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    // <div>Hello</div>
    <div className="itemlist w-8/12 mx-auto">
      <div className="border-b-2 border-b-slate-200 mb-3 mt-7 px-4  flex justify-between items-start pb-10 ">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
