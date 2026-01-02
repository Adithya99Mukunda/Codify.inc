// src/pages/Roles.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const ROLE_DATA = [
  {
    id: "business-analyst",
    title: "Business Analyst",
    short: "Bridges business goals with software requirements.",
    description: [
      "Business Analysts (BAs) translate stakeholder needs into clear, testable requirements for engineering teams.",
      "They work closely with product, design and engineering to ensure the solution meets business objectives and user needs.",
      "BAs help clarify scope, acceptance criteria and run validation sessions during development.",
    ],
    responsibilities: [
      "Gather and document business requirements and user stories",
      "Run stakeholder interviews and discovery workshops",
      "Create acceptance criteria and validate deliverables",
      "Map user journeys and identify edge cases",
      "Prioritise features with product & engineering teams",
      "Produce requirement docs, process flows and mockups",
      "Help in UAT (user acceptance testing) and sign-offs",
      "Translate ambiguous requests into actionable tasks",
    ],
    skills: [
      "Requirement Docs",
      "SQL",
      "Excel",
      "Wireframing",
      "Communication",
      "User Stories",
    ],
    icon: "bi-briefcase-fill text-primary",
  },

  {
    id: "product-manager",
    title: "Product Manager",
    short: "Defines product vision, priorities and roadmap.",
    description: [
      "Product Managers own the product strategy, user outcomes and the roadmap.",
      "They decide what gets built (and why), coordinate stakeholders, and measure whether the product meets business goals.",
      "PMs balance user empathy, business metrics and engineering constraints.",
    ],
    responsibilities: [
      "Define product vision and measurable goals (OKRs/KPIs)",
      "Prioritise backlog and create roadmaps",
      "Write clear product specs and success metrics",
      "Coordinate between design, engineering & business",
      "Run experiments and analyze metrics",
      "Conduct user research and feedback sessions",
      "Support go-to-market & launch activities",
      "Make trade-offs between speed, scope and quality",
    ],
    skills: [
      "Roadmapping",
      "Prioritisation",
      "A/B Testing",
      "Stakeholder Mgmt",
      "Analytics",
      "Notion/Jira",
    ],
  },

  {
    id: "uiux",
    title: "UI / UX Designer",
    short: "Designs user interfaces, flows and prototypes.",
    description: [
      "UI/UX Designers turn product problems into usable, delightful interfaces.",
      "They run research, create wireframes and high-fidelity prototypes and validate designs with real users.",
      "Good designers balance aesthetics, accessibility and performance.",
    ],
    responsibilities: [
      "Run user research and interviews",
      "Create wireframes, flows and prototypes in Figma",
      "Design component libraries and visual systems",
      "Conduct usability testing and iterate",
      "Prepare handoff docs and redlines for developers",
      "Advocate accessibility and inclusive design",
      "Work with PMs to translate insights into features",
      "Participate in design reviews and feedback cycles",
    ],
    skills: [
      "Figma",
      "Prototyping",
      "User Research",
      "Accessibility",
      "Design Systems",
    ],
    icon: "bi-palette-fill text-danger",
  },

  {
    id: "frontend",
    title: "Frontend Developer",
    short: "Implements user-facing interfaces and interactions.",
    description: [
      "Frontend Engineers build the client-side experience: layout, interactivity and responsive behaviour.",
      "They work with designers and backend teams to implement fast, accessible and maintainable UI.",
      "Frontenders are expected to ship polished interfaces and optimize for performance.",
    ],
    responsibilities: [
      "Translate designs into responsive, accessible HTML/CSS",
      "Implement interactive behaviour with JavaScript/TypeScript",
      "Build component-based UIs using modern frameworks",
      "Optimize performance (loading, rendering, memory)",
      "Write unit & integration tests for components",
      "Collaborate with backend for API contracts",
      "Ensure cross-browser and mobile compatibility",
      "Participate in code reviews and maintain docs",
    ],
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "Sass",
      "JavaScript",
      "Angular",
      "React",
      "TypeScript",
    ],
    icon: "bi-window-split text-warning",
  },

  {
    id: "backend",
    title: "Backend Developer",
    short: "Builds servers, APIs and data services.",
    description: [
      "Backend Engineers design and implement the server-side logic, APIs and data layers that power applications.",
      "They focus on reliability, scalability, data integrity and security.",
      "Backends often integrate with databases, caches and external services.",
    ],
    responsibilities: [
      "Design and implement REST/GraphQL APIs",
      "Model and manage databases and data migrations",
      "Implement authentication, authorization and security controls",
      "Optimize performance and database queries",
      "Write tests for API contracts and business logic",
      "Design for scalability and fault-tolerance",
      "Collaborate with frontend on API contracts",
      "Monitor and troubleshoot production issues",
    ],
    // grouped stacks for clarity per your example
    skills: [
      "JavaScript: Express, Node.js",
      "Python: Django, Flask",
      "Java: Spring, Spring Boot",
      "Databases: Postgres, MongoDB",
      "REST / GraphQL",
      "Auth & Security",
    ],
    icon: "bi-hdd-network text-success",
  },

  {
    id: "fullstack",
    title: "Fullstack Developer",
    short: "Owns features end-to-end: frontend to backend.",
    description: [
      "Fullstack Developers combine frontend and backend skills to deliver complete features.",
      "They move across the stack to reduce handoffs, speed up delivery and own deployments.",
      "Strong fullstack devs know tradeoffs and where to prioritize effort.",
    ],
    responsibilities: [
      "Implement end-to-end features across frontend & backend",
      "Design APIs and connect them to UI components",
      "Write integration tests and end-to-end pipelines",
      "Participate in architecture and design discussions",
      "Deploy services and troubleshoot full-stack issues",
      "Help mentor team members and review code",
      "Improve observability and logging for features",
      "Balance UX, performance and maintainability",
    ],
    skills: ["React", "Node.js", "Express", "Databases", "Deployment", "CI/CD"],
    icon: "bi-stack text-info",
  },

  {
    id: "mobile",
    title: "Mobile App Developer",
    short: "Builds native-feeling apps (React Native / Expo).",
    description: [
      "Mobile Developers create cross-platform apps using React Native or native toolchains.",
      "They handle mobile-specific concerns like gestures, offline storage and app publishing.",
      "Testing on devices, performance tuning and store submissions are part of the job.",
    ],
    responsibilities: [
      "Build cross-platform UI with React Native / Expo",
      "Integrate with native modules and device APIs",
      "Handle offline data and synchronization",
      "Manage app lifecycle and performance",
      "Run device testing and fix platform-specific bugs",
      "Prepare app-signing and store submissions",
      "Implement analytics and crash reporting",
      "Collaborate with backend for mobile-optimized APIs",
    ],
    skills: [
      "React Native",
      "Expo",
      "Android Studio",
      "Xcode",
      "Device APIs",
      "App Publishing",
    ],
  },

  {
    id: "data-analyst",
    title: "Data Analyst",
    short: "Turns raw data into reports and actionable insights.",
    description: [
      "Data Analysts wrangle and visualize data to answer product and business questions.",
      "They prepare dashboards, run ad-hoc analyses and equip teams with insights to make decisions.",
      "This role is heavy on SQL, spreadsheets and visualization tools.",
    ],
    responsibilities: [
      "Write SQL queries to extract and transform data",
      "Build dashboards and reports (Looker/Tableau/Metabase)",
      "Run A/B analysis and support experiments",
      "Clean and validate datasets for reliability",
      "Collaborate with PMs to define metrics",
      "Provide data-driven recommendations",
      "Automate routine reports and alerts",
      "Document datasets and definitions",
    ],
    skills: [
      "SQL",
      "Excel",
      "Data Visualization",
      "Python (pandas)",
      "BI Tools",
    ],
    icon: "bi-bar-chart-line-fill text-primary",
  },

  {
    id: "data-scientist",
    title: "Data Scientist / ML Engineer",
    short: "Builds predictive models and applies ML to product problems.",
    description: [
      "Data Scientists design, train and deploy machine learning models to power features and insights.",
      "They bridge data engineering and product to create models that are reliable, monitored and maintainable.",
      "Model evaluation, feature engineering and production deployment are key responsibilities.",
    ],
    responsibilities: [
      "Define ML problem and success metrics",
      "Collect and preprocess feature data",
      "Train and validate models (classification/regression/etc.)",
      "Perform feature engineering and selection",
      "Deploy models and implement monitoring",
      "Collaborate with engineering to productionize models",
      "Perform error analysis and iterate models",
      "Document model decisions and data lineage",
    ],
    skills: [
      "Python",
      "scikit-learn",
      "TensorFlow/PyTorch",
      "Feature Engineering",
      "MLOps",
      "Data Pipelines",
    ],
  },

  {
    id: "qa",
    title: "QA / Test Engineer",
    short: "Ensures product quality through manual & automated testing.",
    description: [
      "QA Engineers design test plans, write automated tests and ensure shipping quality.",
      "They find edge cases, build regression suites and collaborate with devs to prevent bugs at source.",
      "Automation and CI integration are critical for fast delivery pipelines.",
    ],
    responsibilities: [
      "Design test plans and test cases",
      "Write automated E2E tests (Playwright/Selenium)",
      "Run manual exploratory testing for edge cases",
      "Report, triage and follow up on bugs",
      "Integrate tests into CI pipelines",
      "Maintain test environments and fixtures",
      "Measure and reduce flaky tests",
      "Collaborate on quality-focused design decisions",
    ],
    skills: ["Playwright", "Selenium", "Jest", "Test Plans", "CI/CD"],
  },

  {
    id: "devops",
    title: "DevOps / SRE Engineer",
    short: "Automates deployments, infra and reliability.",
    description: [
      "DevOps / SREs build CI/CD, manage infrastructure, and ensure production reliability.",
      "They automate deployments, design monitoring and run incident response practices.",
      "Strong knowledge of containers and orchestration is required.",
    ],
    responsibilities: [
      "Design and operate CI/CD pipelines",
      "Containerize apps using Docker",
      "Orchestrate services with Kubernetes",
      "Set up monitoring, alerting and dashboards",
      "Implement infrastructure-as-code (Terraform/CloudFormation)",
      "Capacity planning and performance tuning",
      "Run postmortems and improve reliability",
      "Manage secrets and secure deployments",
    ],
    skills: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
  },

  {
    id: "cybersecurity",
    title: "Cybersecurity Engineer",
    short: "Protects systems and data from threats.",
    description: [
      "Cybersecurity Engineers secure applications, networks and infrastructure through risk assessment and controls.",
      "They run vulnerability assessments, manage incident response and implement secure development practices.",
      "Security is integrated across design, development and operations.",
    ],
    responsibilities: [
      "Perform vulnerability scanning and penetration testing",
      "Design secure architecture and access controls",
      "Establish monitoring and incident response plans",
      "Work with dev teams to secure code and dependencies",
      "Run threat modelling and risk assessments",
      "Manage secrets, keys and IAM policies",
      "Support audits and compliance efforts",
      "Provide security training and best practices",
    ],
    skills: [
      "Ethical Hacking",
      "Network Security",
      "IAM",
      "Web App Security",
      "SIEM",
    ],
  },
];

