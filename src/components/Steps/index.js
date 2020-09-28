// eslint-disable-next-line
import React, { useContext } from "react";
import { Steps } from "antd";
import { StepsContext } from "./../Context/StepsContext";
//import { Container, Row } from "reactstrap";
/** @jsx jsx */
import { jsx } from "@emotion/core";

/* const borde = {
  borderStyle: "solid",
}; */

const { Step } = Steps;

const MainSteps = () => {
  const { current } = useContext(StepsContext);
  return (
    <Steps
      direction="vertical"
      current={current}
      size="default"
      css={{ height: "100%" }}
    >
      <Step title="Bienvenid@" />
      <Step title="Loggin" />
      <Step title="Finalizado" />
    </Steps>
  );
};

export default MainSteps;
