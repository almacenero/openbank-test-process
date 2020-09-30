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
const MainSteps = () => {
  const { t } = useTranslation();
  const { current, status } = useContext(StepsContext);
  return (
    <Steps
      direction="vertical"
      current={current}
      size="default"
      css={{ height: "100%" }}
      status={status}
    >
      <Step title={t("step.1")} />
      <Step title={t("step.2")} />
      <Step title={t("step.3")} />
    </Steps>
  );
};

export default MainSteps;
