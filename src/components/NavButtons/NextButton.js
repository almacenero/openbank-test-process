// eslint-disable-next-line
import React, { useContext } from "react";
import { Button } from "reactstrap";
import { CheckBoxContext } from "./../Context/CheckBoxContext";
import { Link } from "react-router-dom";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const buttonStyles = {
  marginRight: 10,
  marginTop: 10,
};

const linkStyles = {
  textDecoration: "none",
};

const NextButton = () => {
  const { checked } = useContext(CheckBoxContext);
  return (
    <Link to="/registro" css={linkStyles}>
      <Button css={buttonStyles} hidden={!checked}>
        Siguiente
      </Button>
    </Link>
  );
};

export default NextButton;
