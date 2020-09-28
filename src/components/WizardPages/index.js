// eslint-disable-next-line
import React from "react";
import Welcome from "./Welcome";
//import { Container, Row } from "reactstrap";
/** @jsx jsx */
import { jsx } from "@emotion/core";

/* const borde = {
  borderStyle: "solid",
}; */
const titleStyle = {
  fontSize: 25,
  fontWeight: "bold",
};

const MainWizardPages = () => {
  return (
    <div>
      <div css={titleStyle}>Crea tu password manager</div>
      <Welcome />
    </div>
  );
};

export default MainWizardPages;