// map skill text to bootstrap badge class for colorful labels
function badgeClassForSkill(skill) {
  const s = (skill || "").toLowerCase();
  if (
    s.includes("react") ||
    s.includes("figma") ||
    s.includes("expo") ||
    s.includes("ui")
  )
    return "badge bg-info text-dark";
  if (
    s.includes("node") ||
    s.includes("docker") ||
    s.includes("server") ||
    s.includes("kubernetes")
  )
    return "badge bg-success text-dark";
  if (
    s.includes("python") ||
    s.includes("django") ||
    s.includes("flask") ||
    s.includes("ml") ||
    s.includes("tensorflow")
  )
    return "badge bg-warning text-dark";
  if (s.includes("java") || s.includes("spring"))
    return "badge bg-primary text-white";
  if (
    s.includes("sql") ||
    s.includes("database") ||
    s.includes("postgres") ||
    s.includes("mongo")
  )
    return "badge bg-secondary text-white";
  if (
    s.includes("testing") ||
    s.includes("playwright") ||
    s.includes("selenium") ||
    s.includes("jest")
  )
    return "badge bg-danger text-white";
  if (s.includes("security") || s.includes("ethical"))
    return "badge bg-dark text-white";
  // default / neutral
  return "badge bg-light text-dark border";
}

