import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Testing Async component", () => {
  test("checks if async list is rendered", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });
    // Arrange
    render(<Async />);

    // Assert
    const listElements = await screen.findAllByRole("listitem");
    expect(listElements).not.toHaveLength(0);
  });
});
