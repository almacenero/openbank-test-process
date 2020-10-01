// eslint-disable-next-line
import React, { useContext } from "react";
import { Button } from "reactstrap";
import { CheckBoxContext } from "../Context/CheckBoxContext";
import { ButtonsContext } from "../Context/ButtonsContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const buttonStyles = {
  backgroundColor: "#ff0049",
  borderColor: "#ff0049",
};

const linkStyles = {
  textDecoration: "none",
};

const NextButton = () => {
  const { t } = useTranslation();
  const { checked, handleChecked } = useContext(CheckBoxContext);
  const { handleHiddenCancelButton } = useContext(ButtonsContext);

  return (
    <Link to="/registry" css={linkStyles}>
      <Button
        css={buttonStyles}
        hidden={!checked}
        onClick={() => {
          handleHiddenCancelButton();
          handleChecked();
        }}
      >
        {t("next.button")}
      </Button>
    </Link>
  );
};

export default NextButton;
