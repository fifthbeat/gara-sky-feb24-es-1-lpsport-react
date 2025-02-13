'use client'

import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {InfoCircle} from "@/components/assets/InfoCircle";
import Button from "@/components/Atoms/Button";
import {redirect} from "next/navigation";

const Sticky = (
    {content: any }
) => {
  const [scrolled, setScrolled] = useState(false);

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
        <Container className="py-3 sticky-bar-content">
          <Row>
            <Col className="sticky-left">
              <p className="sticky-title gradient-primary">Sky TV + Sky Sport</p>
              <p><span className="sticky-price gradient-primary">22,80 €</span> al mese per 18 mesi
                <InfoCircle variant={"primary"}/>
              </p>
            </Col>
            <Col className="sticky-right">
              <Button
                  as="button"
                  variant={"btn btn-secondary"}
              >
                Ti chiamiamo noi
              </Button>
              <Button
                  as="button"
                  variant={"btn btn-primary"}
              >
                Completa l'acquisto
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Sticky;
