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
    <Row>
      <Col>
        <CancelButton />
      </Col>
      <Col>
        <Row className="justify-content-end">
          <NextButton />
          <SaveButton />
        </Row>
      </Col>
    </Row>
  );
};

export default NavButtons;
