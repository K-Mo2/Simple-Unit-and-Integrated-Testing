import { render, screen, expect } from "@testing-library/react";
import Greeting from "./Greeting";
test("Hello World text from Greeting component", () => {
  render(<Greeting />);

  const helloWorldElement = screen.getByText("hello world", { exact: false });
  expect(helloWorldElement).toBeInTheDocument();
});
