// src/pages/CourseFullstack9m.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

/* helper components used by the accordion */
function SubtopicAccordion({ id, title, icon, items }) {
  return (
    <div className="accordion-item subtopic-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button subtopic-heading collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
        >
          <i className={`${icon} me-2`}></i>
          {title}
        </button>
      </h2>
      <div id={`collapse-${id}`} className="accordion-collapse collapse">
        <div className="accordion-body p-0">
          <ul className="styled-list">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
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
        >
          {title}
        </button>
      </h2>
      <div id={`collapse-${id}`} className="accordion-collapse collapse">
        <div className="accordion-body p-0">
          <div className="accordion subtopics" id={`subAccordion-${id}`}>
            {topics.map((topic) => (
              <SubtopicAccordion key={topic.id} {...topic} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CourseFullstack9m() {
  return (
    <>
      <Navbar />

      <HeroSection
        title={
          <>
            <span style={{ color: "#000" }}>
              Fullstack Development + Deployment
            </span>
          </>
        }
        subtitle="End-to-end development, cloud deploy and real-world engineering practices — 9 months, project-focused"
      >
        <p className="lead mb-0">
          Build production-grade web apps, own the frontend & backend, and
          deploy to the cloud with CI/CD.
        </p>
      </HeroSection>

      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-8">
              <h1 className="fw-bold">Fullstack Development + Deployment</h1>
              <p className="text-muted">
                Duration: <strong>9 months</strong> • Fee:{" "}
                <strong>₹45,000</strong>
              </p>

              <h4 className="my-4 text-center">What you’ll build</h4>
              <ul className="styled-list">
                <li>
                  Scalable fullstack apps (React frontends + Node.js backends)
                </li>
                <li>RESTful APIs, authentication, and CRUD flows</li>
                <li>Database-backed systems & cloud deployment</li>
                <li>
                  CI/CD pipelines, Docker containers, and production monitoring
                </li>
              </ul>
            </div>

            <aside className="col-lg-4">
              <div className="card p-4 shadow-sm rounded-4">
                <h6 className="mb-2 text-center fw-bold">Course Snapshot</h6>
                <div className="small mb-3">
                  <div>
                    <strong>Duration:</strong> 9 months
                  </div>
                  <div>
                    <strong>Fee:</strong> ₹45,000
                  </div>
                  <div>
                    <strong>Format:</strong> Offline, cohort-based
                  </div>
                </div>

                <h6 className="mb-2 text-center">Skills you'll learn</h6>
                <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                  <span className="badge text-bg-info">React</span>
                  <span className="badge text-bg-success">Node.js</span>
                  <span className="badge text-bg-warning text-dark">
                    JavaScript
                  </span>
                  <span className="badge text-bg-light border">Docker</span>
                  <span className="badge text-bg-light border">MongoDB</span>
                </div>

                <h6 className="mb-2 text-center">Who should join?</h6>
                <p className="small text-muted">
                  College graduates, early-career devs, and career-changers who
                  want an end-to-end engineering skillset.
                </p>
              </div>
            </aside>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h4 className="my-4 text-center">Course Timeline</h4>
              <div className="row g-3 my-3 justify-content-center">
                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-4 rounded-4">
                    <i className="bi bi-palette-fill fs-2 text-primary mb-2"></i>
                    <h6 className="fw-bold mb-1">UX Layer</h6>
                    <p className="small text-muted mb-0">1 month</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-4 rounded-4">
                    <i className="bi bi-filetype-js fs-2 text-warning mb-2"></i>
                    <h6 className="fw-bold mb-1">JavaScript</h6>
                    <p className="small text-muted mb-0">1 month</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-4 rounded-4">
                    <i className="bi bi-server fs-2 text-success mb-2"></i>
                    <h6 className="fw-bold mb-1">Backend</h6>
                    <p className="small text-muted mb-0">2 months</p>
                  </div>
                </div>

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

                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-4 rounded-4">
                    <i className="bi bi-cloud-upload-fill fs-2 text-primary mb-2"></i>
                    <h6 className="fw-bold mb-1">Deployment & DevOps</h6>
                    <p className="small text-muted mb-0">1 month</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-4 rounded-4">
                    <i className="bi bi-briefcase-fill fs-2 text-warning mb-2"></i>
                    <h6 className="fw-bold mb-1">Capstone & Interviews</h6>
                    <p className="small text-muted mb-0">1 month</p>
                  </div>
                </div>
              </div>

              <h4 className="my-4 text-center">Curriculum</h4>
              <div className="mx-auto" style={{ maxWidth: "900px" }}>
                <div className="accordion" id="mainAccordion">
                  {/* UX LAYER */}
                  <div className="accordion-item main-topic mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button main-heading collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#uxCollapse"
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
                          <SubtopicAccordion
                            id="html"
                            title="HTML"
                            icon="bi bi-code-slash text-danger"
                            items={[
                              "Structure & Boilerplate",
                              "Text & Formatting",
                              "Tags Links & Navigation",
                              "Images & Media",
                              "Lists (ul, ol, dl)",
                              "Forms & Input Elements",
                              "Tables",
                              "Semantic Tags",
                              "Inline vs Block Elements",
                              "Entities & Symbols",
                              "HTML Attributes (Global & Specific)",
                              "Accessibility (alt, aria-label)",
                              "Meta Tags & SEO Basics",
                            ]}
                          />

                          <SubtopicAccordion
                            id="css"
                            title="CSS"
                            icon="bi bi-palette-fill text-info"
                            items={[
                              "Introduction & CSS Syntax",
                              "Types of CSS (Inline, Internal, External)",
                              "Selectors (Element, Class, ID, Advanced)",
                              "Color Formats & CSS Units",
                              "Typography & Text Styling",
                              "Box Model",
                              "Display Types (block, inline, inline-block)",
                              "Positioning (`relative`, `absolute`, etc.) & Z-index",
                              "Flexbox",
                              "CSS Grid",
                              "Combinators & Pseudo Selectors",
                              "Transitions, Hover Effects, Animations",
                              "Media Queries & Responsive Design",
                              "Mini Project (Product Card or Layout Page)",
                            ]}
                          />

                          <SubtopicAccordion
                            id="bootstrap"
                            title="Bootstrap"
                            icon="bi bi-bootstrap-fill text-purple"
                            items={[
                              "Bootstrap Introduction & Setup",
                              "Bootstrap Grid System",
                              "Typography & Utility Classes",
                              "Buttons, Alerts, Badges",
                              "Navbar & Navigation Components",
                              "Cards & Layout Components",
                              "Forms & Validation",
                              "Modals, Carousels, Collapse",
                              "Responsive Design with Bootstrap",
                              "Mini Project (Admin Dashboard or Landing Page)",
                            ]}
                          />

                          <SubtopicAccordion
                            id="sass"
                            title="SASS"
                            icon="bi bi-droplet-half text-pink"
                            items={[
                              "What is SASS & Setup",
                              "Variables",
                              "Nesting",
                              "Partials & Imports",
                              "Mixins & Functions",
                              "Extend/Inheritance",
                              "Operators & Conditions",
                              "Compiling SASS to CSS",
                              "Mini Project with SASS",
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* JavaScript */}
                  <SubtopicGroup
                    id="js"
                    title="🧠 Programming Language"
                    topics={[
                      {
                        id: "js-core",
                        title: "JavaScript",
                        icon: "bi bi-filetype-js text-warning",
                        items: [
                          "Introduction to JavaScript",
                          "Variables (`let`, `const`, `var`)",
                          "Data Types & Type Conversion",
                          "Operators & Expressions",
                          "Conditional Statements",
                          "Loops (`for`, `while`, `forEach`)",
                          "Functions (Declaration, Expression, Arrow)",
                          "Arrays & Array Methods",
                          "Objects & Object Methods",
                          "DOM Manipulation",
                          "Events & Event Listeners",
                          "Form Validation Basics",
                          "Local Storage & Session Storage",
                          "ES6 Features (Destructuring, Spread, etc.)",
                          "Promises, Async & Await",
                          "Mini Projects (Todo App, Calculator, etc.)",
                        ],
                      },
                    ]}
                  />

                  {/* Frameworks */}
                  <SubtopicGroup
                    id="frameworks"
                    title="⚙️ Frameworks"
                    topics={[
                      {
                        id: "react-core",
                        title: "React",
                        icon: "bi bi-react text-info",
                        items: [
                          "Introduction to React & Setup (Vite)",
                          "JSX Syntax",
                          "Function Components",
                          "Props & Component Communication",
                          "State Management with `useState()`",
                          "Event Handling",
                          "Conditional Rendering",
                          "Lists & Keys",
                          "Forms (Controlled)",
                          "Hooks: `useEffect`, `useRef`",
                          "Lifting State Up",
                          "Context API",
                          "React Router (`react-router-dom`)",
                          "API Calls using `fetch` or `axios`",
                          "Mini Project (React Todo/Weather/Portfolio)",
                        ],
                      },
                      {
                        id: "node",
                        title: "Node.js",
                        icon: "bi bi-terminal-fill text-success",
                        items: [
                          "Introduction to Node.js",
                          "Setting up a Node.js project",
                          "Working with npm",
                          "File System module",
                          "Event Loop & Async Programming",
                          "Building a simple server",
                        ],
                      },
                      {
                        id: "express",
                        title: "Express.js",
                        icon: "bi bi-diagram-3-fill text-primary",
                        items: [
                          "What is Express & why use it?",
                          "Routing basics",
                          "Middleware in Express",
                          "Handling requests & responses",
                          "Building REST APIs",
                          "Error handling",
                          "Mini Project: Simple API with Express",
                        ],
                      },
                    ]}
                  />

                  {/* Databases */}
                  <SubtopicGroup
                    id="databases"
                    title="🗄️ Databases"
                    topics={[
                      {
                        id: "mongodb",
                        title: "MongoDB",
                        icon: "bi bi-database-fill text-success",
                        items: [
                          "Introduction to NoSQL",
                          "Installing MongoDB / Using Atlas",
                          "CRUD Operations",
                          "Collections & Documents",
                          "Indexes & Query Optimization",
                          "Mongoose ODM Basics",
                          "Connecting MongoDB with Express",
                          "Mini Project: Notes App with MongoDB",
                        ],
                      },
                    ]}
                  />

                  {/* Tools */}
                  <SubtopicGroup
                    id="tools"
                    title="🛠️ Tools"
                    topics={[
                      {
                        id: "devtools",
                        title: "DevTools",
                        icon: "bi bi-terminal text-success",
                        items: [
                          "Inspect Element & Live HTML Editing",
                          "DevTools Interface Overview",
                          "CSS Live Editing & Box Model",
                        ],
                      },
                      {
                        id: "git",
                        title: "Git & GitHub",
                        icon: "bi bi-git text-dark",
                        items: [
                          "What is Git & Version Control",
                          "Installing Git & Basic Setup",
                          "Creating a Local Repo",
                          "Tracking Changes (`add`, `commit`)",
                          "Undoing Changes",
                          "GitHub Account & Remote Setup",
                          "Pushing & Pulling from GitHub",
                          "Cloning a Repository",
                          "Branching & Merging",
                          "Handling Merge Conflicts (Basics)",
                        ],
                      },
                    ]}
                  />

                  {/* DevOps (populated with Docker & Kubernetes) */}
                  <div className="accordion-item main-topic mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button main-heading collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#devopsCollapse"
                      >
                        ☁️ DevOps & Deployment
                      </button>
                    </h2>
                    <div
                      id="devopsCollapse"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body p-0">
                        <ul className="styled-list">
                          <li>
                            Introduction to DevOps principles & CI/CD concepts
                          </li>
                          <li>
                            Containerization with Docker: images, containers,
                            Dockerfile
                          </li>
                          <li>
                            Docker Compose for multi-service local development
                          </li>
                          <li>Container registries and image versioning</li>
                          <li>
                            Orchestration with Kubernetes: pods, services,
                            deployments
                          </li>
                          <li>
                            Basic kubectl, manifests (deployments, services) and
                            config maps
                          </li>
                          <li>
                            Deploying containerized apps to cloud providers
                            (basic)
                          </li>
                          <li>
                            CI/CD pipelines using GitHub Actions (simple
                            workflows)
                          </li>
                          <li>
                            Monitoring basics: logs, healthchecks and simple
                            alerts
                          </li>
                        </ul>
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
                      Production-ready fullstack app & deployed capstone
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-10">
                  <div className="card text-center p-3 h-100">
                    <i className="bi bi-github text-dark fs-4 mb-2"></i>
                    <p className="mb-0 small">
                      Interview-ready GitHub & portfolio
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-10">
                  <div className="card text-center p-3 h-100">
                    <i className="bi bi-person-lines-fill text-success fs-4 mb-2"></i>
                    <p className="mb-0 small">
                      Mock interviews and placement support
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 d-flex justify-content-center gap-2">
                <a className="btn btn-brand" href="https://wa.me/918639460402">
                  Join Free Demo
                </a>
                <Link className="btn btn-outline-dark" to="/contact">
                  Apply Now
                </Link>
                <a
                  className="btn btn-outline-secondary"
                  href="/handouts/fullstack.pdf"
                  download
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
