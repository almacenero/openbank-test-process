// eslint-disable-next-line
import React from "react";
import NextButton from "./NextButton";
import { Col, Row } from "reactstrap";
/** @jsx jsx */
import { jsx } from "@emotion/core";

/* const borde = {
  borderStyle: "solid",
}; */

const NavButtons = () => {
  return (
    <Col xs={12}>
      <Row className="justify-content-end">
        <NextButton />
      </Row>
    </Col>
  );
};

export default NavButtons;
