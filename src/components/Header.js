import { useState } from "react";
import logo from "/images/logo.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import useInternetStatus from "../utils/useInternetStatus";
import userContext from "../utils/userContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(userContext);

  const status = useInternetStatus();

  return (
    <div className="flex justify-between pl-5 mt-2 mr-1  items-center border border-solid border-gray-400">
      <div className="res-logo">
        <img className="w-24" src={logo} alt="reslogo" />
      </div>

      <div className="mr-36">
        <ul className="flex  gap-x-8">
          <li>OnlineStatus : {status ? "😀" : "😬"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>

          <li className="font-bold font-poppins">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
