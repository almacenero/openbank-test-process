// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Welcome from "./Welcome";
import Registry from "./Registry";
import Success from "./Success";
import Languages from "./Languages";
import OpenBankLogo from "./OpenBankLogo";
import OpenBankTitle from "./OpenBankAppTitle";
import MainHorizontalSteps from "../Steps/HorizontalSteps";
import WizardTitle from "./WizardTitle";
import ErrorApi from "./ErrorApi";
import LoadApi from "./LoadApi";
import NavButtons from "../NavButtons/index";
import { Row, Col } from "reactstrap";
//@ts-ignore
import Fade from "react-reveal/Fade";
import { Switch, Route } from "react-router-dom";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const MainWizardPages = () => {
  return (
    <div>
      <Row className="d-none d-sm-flex">
        <OpenBankTitle />
        <Languages />
        <OpenBankLogo />
      </Row>
      <Row className="d-xl-none">
        <OpenBankLogo />
        <Languages />
        <OpenBankTitle />
      </Row>

      <Row css={{ marginTop: 20, marginBottom: 30 }}>
        <Col xs={2} className="d-xl-none">
          <MainHorizontalSteps />
        </Col>
        <Col>
          <WizardTitle />
          <Fade bottom>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/registry" component={Registry} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/error-api" component={ErrorApi} />
              <Route exact path="/load-api" component={LoadApi} />
            </Switch>
          </Fade>
        </Col>
      </Row>
      <NavButtons />
    </div>
  );
};

export default MainWizardPages;
