import React from "react";
//import ReactDOM from "react-dom";
import App from "./../App";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { CheckBoxProvider } from "./../components/Context/CheckBoxContext";
import { StepsProvider } from "../components/Context/StepsContext.tsx";
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
              <App></App>a
            </CheckBoxProvider>
          </StepsProvider>
        </ButtonsProvider>
      </PasswordProvider>
    </ReactQueryCacheProvider>
  );
});
describe("Should load all the texts on the main screen and the next button should be disabled.", () => {
  it("Should load all steps options ", () => {
    const elements = screen.queryAllByText("Cuenta Corriente OpenClose");
    expect(elements[0]).toBeInTheDocument();
    expect(screen.queryByText("Bienvenid@")).toBeInTheDocument();
    expect(screen.queryByText("Registro")).toBeInTheDocument();
    expect(screen.queryByText("Finalizado")).toBeInTheDocument();
  });
  it("Should load all text on main page", () => {
    const elements = screen.queryAllByText("Cuenta Corriente OpenClose");
    expect(elements[0]).toBeInTheDocument();
    expect(screen.queryByText("Crea tu password manager")).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Guarda aqui todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaiones de papel."
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Crea tu clave maestra: Solo tú podrás acceder a tus secretos con ella."
      )
    ).toBeInTheDocument();
    expect(screen.queryByText("Como funciona")).toBeInTheDocument();
    expect(
      screen.queryByText(
        "En primer lugar, debes crear una contraseña diferente para sus pertenecias electrónicas. No podrás recuperar tu contraseña, así que recuerdala bien."
      )
    ).toBeInTheDocument();
    expect(screen.queryByText("Qué datos puedes guardar")).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en lugar seguro."
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Tiene mayoría de edad y acepta que tratemos sus datos según la politica de protección de datos?"
      )
    ).toBeInTheDocument();
  });
  it("Should not be visible next button on load main page", () => {
    expect(screen.queryByText("Siguiente")).not.toBeVisible();
  });
  it("Should be visible next button when click on check input load ", () => {
    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.queryByText("Siguiente")).toBeVisible();
  });
});
