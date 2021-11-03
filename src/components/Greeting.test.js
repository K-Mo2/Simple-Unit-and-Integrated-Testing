import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Testing Greeting component", () => {
  test('renders "Hello World: if it exists', () => {
    render(<Greeting />);

    const element = screen.getByText("hello world", { exact: false });
    expect(element).toBeInTheDocument();
  });

  test("renders 'It's good to see you' if the button is NOT clicked", () => {
    render(<Greeting />);

    const element = screen.getByText("It's good to see you", { exact: false });
    expect(element).toBeInTheDocument();
  });

  test('renders "Changed" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    //Act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    // Assert
    const outputElement = screen.getByText("changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("checks if the 'It's good to see you' paragraph is visible in the document when the button is NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    // Assert
    const outputElement = screen.queryByText("It's good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
