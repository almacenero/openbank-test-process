// eslint-disable-next-line
import React, { useContext, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Form, Input } from "antd";
import { StepsContext } from "./../Context/StepsContext";
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
  useEffect(() => {
    if (current !== 1) {
      handleCurrent(1);
    }
  });
  return (
    <div>
      <Row css={(firstParraphStyle, textStyles)}>
        En primer lugar, debes crear una contraseña diferente para sus
        pertenencias electrónicas. No podrás recuperar tu contraseña, así que
        recuérdala bien
      </Row>
      <Row css={firstParraphStyle}>
        <Col>
          <div css={textStyles}>Crea tu contraseña maestra</div>
          <Form.Item
            //label="Contraseña"
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
          <div css={textStyles}>Repite tu contraseña maestra</div>
          <Form.Item
            //label="Contraseña"
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
      <Row css={textStyles}>
        También puedes crear una pista que te ayude a recordar tu contraseña
        maestra.
      </Row>
      <Row css={textStyles}>
        Crea tu pista recordar tu contraseña (opcional)
      </Row>
      <Row>
        <Input placeholder="Introduce tu pista" />
      </Row>
      <Row className="justify-content-end">0/255</Row>
    </div>
  );
};

export default Registry;
