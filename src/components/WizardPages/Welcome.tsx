// eslint-disable-next-line
import React, { useContext } from "react";
import { Row, Col, Label, Input } from "reactstrap";
import head from "./../../assets/img/head.png";
import security from "./../../assets/img/security.png";
import { CheckBoxContext } from "../Context/CheckBoxContext";
import { ButtonsContext } from "../Context/ButtonsContext";
import { StepsContext } from "../Context/StepsContext";
import { useTranslation } from "react-i18next";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const titleStyle = {
  fontSize: 20,
  fontWeight: "bold",
};

const optionStyles = {
  marginTop: 20,
  fontSize: 15,
};

const parraphDescriptionStyles = {
  textAlign: "center",
  fontSize: 15,
};

const politicsAccept = {
  paddingLeft: 18,
  marginTop: 20,
  fontSize: 15,
};

const Welcome = () => {
  const { checked, handleChecked } = useContext(CheckBoxContext);
  const { t } = useTranslation();
  const {
    handleResetCancelButton,
    handlePasswordHiddenSaveButton,
  } = useContext(ButtonsContext);
  const { handleCurrent, handleStatus } = useContext(StepsContext);
  handleResetCancelButton();
  handlePasswordHiddenSaveButton(true);
  handleCurrent(0);
  handleStatus("process");
  return (
    <div>
      <Row css={optionStyles}>
        <Col>
          <Row className="justify-content-center">
            <img src={head} alt={"openbank-head"} />
          </Row>
          <Row className="justify-content-center">
            <Col
              xs={9}
              //@ts-ignore
              css={parraphDescriptionStyles}
            >
              {t("step.1.firtsDescription")}
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-center">
            <img src={security} alt={"openbank-security"} />
          </Row>
          <Row className="justify-content-center">
            <Col
              xs={9}
              //@ts-ignore
              css={parraphDescriptionStyles}
            >
              {t("step.1.secondDescription")}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row css={optionStyles}>
        <Col>
          <div
            //@ts-ignore
            css={titleStyle}
          >
            {t("step.1.howTo.title")}
          </div>
          {t("step.1.howTo.content")}
        </Col>
      </Row>
      <Row css={optionStyles}>
        <Col>
          <div
            //@ts-ignore
            css={titleStyle}
          >
            {t("step.1.dataSave.title")}
          </div>
          {t("step.1.dataSave.content")}
        </Col>
      </Row>
      <Row css={politicsAccept}>
        <Col>
          <Label check>
            <Input
              type="checkbox"
              checked={checked}
              //@ts-ignore
              onChange={handleChecked}
            />{" "}
            {t("step.1.checkText")}
          </Label>
        </Col>
      </Row>
    </div>
  );
};

export default Welcome;
