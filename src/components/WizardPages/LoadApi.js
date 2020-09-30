// eslint-disable-next-line
import React from "react";
import { Row, Col } from "reactstrap";
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
  borderRadius: "4px",
  marginBottom: "20px",
  padding: "100px 0px 0px 0px",
  margin: "20px 0",
};
const LoadApi = () => {
  const { t } = useTranslation();
  return (
    <Col>
      <div css={SpinSytles}>
        <Spin size="large" />
      </div>

      <Row
        className="justify-content-center"
        css={{ marginTop: 40, color: "#ff0049" }}
      >
        {t("step.3.LoadResponse")}
      </Row>
    </Col>
  );
};

export default LoadApi;
