import RestarantMenu from "../RestarantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Header from "../Header";
import Cart from "../Cart";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
// it("should load restarant menu component", async () => {
//   //   console.log(MOCK_DATA);
//   await act(() => {
//     render(
//       <BrowserRouter>
//         <RestarantMenu />
//       </BrowserRouter>
//     );
//     // const data = screen.getByTestId("hello");
//     const data = await screen.findByTestId("hello");

//     console.log(data);
//     // expect(data).toBeInTheDocument();
//   });
// });

it("should show loading shimmer initially and then load restaurant menu", async () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
        <RestarantMenu />
        <Cart />
      </BrowserRouter>
    </Provider>
  );

  // Check if Shimmer is shown first
  //   expect(screen.getByTestId("shimmer")).toBeInTheDocument();

  // Wait for the menu to load
  const accordianHeader = await screen.findByText("Recommended(11)");
  expect(accordianHeader).toBeInTheDocument();

  //   console.log(data);
  fireEvent.click(accordianHeader);
  const foodItems = screen.getAllByTestId("foodItem");
  expect(foodItems.length).toBe(11);

  const addBtn = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtn[0]);
  const cartItem = screen.getByText("Cart(1)");
  expect(cartItem).toBeInTheDocument();
  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart(2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItem").length).toBe(13);
});
