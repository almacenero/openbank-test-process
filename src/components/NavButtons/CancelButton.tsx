// eslint-disable-next-line
import React, { useContext } from "react";
import { Button } from "reactstrap";
import { ButtonsContext } from "../Context/ButtonsContext";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const CancelButton = () => {
  let history = useHistory();
  const { t } = useTranslation();
  const { hiddenCancelButton } = useContext(ButtonsContext);
  return (
    <Button
      hidden={hiddenCancelButton}
      onClick={() => {
        history.push("/");
      }}
    >
      {history.location.pathname === "/success"
        ? t("cancel.button.home")
        : t("cancel.button")}
    </Button>
  );
};

export default CancelButton;
