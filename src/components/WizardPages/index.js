// eslint-disable-next-line
import React from "react";
import Welcome from "./Welcome";
import NavButtons from "./../NavButtons/index";
import logo_openbank from "../../assets/img/logo_openbank.png";
import key_openbank from "../../assets/img/key_openbank.png";
import { Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const titleStyle = {
  fontSize: 25,
  fontWeight: "bold",
};
const keyOpenbakStyles = {
  height: 45,
  width: 55,
};

const MainWizardPages = () => {
  return (
    <div>
      <Row>
        <Col>
          <div css={titleStyle}>Cuenta Corriente OpenClose</div>
        </Col>
        <Col>
          <Row className="justify-content-end">
            <img src={logo_openbank} alt={"openbank-logo"} />
            <img
              src={key_openbank}
              alt={"openbank-key"}
              css={keyOpenbakStyles}
            />
          </Row>
        </Col>
      </Row>

      <Fade bottom>
        <Welcome />
      </Fade>
      <Row>
        <NavButtons />
      </Row>
    </div>
  );
};

export default MainWizardPages;
