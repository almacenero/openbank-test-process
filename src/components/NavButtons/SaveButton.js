// eslint-disable-next-line
import React, { useContext } from "react";
import { Button } from "reactstrap";
import { ButtonsContext } from "./../Context/ButtonsContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const buttonStyles = {
  marginRight: 10,
  marginTop: 10,
  backgroundColor: "#ff0049",
  borderColor: "#ff0049",
};

const linkStyles = {
  textDecoration: "none",
};

const SaveButton = () => {
  const { t } = useTranslation();
  const { hiddenSaveButton } = useContext(ButtonsContext);
  return (
    <Link to="/registro" css={linkStyles}>
      <Button css={buttonStyles} hidden={hiddenSaveButton}>
        {t("save.button")}
      </Button>
    </Link>
  );
};

export default SaveButton;