// eslint-disable-next-line
import React from "react";
import { Row, Col } from "reactstrap";
/** @jsx jsx */
import { jsx } from "@emotion/core";

/* const borde = {
  borderStyle: "solid",
}; */

const titleStyle = {
  fontSize: 20,
  fontWeight: "bold",
};

const Welcome = () => {
  return (
    <div>
      <Row>
        <Col>Guarda aqui todas tus contraseñas...</Col>
        <Col>Guarda aqui todas tus contraseñas...</Col>
      </Row>
      <Row>
        <Col>
          <div css={titleStyle}>Como funciona</div>
          In proident id aliqua magna pariatur sit ea qui eu proident. Mollit
          non elit nulla elit pariatur ut non minim. Tempor esse velit proident
          incididunt. Nisi occaecat ullamco labore elit proident ex enim
          occaecat non velit ipsum. Veniam tempor qui veniam exercitation aute
          et tempor nisi excepteur officia cupidatat elit aliqua ea. Nisi est
          fugiat ut ipsum dolor id. In dolore pariatur quis cillum do consequat.
          Mollit aliquip aute aliquip veniam pariatur. Do laboris ipsum ut duis
          laboris exercitation officia laboris velit.
        </Col>
      </Row>
      <Row>
        <Col>
          <div css={titleStyle}>Qué datos puedes guardar</div>
          In proident id aliqua magna pariatur sit ea qui eu proident. Mollit
          non elit nulla elit pariatur ut non minim. Tempor esse velit proident
          incididunt. Nisi occaecat ullamco labore elit proident ex enim
          occaecat non velit ipsum. Veniam tempor qui veniam exercitation aute
          et tempor nisi excepteur officia cupidatat elit aliqua ea. Nisi est
          fugiat ut ipsum dolor id. In dolore pariatur quis cillum do consequat.
          Mollit aliquip aute aliquip veniam pariatur. Do laboris ipsum ut duis
          laboris exercitation officia laboris velit.
        </Col>
      </Row>
    </div>
  );
};

export default Welcome;
