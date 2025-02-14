import Price from "@/components/Atoms/Price";
import Button from "@/components/Atoms/Button";
import Heading from "@/components/Atoms/Heading";
import { redirect } from 'next/navigation'

import React, {type JSX, useState} from "react";
import {InfoCircle} from "@/components/assets/InfoCircle";
import {Col, Container, Row} from "react-bootstrap";
import SkyOffersModal from "@/components/SkyOffersModal";

interface HeroProps {
  badge?: string;
  title: string;
  description: string | JSX.Element | JSX.Element[];
  priceValue: number;
  pricePeriod: string;
  priceNote: string | JSX.Element | JSX.Element[];
  infoLabel: string;
  ctaButtons: any;
  modalTitle: string;
  modalBody: string | JSX.Element | JSX.Element[];
}

const Hero = ({badge, title, description, priceValue, pricePeriod, priceNote,
                infoLabel, ctaButtons, modalBody, modalTitle}: HeroProps) => {
  const [show, setShow] = useState(false);

  return (
      <Container className="hero-container">
        <SkyOffersModal title={modalTitle} body={modalBody} setShow={setShow} show={show}/>
        <Row className="centered">
          <Col className="hero">
            <div className="badge">{badge}</div>
            <Heading as="h1" variant="brand">{title}</Heading>
            <Heading as="h4" variant="dark">{description}</Heading>
            <div className={"hero-price"}>
              <Price
                  price={priceValue.toLocaleString("it-IT", {minimumFractionDigits: 2})}
                  priceCurrency={"€"}
                  pricePeriod={pricePeriod}
                  priceNote={priceNote}
                  variant="primary"
                  withGradient
              />
              <Button
                  as="link"
                  variant="link-primary modal-link"
                  onClick={() => setShow(true)}
              ><div className={"hero-offer-detail link-primary"}>
                {infoLabel}
                <InfoCircle variant={"primary"}/>
              </div></Button>
            </div>
            <div className={"hero-buttons"}>
              {
                ctaButtons?.map((cta: any, index: number) => (
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