import { fireEvent, render, screen } from "@testing-library/react";
// import logo from "../images/logo.jpg";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
test("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByText("Login");
  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

test("Should render Header component with Cart Items (0)", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByText("Login");
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

test("Should change login button to logout on click Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByText("Login");
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const loginOutButton = screen.getByRole("button", { name: "Logout" });

  expect(loginOutButton).toBeInTheDocument();

  fireEvent.click(loginOutButton);

  expect(loginButton).toBeInTheDocument();

  // const online = screen.getByText("😀");

  // fireEvent.offline(offline);
  // expect(online).toBeInTheDocument();
});
