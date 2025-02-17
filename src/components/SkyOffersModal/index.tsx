import {Col, Container, Modal, Row} from "react-bootstrap";
import './style.css';

interface SkyOffersModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  title: string;
  body: any;
}

const SkyOffersModal = ({show, setShow, title, body}: SkyOffersModalProps) => {
  return <Modal
    show={show}
    onHide={() => setShow(false)}
    className={"sky-offers-modal"}
    size="xl"
  >
    <Modal.Header closeButton>
      <Container>
        <Row className={"justify-content-center align-items-center"}>
          <Col md={8}>
            <Modal.Title>{title}</Modal.Title>
          </Col>
        </Row>
      </Container>
    </Modal.Header>
    <Modal.Body className="sky-offers-modal-body">
      <Container>
        <Row className={"justify-content-center align-items-center"}>
          <Col md={8} className="sky-offers-modal-body-content">
            {body}
          </Col>
        </Row>
      </Container>
    </Modal.Body>
  </Modal>
};

export default SkyOffersModal;