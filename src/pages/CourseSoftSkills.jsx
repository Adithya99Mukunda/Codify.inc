// src/pages/CourseSoftSkills.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

/* small helpers used by the accordion */
function SubtopicAccordion({ id, title, icon, items }) {
  return (
    <div className="accordion-item subtopic-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button subtopic-heading collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded="false"
        >
          {icon && <i className={`${icon} me-2`}></i>}
          {title}
        </button>
      </h2>
      <div id={`collapse-${id}`} className="accordion-collapse collapse">
        <div className="accordion-body p-0">
          <ul className="styled-list">
            {items.map((it, idx) => (
              <li key={idx}>{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SubtopicGroup({ id, title, topics }) {
  return (
    <div className="accordion-item main-topic mb-3">
      <h2 className="accordion-header">
        <button
          className="accordion-button main-heading collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded="false"
        >
          {title}
        </button>
      </h2>
      <div id={`collapse-${id}`} className="accordion-collapse collapse">
        <div className="accordion-body p-0">
          <div className="accordion subtopics" id={`subAccordion-${id}`}>
            {topics.map((t) => (
              <SubtopicAccordion key={t.id} {...t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CourseSoftSkills() {
  return (
    <>
      <Navbar />

      <HeroSection
        title={<><span style={{ color: "#000000" }}>Soft Skills & Interview Behaviour</span></>}
        subtitle="Communication, presentation, and placement readiness — live practice and feedback (1 month)"
      >
        <p className="lead mb-0">
          Real, practice-first sessions: mock HR rounds, body language, resume & LinkedIn polish.
        </p>
      </HeroSection>

      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-8">
              <h1 className="fw-bold">Soft Skills & Interview Behaviour</h1>
              <p className="text-muted">
                Duration: <strong>1 month</strong> • Fee: <strong>₹5,000</strong>
              </p>

              <h4 className="my-4 text-center">What you’ll learn</h4>
              <ul className="styled-list">
                <li>Effective verbal communication & clarity of thought</li>
                <li>Presentation skills, slide hygiene and storytelling</li>
                <li>Resume & LinkedIn optimisation for tech roles</li>
                <li>Behavioral interview frameworks (STAR) & mock HR rounds</li>
                <li>Group exercises, feedback loops and confidence building</li>
              </ul>

              
            </div>

            <aside className="col-lg-4">
              <div className="card p-4 shadow-sm border-0 rounded-4" style={{ background: "linear-gradient(180deg,#ffffff,#f8f9fb)" }}>
                <h6 className="mb-2 text-center fw-bold">Course Snapshot</h6>
                <div className="small mb-3">
                  <div><strong>Duration:</strong> 1 month</div>
                  <div><strong>Fee:</strong> ₹5,000</div>
                  <div><strong>Format:</strong> Live sessions & practice</div>
                </div>

                <h6 className="mb-2 text-center">Skills you'll learn</h6>
                <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                  <span className="badge text-bg-info">Communication</span>
                  <span className="badge text-bg-warning text-dark">Presentation</span>
                  <span className="badge text-bg-light border">Resume</span>
                  <span className="badge text-bg-light border">Interview</span>
                </div>

                <h6 className="mb-2 text-center">Who should join?</h6>
                <p className="small text-muted text-center">
                  Students, freshers and professionals seeking better interview outcomes and communication skills.
                </p>
              </div>
            </aside>
          </div>
          <div className="row">
            <div className="col-lg-12">
<h4 className="my-4 text-center">Course Timeline</h4>
              <div className="row g-3 my-3 justify-content-center">
                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-3 rounded-4">
                    <i className="bi bi-chat-dots fs-2 text-primary mb-2"></i>
                    <h6 className="fw-bold mb-1">Communication</h6>
                    <p className="small text-muted mb-0">1 week</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-3 rounded-4">
                    <i className="bi bi-easel fs-2 text-info mb-2"></i>
                    <h6 className="fw-bold mb-1">Presentation</h6>
                    <p className="small text-muted mb-0">1 week</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-3 rounded-4">
                    <i className="bi bi-file-earmark-text fs-2 text-warning mb-2"></i>
                    <h6 className="fw-bold mb-1">Resume & LinkedIn</h6>
                    <p className="small text-muted mb-0">1 week</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-3 rounded-4">
                    <i className="bi bi-people-fill fs-2 text-success mb-2"></i>
                    <h6 className="fw-bold mb-1">Mock Rounds</h6>
                    <p className="small text-muted mb-0">1 week</p>
                  </div>
                </div>
              </div>

              <h4 className="my-4 text-center">Curriculum</h4>
              <div className="mx-auto" style={{ maxWidth: "900px" }}>
                <div className="accordion" id="softskillsAccordion">
                  <SubtopicGroup
                    id="communication"
                    title="💬 Communication & Clarity"
                    topics={[
                      {
                        id: "verbal",
                        title: "Verbal Communication",
                        icon: "bi bi-mic",
                        items: [
                          "Structuring thoughts and concise answers",
                          "Tone, pace, and clarity",
                          "Active listening & question handling",
                        ],
                      },
                      {
                        id: "nonverbal",
                        title: "Non-verbal Communication",
                        icon: "bi bi-person",
                        items: [
                          "Body language basics",
                          "Eye contact, posture and gestures",
                          "Managing nervousness and micro-expressions",
                        ],
                      },
                    ]}
                  />

                

                  <SubtopicGroup
                    id="resume"
                    title="📄 Resume & LinkedIn"
                    topics={[
                      {
                        id: "resume-build",
                        title: "Resume Crafting",
                        icon: "bi bi-list-check",
                        items: [
                          "Impact-focused bullet points",
                          "Formatting for recruiters and ATS",
                          "Project descriptions & metrics",
                        ],
                      },
                      {
                        id: "linkedin",
                        title: "LinkedIn Optimisation",
                        icon: "bi bi-link-45deg",
                        items: [
                          "Headline, summary and featured projects",
                          "Building network and outreach templates",
                          "Using LinkedIn for job hunting",
                        ],
                      },
                    ]}
                  />

                  <SubtopicGroup
                    id="interview"
                    title="🧑‍💼 Mock Interviews & Behaviour"
                    topics={[
                      {
                        id: "behavioral",
                        title: "Behavioral Interviews",
                        icon: "bi bi-chat-left-text",
                        items: [
                          "STAR framework and structuring answers",
                          "Handling strength/weakness and gaps",
                          "Simulated HR rounds with feedback",
                        ],
                      },
                      {
                        id: "technical-behavior",
                        title: "Technical Interview Behaviour",
                        icon: "bi bi-code-slash",
                        items: [
                          "Explaining code and tradeoffs",
                          "Communicating during pair-programming",
                          "Time management in live coding",
                        ],
                      },
                    ]}
                  />

                  <div className="accordion-item main-topic mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button main-heading collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#groupCollapse"
                      >
                        🤝 Group Exercises & Feedback
                      </button>
                    </h2>
                    <div id="groupCollapse" className="accordion-collapse collapse">
                      <div className="accordion-body p-0">
                        <ul className="styled-list">
                          <li>Peer-to-peer presentations and critique</li>
                          <li>Group problem-solving and leadership roles</li>
                          <li>Feedback loops and actionable improvement points</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="my-4 text-center">Outcomes</h4>
              <div className="row g-3 justify-content-center my-4">
                <div className="col-md-3 col-10">
                  <div className="card text-center p-3 h-100">
                    <i className="bi bi-chat-dots text-primary fs-4 mb-2"></i>
                    <p className="mb-0 small">Confident verbal & non-verbal communication</p>
                  </div>
                </div>
                <div className="col-md-3 col-10">
                  <div className="card text-center p-3 h-100">
                    <i className="bi bi-award text-dark fs-4 mb-2"></i>
                    <p className="mb-0 small">Polished resume & LinkedIn profile</p>
                  </div>
                </div>
                <div className="col-md-3 col-10">
                  <div className="card text-center p-3 h-100">
                    <i className="bi bi-people-fill text-success fs-4 mb-2"></i>
                    <p className="mb-0 small">Mock interview readiness</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 d-flex justify-content-center gap-2">
                <a className="btn btn-brand" href="https://wa.me/918639460402">Join Free Demo</a>
                <Link className="btn btn-outline-dark" to="/contact">Apply Now</Link>
                <a className="btn btn-outline-secondary" href="/handouts/softskills.pdf" download>Download PDF</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
