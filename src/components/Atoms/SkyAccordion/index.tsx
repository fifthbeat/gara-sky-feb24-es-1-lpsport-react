"use client"

import {CSSProperties, ReactNode} from "react";
import { Accordion } from "react-bootstrap";

interface SkyAccordionProps {
  eventKey?: string;
  header: string | ReactNode;
  body: string | ReactNode;
  style?: CSSProperties;
}

export const SkyAccordion = ({eventKey = "0", header, body, style}: SkyAccordionProps) => {
  return (
    <Accordion className="sky-accordion" style={style}>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header className="sky-accordion-header">{header}</Accordion.Header>
        <Accordion.Body className="sky-accordion-body">
          {body}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
};

export default SkyAccordion;
