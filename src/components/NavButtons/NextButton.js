// eslint-disable-next-line
import React from "react";
import { Button } from "reactstrap";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const buttonStyles = {
  marginRight: 10,
  marginTop: 10,
};

const NextButton = () => {
  return <Button css={buttonStyles}>Siguiente</Button>;
};

export default NextButton;
