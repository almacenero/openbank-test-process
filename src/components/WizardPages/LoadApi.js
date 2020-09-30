// eslint-disable-next-line
import React, { useContext } from "react";
import { Row, Col, Label, Input } from "reactstrap";
import { useTranslation } from "react-i18next";
import { Spin } from "antd";
/** @jsx jsx */
import { jsx } from "@emotion/core";
/* 
const borde = {
  borderStyle: "solid",
}; */
const SpinSytles = {
  textAlign: "center",
  //background: "rgba(0, 0, 0, 0.05)",
  borderRadius: "4px",
  marginBottom: "20px",
  padding: "200px 400px",
  margin: "20px 0",
};
const LoadApi = () => {
  const { t } = useTranslation();
  return (
    <div css={SpinSytles}>
      <Spin size="large" />
      <div>{t("step.3.LoadResponse")}</div>
    </div>
  );
};

export default LoadApi;
