import React from "react";
import { Modal, Button } from "react-bootstrap";

const DemoModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Register for Free Demo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          action="https://formspree.io/f/movwqvrr"
          method="POST"
        >
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" name="name" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number (WhatsApp)</label>
            <input type="tel" name="phone" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address (optional)</label>
            <input type="email" name="email" className="form-control" />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="confirmation"
              required
              id="demoConfirm"
            />
            <label className="form-check-label" htmlFor="demoConfirm">
              I understand this is a live online demo and meeting link will be
              sent via WhatsApp or email.
            </label>
          </div>

          <Button type="submit" className="btn btn-primary w-100">
            Submit & Reserve My Spot
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default DemoModal;
