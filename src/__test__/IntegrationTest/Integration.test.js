import React from "react";
//import ReactDOM from "react-dom";
import App from "./../../App";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { CheckBoxProvider } from "./../../components/Context/CheckBoxContext";
import { StepsProvider } from "./../../components/Context/StepsContext";

import "./../../locale";
beforeEach(() => {
  render(
    <StepsProvider>
      <CheckBoxProvider>
        <App></App>
      </CheckBoxProvider>
    </StepsProvider>
  );
});
it("Should pass all steps", () => {
  fireEvent.click(screen.getByRole("checkbox"));
  expect(screen.queryByText("Siguiente")).toBeVisible();
  fireEvent.click(screen.queryByText("Siguiente"));
  expect(
    screen.queryByText(
      "En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien"
    )
  ).toBeInTheDocument();
  expect(screen.queryByText("Crea tu contraseña maestra")).toBeInTheDocument();
  expect(
    screen.queryByText("Repite tu contraseña maestra")
  ).toBeInTheDocument();
  expect(
    screen.queryByText(
      "También puedes crear una pista que te ayude a recordar tu contraseña maestra."
    )
  ).toBeInTheDocument();
  expect(
    screen.queryByText("Crea tu pista para recordar tu contraseña (opcional)")
  ).toBeInTheDocument();
});
