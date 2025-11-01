// src/pages/CourseFrontend.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function CourseFrontend() {
  return (
    <>
      <Navbar />

      <HeroSection
        title={
          <>
            <span style={{ color: "#000" }}>Frontend Development</span>
          </>
        }
        subtitle="HTML • CSS • JavaScript • React — Project-based, offline in Khammam"
      >
        <p className="lead mb-0">
          A 3-month intensive course designed to take you from beginner to
          job-ready frontend developer with hands-on projects and real-world
          skills.
        </p>
      </HeroSection>

      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-8">
              <h1 className="fw-bold">
                Frontend Development (HTML, CSS, JS, React)
              </h1>
              <p className="text-muted">
                Duration: <strong>3 months</strong> • Fee:{" "}
                <strong>₹20,000</strong>
              </p>

              <h4 className="my-4 text-center">What you’ll build</h4>
              <ul className="styled-list">
                <li>
                  Responsive websites and UIs using HTML & CSS (Flexbox & Grid)
                </li>
                <li>
                  Interactive apps with JavaScript (ES6+) and DOM manipulation
                </li>
                <li>Modern React apps with state, routing and APIs</li>
                <li>Deploy projects to GitHub Pages / Netlify</li>
              </ul>
            </div>

            <aside className="col-lg-4">
              <div
                className="card p-4 shadow-sm border-0 rounded-4"
                style={{
                  background: "linear-gradient(180deg,#ffffff,#f8f9fb)",
                }}
              >
                <h6 className="mb-2 text-center fw-bold">Course Snapshot</h6>
                <div className="small mb-3">
                  <div>
                    <strong>Duration:</strong> 3 months
                  </div>
                  <div>
                    <strong>Fee:</strong> ₹20,000
                  </div>
                  <div>
                    <strong>Format:</strong> Offline, cohort-based
                  </div>
                </div>

                <h6 className="mb-2 text-center">Skills you'll learn</h6>
                <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                  <span className="badge text-bg-info">HTML</span>
                  <span className="badge text-bg-primary">CSS</span>
                  <span className="badge text-bg-warning text-dark">
                    JavaScript
                  </span>
                  <span className="badge text-bg-info">React</span>
                  <span className="badge text-bg-light border">Bootstrap</span>
                </div>

                <h6 className="mb-2 text-center">Who should join?</h6>
                <p className="small text-muted text-center">
                  Beginners, college students, or professionals who want to
                  master frontend development with hands-on projects.
                </p>
              </div>
            </aside>
            <div className="row">
              <div className="col-lg-12">
                <h4 className="my-4 text-center">Course Timeline</h4>
                <div className="row g-3 my-4 justify-content-center">
                  {/* UX Layer */}
                  <div className="col-6 col-md-3">
                    <div className="timeline-card h-100 text-center p-4 rounded-4">
                      <i className="bi bi-palette-fill fs-2 text-primary mb-2"></i>
                      <h6 className="fw-bold mb-1">UX Layer</h6>
                      <p className="small text-muted mb-0">1 month</p>
                    </div>
                  </div>

                  {/* JavaScript */}
                  <div className="col-6 col-md-3">
                    <div className="timeline-card h-100 text-center p-4 rounded-4">
                      <i className="bi bi-filetype-js fs-2 text-warning mb-2"></i>
                      <h6 className="fw-bold mb-1">JavaScript</h6>
                      <p className="small text-muted mb-0">25 days</p>
                    </div>
                  </div>

                  {/* React */}
                  <div className="col-6 col-md-3">
                    <div className="timeline-card h-100 text-center p-4 rounded-4">
                      <i
                        className="fs-2 mb-2"
                        style={{
                          display: "inline-block",
                          width: "32px",
                          height: "32px",
                          backgroundImage:
                            "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg')",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></i>

                      <h6 className="fw-bold mb-1">React</h6>
                      <p className="small text-muted mb-0">3 months</p>
                    </div>
                  </div>

                  {/* Interview Prep */}
                  <div className="col-6 col-md-3">
                    <div className="timeline-card h-100 text-center p-4 rounded-4">
                      <i className="bi bi-person-badge-fill fs-2 text-danger mb-2"></i>
                      <h6 className="fw-bold mb-1">Interview Prep</h6>
                      <p className="small text-muted mb-0">10 days</p>
                    </div>
                  </div>
                </div>

                <h4 className="my-4 text-center">Curriculum</h4>
                <div className="mx-auto" style={{ maxWidth: "900px" }}>
                  <div className="accordion" id="curriculumAccordion">
                    {/* UX Layer */}
                    <div className="accordion-item main-topic mb-3">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button main-heading collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#uxCollapse"
                          aria-expanded="false"
                        >
                          <i className="bi bi-palette me-2 text-primary-emphasis"></i>{" "}
                          The UX Layer
                        </button>
                      </h2>
                      <div
                        id="uxCollapse"
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body p-0">
                          <div className="accordion subtopics" id="uxSubtopics">
                            {/* HTML */}
                            <div className="accordion-item subtopic-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button subtopic-heading collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapse-html"
                                >
                                  <i className="bi bi-code-slash me-2 text-danger"></i>{" "}
                                  HTML
                                </button>
                              </h2>
                              <div
                                id="collapse-html"
                                className="accordion-collapse collapse"
                              >
                                <div className="accordion-body p-0">
                                  <ul className="styled-list">
                                    <li>Structure & Boilerplate</li>
                                    <li>Text, Links & Navigation</li>
                                    <li>Images & Media</li>
                                    <li>Forms & Input Elements</li>
                                    <li>
                                      Semantic Tags & Accessibility basics
                                    </li>
                                    <li>Meta tags & SEO basics</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* CSS */}
                            <div className="accordion-item subtopic-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button subtopic-heading collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapse-css"
                                >
                                  <i className="bi bi-palette-fill me-2 text-info"></i>{" "}
                                  CSS
                                </button>
                              </h2>
                              <div
                                id="collapse-css"
                                className="accordion-collapse collapse"
                              >
                                <div className="accordion-body p-0">
                                  <ul className="styled-list">
                                    <li>Box model, selectors & specificity</li>
                                    <li>Flexbox & CSS Grid</li>
                                    <li>Typography & responsive layouts</li>
                                    <li>
                                      Transitions, animations & hover states
                                    </li>
                                    <li>Media queries & mobile-first design</li>
                                    <li>
                                      Mini project: responsive product card
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Bootstrap */}
                            <div className="accordion-item subtopic-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button subtopic-heading collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapse-bootstrap"
                                >
                                  <i className="bi bi-bootstrap-fill me-2 text-purple"></i>{" "}
                                  Bootstrap
                                </button>
                              </h2>
                              <div
                                id="collapse-bootstrap"
                                className="accordion-collapse collapse"
                              >
                                <div className="accordion-body p-0">
                                  <ul className="styled-list">
                                    <li>Grid system & responsive utilities</li>
                                    <li>Components: Navbar, Cards, Modals</li>
                                    <li>Forms & validation</li>
                                    <li>
                                      Mini project: Admin dashboard or landing
                                      page
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* SASS */}
                            <div className="accordion-item subtopic-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button subtopic-heading collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapse-sass"
                                >
                                  <i className="bi bi-droplet-half me-2 text-pink"></i>{" "}
                                  SASS
                                </button>
                              </h2>
                              <div
                                id="collapse-sass"
                                className="accordion-collapse collapse"
                              >
                                <div className="accordion-body p-0">
                                  <ul className="styled-list">
                                    <li>Variables, nesting & partials</li>
                                    <li>Mixins & functions</li>
                                    <li>Organizing styles & compiling</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* JavaScript */}
                    <div className="accordion-item main-topic mb-3">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button main-heading collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#jsCollapse"
                          aria-expanded="false"
                        >
                          🧠 Programming Language — JavaScript
                        </button>
                      </h2>
                      <div
                        id="jsCollapse"
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body p-0">
                          <ul className="styled-list">
                            <li>Variables, Data Types & Operators</li>
                            <li>Functions, Scope & Closures</li>
                            <li>Arrays, Objects & Array methods</li>
                            <li>DOM Manipulation & Events</li>
                            <li>Fetch API, Promises & async/await</li>
                            <li>
                              ES6+ features (destructuring, spread, modules)
                            </li>
                            <li>Mini projects: Todo app, small widgets</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Frameworks — React only */}
                    <div className="accordion-item main-topic mb-3">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button main-heading collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#frameworksCollapse"
                          aria-expanded="false"
                        >
                          ⚙️ Libraries & Frameworks
                        </button>
                      </h2>
                      <div
                        id="frameworksCollapse"
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body p-0">
                          <div
                            className="accordion subtopics"
                            id="reactSubtopics"
                          >
                            <div className="accordion-item subtopic-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button subtopic-heading collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapse-react"
                                >
                                  <i className="bi bi-react me-2 text-info"></i>{" "}
                                  React
                                </button>
                              </h2>
                              <div
                                id="collapse-react"
                                className="accordion-collapse collapse"
                              >
                                <div className="accordion-body p-0">
                                  <ul className="styled-list">
                                    <li>JSX, components & props</li>
                                    <li>
                                      State & hooks (`useState`, `useEffect`)
                                    </li>
                                    <li>Routing with `react-router-dom`</li>
                                    <li>API integration and side-effects</li>
                                    <li>
                                      Project sprints & component patterns
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="accordion-item main-topic mb-3">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button main-heading collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#toolsCollapse"
                          aria-expanded="false"
                        >
                          🛠️ Tools
                        </button>
                      </h2>
                      <div
                        id="toolsCollapse"
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body p-0">
                          <div className="accordion subtopics" id="toolsSub">
                            <div className="accordion-item subtopic-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button subtopic-heading collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapse-devtools"
                                >
                                  <i className="bi bi-terminal me-2 text-success"></i>{" "}
                                  DevTools
                                </button>
                              </h2>
                              <div
                                id="collapse-devtools"
                                className="accordion-collapse collapse"
                              >
                                <div className="accordion-body p-0">
                                  <ul className="styled-list">
                                    <li>Inspect element & live editing</li>
                                    <li>Network & performance basics</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="accordion-item subtopic-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button subtopic-heading collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapse-git"
                                >
                                  <i className="bi bi-git me-2 text-dark"></i>{" "}
                                  Git & GitHub
                                </button>
                              </h2>
                              <div
                                id="collapse-git"
                                className="accordion-collapse collapse"
                              >
                                <div className="accordion-body p-0">
                                  <ul className="styled-list">
                                    <li>
                                      Version control basics (add, commit, push)
                                    </li>
                                    <li>Branching & merging basics</li>
                                    <li>Using GitHub & deploying projects</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Career Prep */}
                    <div className="accordion-item main-topic mb-3">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button main-heading collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#careerCollapse"
                        >
                          <i className="bi bi-bullseye me-2 text-danger"></i>{" "}
                          Career Prep
                        </button>
                      </h2>
                      <div
                        id="careerCollapse"
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body p-0">
                          <ul className="styled-list">
                            <li>LinkedIn Profile Build</li>
                            <li>Portfolio Build</li>
                            <li>Resume Build</li>
                            <li>Interview Prep</li>
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
                      <i className="bi bi-briefcase-fill text-primary fs-4 mb-2"></i>
                      <p className="mb-0 small">
                        3+ portfolio projects (responsive & React)
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-10">
                    <div className="card text-center p-3 h-100">
                      <i className="bi bi-github text-dark fs-4 mb-2"></i>
                      <p className="mb-0 small">
                        GitHub profile ready for recruiters
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-10">
                    <div className="card text-center p-3 h-100">
                      <i className="bi bi-person-lines-fill text-danger fs-4 mb-2"></i>
                      <p className="mb-0 small">
                        Mock interviews and resume review
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 d-flex justify-content-center gap-2">
                  <a
                    className="btn btn-brand"
                    href="https://wa.me/918639460402"
                  >
                    Join Free Demo
                  </a>
                  <Link className="btn btn-outline-dark" to="/contact">
                    Apply Now
                  </Link>
                  <a
                    className="btn btn-outline-secondary"
                    href="/handouts/frontend.pdf"
                    download
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
