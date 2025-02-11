import Accordion from 'react-bootstrap/Accordion';
import {CSSProperties, ReactNode} from "react";

interface SkyAccordionProps {
  key?: string;
  header: string | ReactNode;
  body: string | ReactNode;
  style?: CSSProperties;
}

export const SkyAccordion = ({key = "0", header, body, style}: SkyAccordionProps) => {
  return (
    <Accordion className="sky-accordion" style={style}>
      <Accordion.Item eventKey={key}>
        <Accordion.Header className="sky-accordion-header">{header}</Accordion.Header>
        <Accordion.Body className="sky-accordion-body">
          {body}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
};

export default SkyAccordion;
