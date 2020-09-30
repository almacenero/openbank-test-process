// eslint-disable-next-line
import React from "react";
import { Row } from "reactstrap";
import { useTranslation } from "react-i18next";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const rowStyle = css({
  "-webkit-box-shadow": "7px 10px 18px -7px rgba(0,0,0,0.75)",
  "-moz-box-shadow": "7px 10px 18px -7px rgba(0,0,0,0.75)",
  "box-shadow": "7px 10px 18px -7px rgba(0,0,0,0.75)",
  backgroundColor: "white",
  borderRadius: 5,
  padding: 5,
  marginBottom: 20,
  marginTop: 50,
  paddingTop: 100,
  paddingBottom: 100,
});

const Success = () => {
  const { t } = useTranslation();

  return (
    <Row css={rowStyle} className="justify-content-center">
      <div css={{ fontFamily: "'Black Ops One', cursive", fontSize: 80 }}>
        OK
      </div>
      <div css={{ paddingTop: 45, paddingLeft: 30 }}>
        {t("step.3.Success.Message")}
      </div>
    </Row>
  );
};

export default Success;
