// eslint-disable-next-line
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Steps } from "antd";
import { StepsContext } from "./../Context/StepsContext";
//import { Container, Row } from "reactstrap";
/** @jsx jsx */
import { jsx } from "@emotion/core";

/* const borde = {
  borderStyle: "solid",
}; */

const { Step } = Steps;
const MainHorizontalSteps = () => {
  const { t } = useTranslation();
  const { current, status } = useContext(StepsContext);
  return (
    <Steps
      current={current}
      //css={{ height: "100%" }}
      status={status}
    >
      <Step />
      <Step />
      <Step />
    </Steps>
  );
};

export default MainHorizontalSteps;
