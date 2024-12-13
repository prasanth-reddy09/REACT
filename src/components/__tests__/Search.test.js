import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import MOCK_DATA from "../Mock_Data/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should search resList for pitta text input ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Pitta" } });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(1);

  const topRated = screen.getByRole("button", { name: "Top Rated Restarant" });
  const cardstop = screen.getAllByTestId("resCard");
  // console.log(cardstop);

  fireEvent.click(topRated);
  expect(cardstop.length).toBe(1);
});

it("Should filter top rated restarant ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRated = screen.getByRole("button", { name: "Top Rated Restarant" });
  const cardstop = screen.getAllByTestId("resCard");
  // console.log(cardstop);

  fireEvent.click(topRated);
  expect(cardstop.length).toBe(1);
});
