// eslint-disable-next-line
import React, { useContext } from "react";
import { Button } from "reactstrap";
import { CheckBoxContext } from "./../Context/CheckBoxContext";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const buttonStyles = {
  marginRight: 10,
  marginTop: 10,
};

const NextButton = () => {
  const { checked } = useContext(CheckBoxContext);
  return (
    <Button css={buttonStyles} hidden={!checked}>
      Siguiente
    </Button>
  );
};

export default NextButton;
