import { render, screen } from "@testing-library/react";
import Restaurantcard from "../RestarantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestarantCard";

it("Should render Restarant Card Component With Props Data", () => {
  render(<Restaurantcard restarant={MOCK_DATA} />);

  const name = screen.getByText("Burger King");

  expect(name).toBeInTheDocument();
});

it("Should render Restarant Card Promoted Component With Props Data", () => {
  const PromotedRestarantCard = withPromotedLabel(Restaurantcard);
  render(<PromotedRestarantCard restarant={MOCK_DATA} />);

  const header = screen.getAllByRole("paragraph");

  expect(header.length).toBe(2);
});
