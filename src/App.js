// eslint-disable-next-line
import React from "react";
import { Container, Row } from "reactstrap";
import "./App.scss";
import MainSteps from "./components/Steps/index";
/** @jsx jsx */
import { jsx } from "@emotion/core";
const borde = {
  borderStyle: "solid",
};

const App = () => {
  return (
    <Container css={borde}>
      <Row>
        <MainSteps />
      </Row>
    </Container>
  );
};

export default App;
