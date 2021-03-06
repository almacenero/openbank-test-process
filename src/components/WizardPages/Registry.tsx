// eslint-disable-next-line
import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { Input, Tooltip } from "antd";
import { StepsContext } from "../Context/StepsContext";
import { ButtonsContext } from "../Context/ButtonsContext";
import { PasswordContext } from "../Context/PasswordContext";
import { useTranslation } from "react-i18next";
import passwordValidator from "../../helpers/PasswordValidation";
import StringLengthValidator from "../../helpers/StringLengthValidator";
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
  const {
    handlePassword,
    handleRePassword,
    handleOptionalQuestion,
  } = useContext(PasswordContext);
  const [password, setPassword] = useState<string>();

  const [infoIcon, setInfoIcon] = useState<boolean>(true);
  const [warningIcon, setWarningIcon] = useState<boolean>(false);
  const [succesIcon, setSuccesIcon] = useState<boolean>(false);
  const [disableInput, setdisableInput] = useState<boolean>(true);
  const [warningIconRePassword, setWarningIconRePassword] = useState<boolean>(
    false
  );
  const [succesIconRepassword, setSuccesIconRepassword] = useState<boolean>(
    false
  );
  const [track, setTrack] = useState<string>("");
  const { t } = useTranslation();
  useEffect(() => {
    if (current !== 1) {
      handleCurrent(1);
    }
  });
  const handleChange = (e: { target: { value: any; name: any } }) => {
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
        setPassword(value);
        handlePassword(value);
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
        handleRePassword(password);
      }
    }
    if (name === "track") {
      if (StringLengthValidator(value)) {
        setTrack(value);
        handleOptionalQuestion(value);
      }
    }
  };

  return (
    <div>
      <Row
        //@ts-ignore
        css={(firstParraphStyle, textStyles)}
      >
        {t("step.2.firtsDescription")}
      </Row>
      <Row css={firstParraphStyle}>
        <Col xs={11} lg={6}>
          <div css={textStyles}>{t("step.2.password.label")}</div>
          <Row>
            <Col xs={9}>
              <Input.Password
                onChange={handleChange}
                name="password"
                required
                data-testid="password"
              />
            </Col>
            <Tooltip placement="top" title={t("step.2.tooltip")}>
              <Col>
                {infoIcon && (
                  <Icon
                    size={24}
                    icon={info}
                    css={{ color: "#1890FF" }}
                    data-testid="info"
                  />
                )}
                {warningIcon && (
                  <Icon
                    size={24}
                    icon={blocked}
                    css={{ color: "red" }}
                    data-testid="blocked"
                  />
                )}
                {succesIcon && (
                  <Icon
                    size={24}
                    icon={checkmark}
                    css={{ color: "green" }}
                    data-testid="checkmark"
                  />
                )}
              </Col>
            </Tooltip>
          </Row>
        </Col>
        <Col xs={11} lg={6}>
          <div css={textStyles}>{t("step.2.passwordRetry.label")}</div>
          <Row>
            <Col xs={9}>
              <Input.Password
                onChange={handleChange}
                name="repassword"
                required
                disabled={disableInput}
                data-testid="repassword"
              />
            </Col>
            <Col>
              {warningIconRePassword && (
                <Icon
                  size={24}
                  icon={blocked}
                  css={{ color: "red" }}
                  data-testid="repassword-blocked"
                />
              )}
              {succesIconRepassword && (
                <Icon
                  size={24}
                  icon={checkmark}
                  css={{ color: "green" }}
                  data-testid="repassword-checkmark"
                />
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
          data-testid="taks"
        />
      </Row>
      <Row className="justify-content-end">{track.length}/255</Row>
    </div>
  );
};

export default Registry;
