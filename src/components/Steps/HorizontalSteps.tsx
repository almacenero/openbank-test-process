// eslint-disable-next-line
import React, { useContext } from "react";
import { Steps } from "antd";
import { StepsContext } from "../Context/StepsContext";
//import { Container, Row } from "reactstrap";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const { Step } = Steps;
const MainHorizontalSteps = () => {
  const { current, status } = useContext(StepsContext);
  return (
    <Steps
      current={current}
      //css={{ height: "100%" }}
      //@ts-ignore
      status={status}
    >
      <Step />
      <Step />
      <Step />
    </Steps>
  );
};

export default MainHorizontalSteps;
