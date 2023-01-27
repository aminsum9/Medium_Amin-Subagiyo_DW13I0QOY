import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//
import App from "./App";
import Start from "./Start";

// test('renders learn react link', () => {
//   const { getByText } = render([<App />, <Start />]);
//   const linkElement = getByText(/Medium/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  it("renders Medium message", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Medium/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders nav with id app-nav", () => {
    const { getByTestId } = render(
      <Router>
        <Route path="/">
          <Start />
        </Route>
      </Router>
    );
    const linkElement = getByTestId("app-nav");
    expect(linkElement).toBeInTheDocument();
  });
});
