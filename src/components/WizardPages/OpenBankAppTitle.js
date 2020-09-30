// eslint-disable-next-line
import React from "react";
import { Col } from "reactstrap";
import { useTranslation } from "react-i18next";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const titleStyle = {
  fontSize: 25,
  fontWeight: "bold",
};
const OpenBankTitle = () => {
  const { t } = useTranslation();
  return (
    <Col
      xs={12}
      lg={6}
      //css={{ borderStyle: "solid" }}
    >
      <div css={titleStyle}>{t("wizard.title")}</div>
    </Col>
  );
};

export default OpenBankTitle;
