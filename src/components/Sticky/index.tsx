'use client'

import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {InfoCircle} from "@/components/assets/InfoCircle";
import Button from "@/components/Atoms/Button";
import {redirect} from "next/navigation";
import Heading from "@/components/Atoms/Heading";
import SkyOffersModal from "@/components/SkyOffersModal";
import HTMLReactParser from "html-react-parser";

const Sticky = (
    {content } : any
) => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      // <div id="sticky" className="fade-in">
      <div className={`sticky-bar ${scrolled ? "visible" : ""}`}>
        <SkyOffersModal title={content?.info.modal[0].title_modal} body={HTMLReactParser(content?.info.modal[0].content)} setShow={setShow} show={show}/>
        <Container className="py-3 sticky-bar-content">
          <Row>
            <Col className="sticky-left" >
              <p onClick={() => setShow(true)} className={`sticky-title ${content?.title_label.style[0].color === "brand" ? "gradient-primary" : ""}`}>
                {content?.title_label.title}
              </p>
              <p onClick={() => setShow(true)}>
                <span className="sticky-price gradient-primary">{content?.price.value.toLocaleString("it-IT", {minimumFractionDigits: 2})}</span>
                {content?.price.label}
                <InfoCircle variant={"primary"} style={{cursor: "pointer"}} />
              </p>
            </Col>
            <Col className="sticky-right">
              {
                content?.ctas.map((cta: any, index: number) => (
                  <Button
                    key={"sticky_button_" + index}
                    as="button"
                    variant={"btn btn-" + cta.button.variant}
                    onClick={() => redirect(cta.button.link.href)}
                  >{cta.button.label}</Button>
                ))
              }
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Sticky;
