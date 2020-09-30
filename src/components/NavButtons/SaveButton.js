// eslint-disable-next-line
import React, { useContext } from "react";
import { Button } from "reactstrap";
import { ButtonsContext } from "./../Context/ButtonsContext";
import { PasswordContext } from "./../Context/PasswordContext";
import { StepsContext } from "./../Context/StepsContext";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { submitForm } from "./../../services/api";

import { useMutation } from "react-query";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const buttonStyles = {
  backgroundColor: "#ff0049",
  borderColor: "#ff0049",
};

const linkStyles = {
  textDecoration: "none",
};

const SaveButton = () => {
  let history = useHistory();
  const [mutate, { status, data, error, reset }] = useMutation(submitForm);
  const { t } = useTranslation();
  const {
    handleDisableSaveButton,
    handleEnabledCancelButton,
    hiddenSaveButton,
  } = useContext(ButtonsContext);
  const { password, repassword, optionalQuestion } = useContext(
    PasswordContext
  );
  const { handleCurrent, handleStatus } = useContext(StepsContext);
  const handleApi = async (passw, repassw, opQuestion) => {
    mutate({ passw, repassw, opQuestion });
  };

  if (status === "loading") {
    history.push("/load-api");
    handleDisableSaveButton();
  }
  if (status !== "loading" && data) {
    handleCurrent(2);
    handleStatus("finish");
    handleDisableSaveButton();
    handleEnabledCancelButton();
    history.push("/success");
    reset();
  }

  if (status !== "loading" && error) {
    handleCurrent(2);
    handleStatus("finish");
    handleDisableSaveButton();
    handleEnabledCancelButton();
    history.push("/error-api");
    reset();
  }
  return (
    <Link to="/registro" css={linkStyles}>
      <Button
        css={buttonStyles}
        hidden={hiddenSaveButton}
        onClick={() => {
          handleApi(password, repassword, optionalQuestion);
        }}
      >
        {t("save.button")}
      </Button>
    </Link>
  );
};

export default SaveButton;
