import React from "react";
//import ReactDOM from "react-dom";
import App from "./../../App";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { CheckBoxProvider } from "./../../components/Context/CheckBoxContext";
import { StepsProvider } from "../../components/Context/StepsContext.tsx";
import { ButtonsProvider } from "./../../components/Context/ButtonsContext";
import { PasswordProvider } from "./../../components/Context/PasswordContext";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

import "./../../locale";

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
it("Should pass all steps", async () => {
  const passwordData = "Yasser2020";
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
  await screen.findByTestId("info");

  fireEvent.change(await screen.findByTestId("password"), {
    target: { value: passwordData },
  });
  await screen.findByTestId("checkmark");
  fireEvent.change(await screen.findByTestId("repassword"), {
    target: { value: passwordData },
  });
  await screen.findByTestId("repassword-checkmark");

  await screen.findByTestId("taks");
  fireEvent.change(await screen.findByTestId("taks"), {
    target: {
      value:
        "Laborum occaecat aute mollit anim eu et cillum cupidatat occaecat eiusmod aliquip. Ut nulla id tempor qui exercitation quis ea quis. Et ipsum cupidatat cupidatat deserunt non aliqua et voluptate reprehenderit est dolor aliquip. Consectetur duis ad duis do dolore pariatur commodo commodo officia. Mollit nisi non voluptate laborum duis consequat sint. Commodo amet excepteur id consequat sit elit ex exercitation qui nisi velit non ea.",
    },
  });
  screen.queryByText("Guardar");
  fireEvent.click(screen.queryByText("Guardar"));

  screen.queryByText("Enviando solicitud...");
  await screen.queryByText(
    "Eso es todo, en hora buena ya tienes guardada tu contraseña!"
  );
});
