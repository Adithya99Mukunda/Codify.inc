import React from "react";
import { Modal, Button } from "react-bootstrap";

const DemoModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <div className="w-100 d-flex justify-content-between align-items-start">
          <div>
            <Modal.Title>Register for Free Demo</Modal.Title>
            <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
              Fill in your details below to reserve your spot for the live
              online demo. We'll send you the meeting link via WhatsApp or
              email.
            </p>
          </div>
          <button
            type="button"
            className="btn-close"
            onClick={handleClose}
          ></button>
        </div>
      </Modal.Header>

      <Modal.Body>
        <form action="https://formspree.io/f/movwqvrr" method="POST">
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" name="name" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number (WhatsApp)</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              required
              maxLength="10"
              inputMode="numeric"
              pattern="\d{10}"
              placeholder="10-digit phone number"
              title="Enter a valid 10-digit number"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
            />
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
