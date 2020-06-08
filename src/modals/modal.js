import React from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import Details from './Details';

class MyVerticallyCenteredModal extends React.Component {

  render() {
    return (
      <div>
        <ModalMaker/>
      </div>
    );
  };
}

function MyVerticallyCenteredModalFunction(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-center"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-center" style={{ color: 'black'}}>
          Covid-19 Detailed Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Details />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalMaker() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button style={{borderRadius: 200, height: 50}} onClick={() => setModalShow(true)} variant="info">More</Button>
      <MyVerticallyCenteredModalFunction
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

export default MyVerticallyCenteredModal;