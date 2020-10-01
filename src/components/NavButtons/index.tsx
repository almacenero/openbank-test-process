// eslint-disable-next-line
import React from "react";
import NextButton from "./NextButton";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";
import { Col, Row } from "reactstrap";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const NavButtons = () => {
  return (
    <Row css={{ marginBottom: 30 }}>
      <Col xs={2}>
        <CancelButton />
      </Col>
      <Col xs={10}>
        <Row className="justify-content-end">
          <NextButton />
          <SaveButton />
        </Row>
      </Col>
    </Row>
  );
};

export default NavButtons;
