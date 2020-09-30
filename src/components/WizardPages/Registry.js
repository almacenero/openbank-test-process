// eslint-disable-next-line
import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { Input, Tooltip } from "antd";
import { StepsContext } from "./../Context/StepsContext";
import { ButtonsContext } from "./../Context/ButtonsContext";
import { useTranslation } from "react-i18next";
import passwordValidator from "./../../helpers/PasswordValidation";
import StringLengthValidator from "./../../helpers/StringLengthValidator";
import { Icon } from "react-icons-kit";
import { info } from "react-icons-kit/icomoon/info";
import { blocked } from "react-icons-kit/icomoon/blocked";
import { checkmark } from "react-icons-kit/icomoon/checkmark";
/** @jsx jsx */
import { jsx } from "@emotion/core";
/* const borde = {
  borderStyle: "solid",
}; */

const firstParraphStyle = {
  marginTop: 30,
};

const textStyles = {
  marginTop: 20,
  fontSize: 15,
};

const Registry = () => {
  const { handleCurrent, current } = useContext(StepsContext);
  const { handlePasswordHiddenSaveButton } = useContext(ButtonsContext);
  const [password, setPassword] = useState();

  const [infoIcon, setInfoIcon] = useState(true);
  const [warningIcon, setWarningIcon] = useState(false);
  const [succesIcon, setSuccesIcon] = useState(false);
  const [disableInput, setdisableInput] = useState(true);
  const [warningIconRePassword, setWarningIconRePassword] = useState(false);
  const [succesIconRepassword, setSuccesIconRepassword] = useState(false);
  const [track, setTrack] = useState("");
  const { t } = useTranslation();
  useEffect(() => {
    if (current !== 1) {
      handleCurrent(1);
    }
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "password") {
      setInfoIcon(false);
      setWarningIcon(true);
      setSuccesIcon(false);
      setdisableInput(true);
      if (passwordValidator(value)) {
        setWarningIcon(false);
        setSuccesIcon(true);
        setdisableInput(false);
        console.log("ok");
        setPassword(value);
      } else {
        console.log("bad");
      }
    }
    if (name === "repassword") {
      setWarningIconRePassword(true);
      setSuccesIconRepassword(false);
      handlePasswordHiddenSaveButton(true);
      if (value === password) {
        setWarningIconRePassword(false);
        setSuccesIconRepassword(true);
        handlePasswordHiddenSaveButton(false);
      }
    }
    if (name === "track") {
      if (StringLengthValidator(value)) {
        setTrack(value);
      }
    }
  };
  return (
    <div>
      <Row css={(firstParraphStyle, textStyles)}>
        {t("step.2.firtsDescription")}
      </Row>
      <Row css={firstParraphStyle}>
        <Col>
          <div css={textStyles}>{t("step.2.password.label")}</div>
          <Row>
            <Col xs={10}>
              <Input.Password
                onChange={handleChange}
                name="password"
                required
              />
            </Col>
            <Tooltip placement="top" title={t("step.2.tooltip")}>
              <Col>
                {infoIcon && (
                  <Icon size={24} icon={info} css={{ color: "#1890FF" }} />
                )}
                {warningIcon && (
                  <Icon size={24} icon={blocked} css={{ color: "red" }} />
                )}
                {succesIcon && (
                  <Icon size={24} icon={checkmark} css={{ color: "green" }} />
                )}
              </Col>
            </Tooltip>
          </Row>
        </Col>
        <Col>
          <div css={textStyles}>{t("step.2.passwordRetry.label")}</div>
          <Row>
            <Col xs={9}>
              <Input.Password
                onChange={handleChange}
                name="repassword"
                required
                disabled={disableInput}
              />
            </Col>
            <Col>
              {warningIconRePassword && (
                <Icon size={24} icon={blocked} css={{ color: "red" }} />
              )}
              {succesIconRepassword && (
                <Icon size={24} icon={checkmark} css={{ color: "green" }} />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row css={textStyles}>{t("step.2.verification.text")}</Row>
      <Row css={textStyles}>{t("step.2.verification.recordatory")}</Row>
      <Row>
        <Input
          placeholder="Introduce tu pista"
          onChange={handleChange}
          name="track"
          value={track}
        />
      </Row>
      <Row className="justify-content-end">{track.length}/255</Row>
    </div>
  );
};

export default Registry;
