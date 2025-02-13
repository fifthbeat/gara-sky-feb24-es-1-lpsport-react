import {Modal} from "react-bootstrap";
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
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="sky-offers-modal-body">
      {body}
    </Modal.Body>
  </Modal>
};

export default SkyOffersModal;