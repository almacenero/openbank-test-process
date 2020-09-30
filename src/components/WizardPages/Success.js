// eslint-disable-next-line
import React, { useContext } from "react";
import { Row, Col, Label, Input } from "reactstrap";
import { useTranslation } from "react-i18next";
/** @jsx jsx */
import { jsx } from "@emotion/core";
/* 
const borde = {
  borderStyle: "solid",
}; */

const Success = () => {
  const { t } = useTranslation();
  return <div>Success</div>;
};

export default Success;
