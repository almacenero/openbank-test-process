// eslint-disable-next-line
import React, { useState, useContext } from "react";
import { Row, Col, Label, Input } from "reactstrap";
import head from "./../../assets/img/head.png";
import security from "./../../assets/img/security.png";
import { CheckBoxContext } from "./../Context/CheckBoxContext";
/** @jsx jsx */
import { jsx } from "@emotion/core";
/* 
const borde = {
  borderStyle: "solid",
}; */

const MainitleStyle = {
  fontSize: 22,
  fontWeight: "bold",
};

const titleStyle = {
  fontSize: 20,
  fontWeight: "bold",
};

const optionStyles = {
  marginTop: 30,
};

const parraphDescriptionStyles = {
  textAlign: "center",
};

const politicsAccept = {
  paddingLeft: 18,
  marginTop: 50,
};

const Welcome = () => {
  const { checked, handleChecked } = useContext(CheckBoxContext);
  return (
    <div>
      <Row>
        <Col>
          <div css={MainitleStyle}>Crea tu password manager</div>
        </Col>
      </Row>
      <Row css={optionStyles}>
        <Col>
          <Row className="justify-content-center">
            <img src={head} alt={"openbank-head"} />
          </Row>
          <Row className="justify-content-center">
            <Col xs={9} css={parraphDescriptionStyles}>
              Guarda aqui todas tus contraseñas, datos o cualquier información,
              olvida las notas de papel y las aplicaiones de papel.
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-center">
            <img src={security} alt={"openbank-security"} />
          </Row>
          <Row className="justify-content-center">
            <Col xs={9} css={parraphDescriptionStyles}>
              Guarda aqui todas tus contraseñas, datos o cualquier información,
              olvida las notas de papel y las aplicaiones de papel.
            </Col>
          </Row>
        </Col>
      </Row>
      <Row css={optionStyles}>
        <Col>
          <div css={titleStyle}>Como funciona</div>
          En primer lugar, debes crear una contraseña diferente para sus
          pertenecias electrónicas. No podrás recuperar tu contraseña, así que
          recuerdala bien.
        </Col>
      </Row>
      <Row css={optionStyles}>
        <Col>
          <div css={titleStyle}>Qué datos puedes guardar</div>
          Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono
          móvil, el número de serie de alguno de tus dispositivos o cualquier
          información que necesites tener en lugar seguro.
        </Col>
      </Row>
      <Row css={politicsAccept}>
        <Col>
          <Label check>
            <Input type="checkbox" checked={checked} onClick={handleChecked} />{" "}
            Tiene mayoría de edad y acepta que tratemos sus datos según la
            politica de protección de datos?
          </Label>
        </Col>
      </Row>
    </div>
  );
};

export default Welcome;