export default function Roles() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Navbar />

      <HeroSection
        title={
          <span style={{ color: "#000" }}>Roles in Software Industry</span>
        }
        subtitle="A practical walkthrough of roles in a product lifecycle — who does what, responsibilities, and the skills you'll need."
      >
        <p className="lead mb-0">
          Designed for college students and early-career learners — understand
          the flow from idea to production and where you might fit.
        </p>
      </HeroSection>

      <section className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">
            Explore the roles — follow a project lifecycle
          </h2>
          <p className="text-muted">
            Cards are grouped roughly in lifecycle order: planning → design →
            build → test → deploy → secure → maintain.
          </p>
        </div>

        <div className="row g-4">
          {ROLE_DATA.map((role) => (
            <div className="col-12 col-md-6 col-lg-4" key={role.id}>
              <article className="card p-3 shadow-sm border-0 rounded-4 h-100">
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="bg-white rounded-3 p-3 shadow-sm"
                    style={{ minWidth: 64 }}
                  >
                    {/* simple icon placeholder: use bootstrap icons classes in CSS-like text */}
                    <i className={`fs-3 ${role.icon}`}></i>

                    {/* note: icons are decorative; keep them if your icons set available */}
                  </div>

                  <div className="flex-grow-1">
                    <h5 className="mb-1">{role.title}</h5>
                    <p className="small text-muted mb-2">{role.short}</p>

                    <div className="mb-3 d-flex flex-wrap gap-2">
                      {role.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={badgeClassForSkill(skill)}
                          style={{
                            fontSize: ".78rem",
                            padding: ".35rem .55rem",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-sm btn-outline-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#roleModal"
                        onClick={() => setSelected(role)}
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-4">
        <h4 className="mb-3 fw-bold text-center">
          How roles collaborate — quick table
        </h4>
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
                <td>Requirements, user stories, roadmap</td>
              </tr>
              <tr>
                <td>Design</td>
                <td>UI/UX Designer</td>
                <td>Prototypes, visual system, accessibility</td>
              </tr>
              <tr>
                <td>Development</td>
                <td>Frontend, Backend, Fullstack, Mobile</td>
                <td>Functional features, APIs, data services</td>
              </tr>
              <tr>
                <td>Testing</td>
                <td>QA Engineer</td>
                <td>Test suites, bug reports, regression checks</td>
              </tr>
              <tr>
                <td>Deployment</td>
                <td>DevOps / SRE</td>
                <td>CI/CD pipelines, infra, monitoring</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data Analyst, Data Scientist</td>
                <td>Reports, insights, ML models</td>
              </tr>
              <tr>
                <td>Security</td>
                <td>Cybersecurity Engineer</td>
                <td>Vulnerability tests, audits, policies</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container py-4">
        <div className="card p-4 shadow-sm rounded-4 mb-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h5 className="mb-1">Career pathway — from idea to hire</h5>
              <p className="small text-muted mb-0">
                Bootcamp → Projects → Interview Prep → Placement. If you’re
                unsure where to start, book a free mentor call.
              </p>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <a
                href="https://wa.me/918639460402"
                className="btn btn-brand btn-lg"
              >
                Book free mentor call
              </a>
            </div>
          </div>
        </div>

        <h4 className="fw-bold text-center mb-3">Frequently Asked Questions</h4>
        <div className="accordion" id="faq">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                Do I need to be good at math to work in software?
              </button>
            </h2>
            <div
              id="faq1"
              className="accordion-collapse collapse"
              data-bs-parent="#faq"
            >
              <div className="accordion-body text-muted">
                Not necessarily. Roles like frontend, UI/UX, QA and product
                focus more on logic, design and communication. Data roles and
                some backend roles use more maths—those can be learned
                step-by-step.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
                Which role is easiest to start with?
              </button>
            </h2>
            <div
              id="faq2"
              className="accordion-collapse collapse"
              data-bs-parent="#faq"
            >
              <div className="accordion-body text-muted">
                Frontend and UI/UX are often friendly starting points for
                visually-minded students. Fullstack and backend require more
                systemic thinking but are very rewarding.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <div
        className="modal fade"
        id="roleModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content rounded-4">
            <div className="modal-body p-4">
              {selected ? (
                <>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h4 className="fw-bold mb-1">{selected.title}</h4>
                      <p className="text-muted mb-0">{selected.short}</p>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                  </div>

                  <div className="mb-3">
                    {selected.description.map((line, idx) => (
                      <p className="small text-muted mb-1" key={idx}>
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="mb-3">
                    <strong>Responsibilities</strong>
                    <ul className="mt-2">
                      {selected.responsibilities.map((r, i) => (
                        <li key={i} className="small text-muted">
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3">
                    <strong>Skills & Tools</strong>
                    <div className="mt-2 d-flex flex-wrap gap-2">
                      {selected.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`${badgeClassForSkill(skill)}`}
                          style={{
                            fontSize: ".78rem",
                            padding: ".35rem .55rem",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex  gap-2">
                    <button
                      className="btn btn-outline-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
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
