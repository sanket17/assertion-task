import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";

export default function ModalComponent({ toggleModal, setToggleModal, data }) {
  return (
    <Modal
      show={toggleModal}
      onHide={() => setToggleModal(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h5>Summary</h5>
        </Modal.Title>
        <button
          type="button"
          className="btn btn-default close"
          onClick={() => setToggleModal(false)}
        >
          {" "}
          <span aria-hidden="true">&times;</span>
        </button>
      </Modal.Header>
      <Modal.Body className="modal-body">
        {data.length !== 0 ? (
          <div className="mb-3">
            <h5>Application: </h5> {data[0]}
            <h5>Scan Id: </h5> {data[1]}
            <h5>When: </h5> {data[2]}
            <h5>Risk Score: </h5> {`${data[3]}%`}
          </div>
        ) : (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-secondary pull-right"
          onClick={() => setToggleModal(false)}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

ModalComponent.prototype = {
  toggleModal: PropTypes.bool.isRequired,
  setToggleModal: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.any),
};

ModalComponent.defaultProps = {
  data: [],
};
