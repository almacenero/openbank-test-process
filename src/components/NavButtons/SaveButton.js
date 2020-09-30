// eslint-disable-next-line
import React, { useContext } from "react";
import { Button } from "reactstrap";
import { ButtonsContext } from "./../Context/ButtonsContext";
import { PasswordContext } from "./../Context/PasswordContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { submitForm } from "./../../services/api";
import {
  useQuery,
  useMutation,
  useQueryCache,
  QueryCache,
  ReactQueryCacheProvider,
} from "react-query";
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
  const [mutate, { status, data, error }] = useMutation(submitForm);
  const { t } = useTranslation();
  const { hiddenSaveButton } = useContext(ButtonsContext);
  const { password, repassword, optionalQuestion } = useContext(
    PasswordContext
  );
  //mutate({ password, repassword, optionalQuestion });
  const handleApi = async (passw, repassw, opQuestion) => {
    mutate({ passw, repassw, opQuestion });
    //const res = await submitForm(passw, repassw, opQuestion);
    //console.log("Respuesta de la api-----", res);
  };
  console.log("comprobando status", status);
  if (status === "loading") return <div>Loading...</div>;
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
