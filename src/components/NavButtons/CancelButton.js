// eslint-disable-next-line
import React, { useContext } from "react";
import { Button } from "reactstrap";
import { ButtonsContext } from "./../Context/ButtonsContext";
import { StepsContext } from "./../Context/StepsContext";
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

const CancelButton = () => {
  const { t } = useTranslation();
  const {
    hiddenCancelButton,
    handleHiddenCancelButton,
    handleHiddenSaveButton,
  } = useContext(ButtonsContext);
  const { handleCurrent } = useContext(StepsContext);
  return (
    <Link to="/" css={linkStyles}>
      <Button
        css={buttonStyles}
        hidden={hiddenCancelButton}
        onClick={() => {
          handleHiddenCancelButton();
          handleHiddenSaveButton();
          handleCurrent(0);
        }}
      >
        {t("cancel.button")}
      </Button>
    </Link>
  );
};

export default CancelButton;
