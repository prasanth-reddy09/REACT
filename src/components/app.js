// not yet

import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import RestarantMenu from "./RestarantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "../utils/userContext";
import { useContext } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./Cart";
import Location from "./Location";

const AppComponent = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="pt-0 px-16 pb-2 ">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restarants/:resId",
        element: <RestarantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/location",
        element: <Location />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
