// src/pages/Roles.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

/**
 * Roles in IT - Educational Industry Overview
 * Layout mirrors original HTML scaffold
 * Later, content for each role will be updated with real project lifecycle explanations.
 */

export default function Roles() {
  const [selectedRole, setSelectedRole] = useState(null);

  const ROLES = [
    {
      id: "business-analyst",
      title: "Business Analyst",
      short: "Bridges business goals with software requirements.",
      icon: "bi-briefcase-fill text-primary",
      skills: ["Requirement Docs", "SQL", "Communication"],
    },
    {
      id: "uiux",
      title: "UI / UX Designer",
      short: "Designs user interfaces and experiences using Figma.",
      icon: "bi-palette-fill text-danger",
      skills: ["Figma", "Prototyping", "User Research"],
    },
    {
      id: "frontend",
      title: "Frontend Developer",
      short: "Implements user-facing parts of websites and apps.",
      icon: "bi-window-split text-warning",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: "backend",
      title: "Backend Developer",
      short: "Handles data, servers, and APIs behind the scenes.",
      icon: "bi-hdd-network text-success",
      skills: ["Node.js", "Databases", "REST APIs"],
    },
    {
      id: "fullstack",
      title: "Fullstack Developer",
      short: "Builds both frontend and backend with deployment.",
      icon: "bi-stack text-info",
      skills: ["React", "Node", "MongoDB", "Deployment"],
    },
    {
      id: "mobile",
      title: "Mobile App Developer",
      short: "Builds cross-platform mobile apps using React Native.",
      icon: "bi-phone-fill text-primary",
      skills: ["React Native", "Expo", "App Publishing"],
    },
    {
      id: "qa",
      title: "QA / Test Engineer",
      short: "Ensures product quality through testing and automation.",
      icon: "bi-bug-fill text-danger",
      skills: ["Testing", "Automation", "Bug Reports"],
    },
    {
      id: "devops",
      title: "DevOps Engineer",
      short: "Manages deployment, CI/CD, and cloud infrastructure.",
      icon: "bi-cloud-upload-fill text-secondary",
      skills: ["Docker", "Kubernetes", "CI/CD"],
    },
    {
      id: "data-analyst",
      title: "Data Analyst",
      short: "Analyzes data to find insights and trends.",
      icon: "bi-bar-chart-line-fill text-primary",
      skills: ["Excel", "SQL", "Data Visualization"],
    },
    {
      id: "data-scientist",
      title: "Data Scientist / ML Engineer",
      short: "Builds predictive models and works with AI systems.",
      icon: "bi-cpu-fill text-warning",
      skills: ["Python", "Machine Learning", "TensorFlow"],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Engineer",
      short: "Secures systems, networks, and applications.",
      icon: "bi-shield-lock-fill text-dark",
      skills: ["Network Security", "Ethical Hacking", "Firewalls"],
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <HeroSection
        title={<span style={{ color: "#000" }}>Roles in Software Industry</span>}
        subtitle="Understand how different roles contribute to real-world software projects — from business to design, development, data, testing, and deployment."
      />

      {/* ROLES GRID */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Explore the Roles</h2>
          <p className="text-muted">
            Discover each role's purpose, responsibilities, and the skills they bring to a project.
          </p>
        </div>

        <div className="row g-4">
          {ROLES.map((role) => (
            <div className="col-md-6 col-lg-4" key={role.id}>
              <div className="card h-100 p-3 shadow-sm border-0 rounded-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="p-3 bg-light rounded-3">
                    <i className={`bi ${role.icon} fs-2`}></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">{role.title}</h5>
                    <p className="small text-muted mb-2">{role.short}</p>
                    <div className="mb-3 d-flex flex-wrap gap-1">
                      {role.skills.map((skill, idx) => (
                        <span key={idx} className="badge bg-light text-dark border">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button
                      className="btn btn-sm btn-outline-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#roleModal"
                      onClick={() => setSelectedRole(role)}
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="container py-5">
        <h4 className="mb-3 fw-bold text-center">How these roles work together</h4>
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead className="table-light">
              <tr>
                <th>Phase</th>
                <th>Roles Involved</th>
                <th>Primary Deliverables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Planning</td>
                <td>Business Analyst, Product Manager</td>
                <td>Requirements, user stories, documentation</td>
              </tr>
              <tr>
                <td>Design</td>
                <td>UI/UX Designer</td>
                <td>Wireframes, prototypes, visual systems</td>
              </tr>
              <tr>
                <td>Development</td>
                <td>Frontend, Backend, Fullstack, Mobile Devs</td>
                <td>Functional software modules</td>
              </tr>
              <tr>
                <td>Testing & QA</td>
                <td>QA Engineer</td>
                <td>Test cases, bug reports, stable builds</td>
              </tr>
              <tr>
                <td>Deployment</td>
                <td>DevOps Engineer</td>
                <td>CI/CD pipelines, monitoring, uptime</td>
              </tr>
              <tr>
                <td>Data & Intelligence</td>
                <td>Data Analyst, Data Scientist</td>
                <td>Reports, insights, ML models</td>
              </tr>
              <tr>
                <td>Security & Maintenance</td>
                <td>Cybersecurity Engineer</td>
                <td>Vulnerability testing, patching, audits</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="container py-5">
        <h4 className="fw-bold text-center mb-3">Frequently Asked Questions</h4>
        <div className="accordion" id="faq">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#f1"
              >
                Do all projects involve all these roles?
              </button>
            </h2>
            <div id="f1" className="accordion-collapse collapse" data-bs-parent="#faq">
              <div className="accordion-body text-muted">
                Not always. Smaller startups may combine roles, while larger companies have specialized people for each phase.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#f2"
              >
                Which role should I choose as a beginner?
              </button>
            </h2>
            <div id="f2" className="accordion-collapse collapse" data-bs-parent="#faq">
              <div className="accordion-body text-muted">
                Start with roles that match your strengths — visual thinkers often like Frontend or Design, logical thinkers may prefer Backend or Data roles.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <div className="modal fade" id="roleModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content rounded-4">
            <div className="modal-body p-4">
              {selectedRole ? (
                <>
                  <h4 className="fw-bold">{selectedRole.title}</h4>
                  <p className="text-muted mb-3">{selectedRole.short}</p>
                  <div className="mb-3">
                    <strong>Key Skills:</strong>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {selectedRole.skills.map((skill, i) => (
                        <span key={i} className="badge bg-light text-dark border">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="btn btn-outline-dark" data-bs-dismiss="modal">
                    Close
                  </button>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
