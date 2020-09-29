// eslint-disable-next-line
import React, { useContext, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Form, Input } from "antd";
import { StepsContext } from "./../Context/StepsContext";
import { useTranslation } from "react-i18next";
/** @jsx jsx */
import { jsx } from "@emotion/core";
/* const borde = {
  borderStyle: "solid",
}; */

const firstParraphStyle = {
  marginTop: 30,
};

const textStyles = {
  fontSize: 15,
};

const Registry = () => {
  const { handleCurrent, current } = useContext(StepsContext);
  const { t } = useTranslation();
  useEffect(() => {
    if (current !== 1) {
      handleCurrent(1);
    }
  });
  return (
    <div>
      <Row css={(firstParraphStyle, textStyles)}>
        {t("step.2.firtsDescription")}
      </Row>
      <Row css={firstParraphStyle}>
        <Col>
          <div css={textStyles}>{t("step.2.password.label")}</div>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              //onChange={handleChange}
              name="password"
              required
            />
          </Form.Item>
        </Col>
        <Col>
          <div css={textStyles}>{t("step.2.passwordRetry.label")}</div>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              //onChange={handleChange}
              name="password"
              required
              disabled={true}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row css={textStyles}>{t("step.2.verification.text")}</Row>
      <Row css={textStyles}>{t("step.2.verification.recordatory")}</Row>
      <Row>
        <Input placeholder="Introduce tu pista" />
      </Row>
      <Row className="justify-content-end">0/255</Row>
    </div>
  );
};

export default Registry;
