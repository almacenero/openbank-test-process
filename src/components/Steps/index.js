// eslint-disable-next-line
import React from "react";
import { Steps } from "antd";
//import { Container, Row } from "reactstrap";
/** @jsx jsx */
import { jsx } from "@emotion/core";

/* const borde = {
  borderStyle: "solid",
}; */

const { Step } = Steps;

const MainSteps = () => {
  return (
    <Steps direction="vertical" current={0}>
      <Step title="Bienvenida" description="Pantalla 1" />
      <Step title="Loggin" description="Pantalla 1" />
      <Step title="Finalizado" description="Pantalla 3" />
    </Steps>
  );
};

export default MainSteps;
