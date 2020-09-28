// eslint-disable-next-line
import React from "react";
import { Row, Col } from "reactstrap";
import { Form, Input } from "antd";
/** @jsx jsx */
import { jsx } from "@emotion/core";
/* const borde = {
  borderStyle: "solid",
}; */

const firstParraphStyle = {
  marginTop: 30,
};

const Registry = () => {
  return (
    <div>
      <Row css={firstParraphStyle}>
        En primer lugar, debes crear una contraseña diferente para sus
        pertenencias electrónicas. No podrás recuperar tu contraseña, así que
        recuérdala bien
      </Row>
      <Row css={firstParraphStyle}>
        <Col>
          <div>Crea tu contraseña maestra</div>
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
          <div>Repite tu contraseña maestra</div>
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
      <Row>
        También puedes crear una pista que te ayude a recordar tu contraseña
        maestra.
      </Row>
      <Row>Crea tu pista recordar tu contraseña (opcional)</Row>
      <Row>
        <Input placeholder="Introduce tu pista" />
      </Row>
      <Row className="justify-content-end">0/255</Row>
    </div>
  );
};

export default Registry;
