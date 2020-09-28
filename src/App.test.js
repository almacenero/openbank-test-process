import React from "react";
//import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";
import { CheckBoxProvider } from "./components/Context/CheckBoxContext";
beforeEach(() => {
  render(
    <CheckBoxProvider>
      <App></App>
    </CheckBoxProvider>
  );
});
it("renders without crashing", () => {
  //const div = document.createElement("div");
  //ReactDOM.render(<App />, div);
  //ReactDOM.unmountComponentAtNode(div);
});
