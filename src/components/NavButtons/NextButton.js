// eslint-disable-next-line
import React, { useContext } from "react";
import { Button } from "reactstrap";
import { CheckBoxContext } from "./../Context/CheckBoxContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const { checked } = useContext(CheckBoxContext);
  return (
    <Link to="/registro" css={linkStyles}>
      <Button css={buttonStyles} hidden={!checked}>
        {t("next.button")}
      </Button>
    </Link>
  );
};

export default NextButton;
