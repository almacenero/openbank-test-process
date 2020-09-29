// eslint-disable-next-line
import React from "react";
import Welcome from "./Welcome";
import Registry from "./Registry";
import NavButtons from "./../NavButtons/index";
import logo_openbank from "../../assets/img/logo_openbank.png";
import key_openbank from "../../assets/img/key_openbank.png";
import { Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const titleStyle = {
  fontSize: 25,
  fontWeight: "bold",
};
const keyOpenbakStyles = {
  height: 45,
  width: 55,
};

const MainitleStyle = {
  fontSize: 22,
  fontWeight: "bold",
};

const MainWizardPages = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Row>
        <Col>
          <div css={titleStyle}>{t("wizard.title")}</div>
        </Col>
        <Col>
          <Row className="justify-content-end">
            <img src={logo_openbank} alt={"openbank-logo"} />
            <img
              src={key_openbank}
              alt={"openbank-key"}
              css={keyOpenbakStyles}
            />
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <div css={MainitleStyle}>{t("wizard.subtitle")}</div>
        </Col>
      </Row>
      <Fade bottom>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/registro" component={Registry} />
        </Switch>
      </Fade>

      <Row>
        <NavButtons />
      </Row>
    </div>
  );
};

export default MainWizardPages;
