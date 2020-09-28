import React from "react";
//import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";
import { CheckBoxProvider } from "./components/Context/CheckBoxContext";
import { StepsProvider } from "./components/Context/StepsContext";
beforeEach(() => {
  render(
    <StepsProvider>
      <CheckBoxProvider>
        <App></App>
      </CheckBoxProvider>
    </StepsProvider>
  );
});
it("renders without crashing", () => {
  //const div = document.createElement("div");
  //ReactDOM.render(<App />, div);
  //ReactDOM.unmountComponentAtNode(div);
});
