// eslint-disable-next-line
import React from "react";
import { Row, Col } from "reactstrap";
import logo_openbank from "../../assets/img/logo_openbank.png";
import key_openbank from "../../assets/img/key_openbank.png";
/** @jsx jsx */
import { jsx } from "@emotion/core";
const keyOpenbakStyles = {
  height: 45,
  width: 55,
};
const OpenBankLogo = () => {
  return (
    <Col
      xs={8}
      lg={3}
      //css={{ borderStyle: "solid" }}
    >
      <Row className="justify-content-end">
        <img src={logo_openbank} alt={"openbank-logo"} />
        <img src={key_openbank} alt={"openbank-key"} css={keyOpenbakStyles} />
      </Row>
    </Col>
  );
};

export default OpenBankLogo;
