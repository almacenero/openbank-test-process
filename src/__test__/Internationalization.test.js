import React from "react";
//import ReactDOM from "react-dom";
import App from "./../App";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { CheckBoxProvider } from "./../components/Context/CheckBoxContext";
import { StepsProvider } from "./../components/Context/StepsContext";
import { ButtonsProvider } from "./../components/Context/ButtonsContext";
import { PasswordProvider } from "./../components/Context/PasswordContext";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import "./../locale";
const queryCache = new QueryCache();
beforeEach(() => {
  render(
    <ReactQueryCacheProvider queryCache={queryCache}>
      <PasswordProvider>
        <ButtonsProvider>
          <StepsProvider>
            <CheckBoxProvider>
              <App></App>
            </CheckBoxProvider>
          </StepsProvider>
        </ButtonsProvider>
      </PasswordProvider>
    </ReactQueryCacheProvider>
  );
});
it("Should load deutsch language", async () => {
  const deLanguages = await screen.getAllByTestId("Flag-DE");

  fireEvent.click(deLanguages[0]);
  const deTexts = screen.queryAllByText("OpenClose-Girokonto");
  expect(deTexts[0]).toBeInTheDocument();
  expect(
    screen.queryByText("Erstellen Sie Ihren Passwort-Manager")
  ).toBeInTheDocument();
  expect(
    screen.queryByText(
      "Zunächst müssen Sie ein anderes Passwort für Ihre elektronischen Gegenstände erstellen. Sie können Ihr Passwort nicht wiederherstellen. Denken Sie also gut daran."
    )
  ).toBeInTheDocument();
});
