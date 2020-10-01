// eslint-disable-next-line
import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
//@ts-ignore
import ReactCountryFlag from "react-country-flag";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const Languages = () => {
  const { t, i18n } = useTranslation();
  const [hiddenDE, setHiddenDE] = useState<boolean>(false);
  const [hiddenES, setHiddenES] = useState<boolean>(true);

  const handleChangeLanguaje = (lang: string) => {
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
    <Col
      xs={4}
      lg={3}
      //css={{ borderStyle: "solid" }}
    >
      <Row className="justify-content-end">
        <div
          css={{ paddingTop: 20, paddingRight: 10 }}
          className="d-none d-sm-flex"
        >
          {t("Lang")}:
        </div>
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
  );
};

export default Languages;
