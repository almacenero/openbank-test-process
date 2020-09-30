// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Welcome from "./Welcome";
import Registry from "./Registry";
import NavButtons from "./../NavButtons/index";
import logo_openbank from "../../assets/img/logo_openbank.png";
import key_openbank from "../../assets/img/key_openbank.png";
import { Row, Col, button, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
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
  const { t, i18n } = useTranslation();
  const [hiddenDE, setHiddenDE] = useState(false);
  const [hiddenES, setHiddenES] = useState(true);

  const handleChangeLanguaje = (lang) => {
    if (lang === "ES") {
      i18n.changeLanguage("es");
      setHiddenDE(false);
      setHiddenES(true);
    }
    if (lang === "DE") {
      i18n.changeLanguage("de");
      setHiddenDE(true);
      setHiddenES(false);
    }
  };
  return (
    <div>
      <Row>
        <Col xs={6}>
          <div css={titleStyle}>{t("wizard.title")}</div>
        </Col>
        <Col>
          <Row className="justify-content-end">
            <div css={{ paddingTop: 20, paddingRight: 10 }}>{t("Lang")}:</div>
            <ReactCountryFlag
              data-testid="Flag-ES"
              hidden={hiddenES}
              onClick={() => handleChangeLanguaje("ES")}
              className="emojiFlag"
              countryCode="ES"
              style={{
                fontSize: "2em",
                lineHeight: "2em",
                cursor: "pointer",
              }}
              css={{ fontSize: "2em", lineHeight: "2em" }}
              aria-label="Alemania"
            />
            <ReactCountryFlag
              data-testid="Flag-DE"
              hidden={hiddenDE}
              onClick={() => handleChangeLanguaje("DE")}
              className="emojiFlag"
              countryCode="DE"
              style={{
                fontSize: "2em",
                lineHeight: "2em",
                cursor: "pointer",
              }}
              aria-label="Alemania"
            />
          </Row>
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

      <NavButtons />
    </div>
  );
};

export default MainWizardPages;
