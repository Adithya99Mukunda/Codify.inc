import React from "react";
import { Modal } from "react-bootstrap";

const variantFor = (skill) => {
  const s = skill.toLowerCase();
  if (["react", "react.js", "react.js development"].some(k => s.includes(k))) return "text-bg-info";
  if (["angular"].some(k => s.includes(k))) return "text-bg-danger";
  if (["javascript", "typescript"].some(k => s.includes(k))) return "text-bg-warning text-dark";
  if (["bootstrap", "css", "sass", "tailwind", "ui design", "responsive ui", "responsive design"].some(k => s.includes(k))) return "text-bg-secondary";
  if (["node", "express", "api", "rest", "django"].some(k => s.includes(k))) return "text-bg-success";
  if (["performance", "perf", "optimization"].some(k => s.includes(k))) return "text-bg-dark";
  return "text-bg-primary";
};

const ProjectModal = ({ project, handleClose }) => {
  if (!project) return null;

  return (
    <Modal
      show={!!project}
      onHide={handleClose}
      centered
      size="xl"                      // wider than default
      dialogClassName="project-modal"// tiny polish via CSS below
    >
      <Modal.Header closeButton>
        <Modal.Title className="h5 mb-0">{project.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="mb-1"><strong>Role:</strong> {project.role}</p>
        <p className="text-muted">{project.description}</p>

        <h6 className="fw-bold">Skills Used</h6>
        <div className="d-flex flex-wrap gap-2 mb-3">
          {project.skills.map((s, i) => (
            <span key={i} className={`badge rounded-pill ${variantFor(s)}`}>{s}</span>
          ))}
        </div>

        <h6 className="fw-bold">Key Challenges</h6>
        <ul className="mb-0">
          {project.challenges.map((c, i) => (
            <li key={i} className="text-muted">{c}</li>
          ))}
        </ul>
      </Modal.Body>

      <Modal.Footer className="border-0">
        <button className="btn btn-outline-secondary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
