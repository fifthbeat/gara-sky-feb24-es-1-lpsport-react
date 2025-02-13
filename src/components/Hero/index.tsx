import Price from "@/components/Atoms/Price";
import Button from "@/components/Atoms/Button";
import Heading from "@/components/Atoms/Heading";
import { redirect } from 'next/navigation'
import HTMLReactParser from "html-react-parser";

import React from "react";
import {InfoCircle} from "@/components/assets/InfoCircle";
import {Col, Container, Row} from "react-bootstrap";

const Hero = ({content}: any) => {
  if (!content)
    return <></>
  return (
      <Container className="hero-container">
        <Row className="centered">
          <Col className="hero">
            <Heading as="h1" variant="brand">{content?.group[0].title.title}</Heading>
            <Heading as="h4" variant="dark">{HTMLReactParser(content?.group[0].description[0].content)}</Heading>
            <div className={"hero-price"}>
              <Price
                  price={content?.price.value.toLocaleString("it-IT", {minimumFractionDigits: 2})}
                  priceCurrency={"€"}
                  pricePeriod={content?.price.label}
                  priceNote={HTMLReactParser(content?.price.info)}
                  variant="primary"
                  withGradient
              />
              <Button
                  as="link"
                  variant="link-primary"
              ><div className={"hero-offer-detail link-primary"}>
                {content?.info.label}
                <InfoCircle variant={"primary"}/>
              </div></Button>
            </div>
            <div className={"hero-buttons"}>
              {
                content?.ctas.map((cta: any, index: number) => (
                    <Button
                        key={"hero_button_" + index}
                        as="button"
                        variant={"btn btn-" + cta.button.variant}
                        onClick={() => redirect(cta.button.link.href)}
                    >{cta.button.label}</Button>
                ))
              }
            </div>
          </Col>
        </Row>
      </Container>
  )
};

export default Hero;