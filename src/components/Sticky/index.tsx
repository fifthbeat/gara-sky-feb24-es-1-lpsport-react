'use client'

import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {InfoCircle} from "@/components/assets/InfoCircle";
import Button from "@/components/Atoms/Button";
import {redirect} from "next/navigation";

const Sticky = () => {
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deleniti et officia reiciendis repellendus. Ad dolorem fugit sunt. Ab aspernatur corporis dignissimos dolore earum eum fugiat magnam magni minus porro.</p>
            </Col>
            <Col className="sticky-right">
              <Button
                  as="button"
                  variant={"btn btn-secondary"}
              >
                click
              </Button>
              <Button
                  as="button"
                  variant={"btn btn-primary"}
              >
                click
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Sticky;
