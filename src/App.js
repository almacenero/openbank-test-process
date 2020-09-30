// eslint-disable-next-line
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.scss";
import MainSteps from "./components/Steps/index";
import MainWizardPages from "./components/WizardPages/index";
import { BrowserRouter as Router } from "react-router-dom";
/** @jsx jsx */
import { jsx } from "@emotion/core";
/* const borde = {
  borderStyle: "solid",
}; */

const containerStyles = {
  marginTop: 20,
};

const App = () => {
  return (
    <Router>
      <Container css={containerStyles}>
        <Row>
          <Col css={{ paddingTop: 75 }}>
            <MainSteps />
          </Col>
          <Col xs={10}>
            <MainWizardPages />
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
