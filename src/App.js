// eslint-disable-next-line
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.scss";
import MainSteps from "./components/Steps/index";
import MainWizardPages from "./components/WizardPages/index";
/** @jsx jsx */
import { jsx } from "@emotion/core";
const borde = {
  borderStyle: "solid",
};

const containerStyles = {
  marginTop: 20,
};

const App = () => {
  return (
    <Container css={(borde, containerStyles)}>
      <Row>
        <Col css={borde}>
          <MainSteps />
        </Col>
        <Col css={borde} xs={10}>
          <MainWizardPages />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
