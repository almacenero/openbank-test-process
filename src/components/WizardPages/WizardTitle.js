// eslint-disable-next-line
import React from "react";
import { Col } from "reactstrap";
import { useTranslation } from "react-i18next";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const MainitleStyle = {
  fontSize: 22,
  fontWeight: "bold",
};

const OpenBankTitle = () => {
  const { t } = useTranslation();
  return (
    <Col>
      <div css={MainitleStyle}>{t("wizard.subtitle")}</div>
    </Col>
  );
};

export default OpenBankTitle;
