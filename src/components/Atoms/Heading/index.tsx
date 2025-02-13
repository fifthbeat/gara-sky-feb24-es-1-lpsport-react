import cn from "classnames";
import "./style.css";
import {Col, Container, Row} from "react-bootstrap";

type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  children: any;
  variant?: "brand" | "dark";
  className?: string;
};

const Heading = ({ children, as: Component, variant, className }: Props) => {
  return (
      <Container>
        <Row>
          <Col>
            <Component className={cn("heading", variant, className)}>
              {children}
            </Component>
          </Col>
        </Row>
      </Container>
    )
};

export default Heading;
