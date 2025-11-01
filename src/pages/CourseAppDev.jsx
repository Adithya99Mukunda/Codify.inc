// src/pages/CourseAppDev.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

/* --- small helpers used by the accordion --- */
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

/* --- App Development (React Native) page --- */
export default function CourseAppDev() {
  return (
    <>
      <Navbar />

      <HeroSection
        title={<><span style={{ color: "#000" }}>App Development — React Native</span></>}
        subtitle="Cross-platform mobile apps with React Native & Expo — practical, offline cohorts in Khammam"
      >
        <p className="lead mb-0">
          Build native-feeling Android & iOS apps using React Native — UI, device APIs, state management and publishing to app stores.
        </p>
      </HeroSection>

      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-8">
              <h1 className="fw-bold">App Development (React Native)</h1>
              <p className="text-muted">
                Duration: <strong>3 months</strong> • Fee: <strong>₹25,000</strong>
              </p>

              <h4 className="my-4 text-center">What you’ll learn</h4>
              <ul className="styled-list">
                <li>React Native fundamentals and component model</li>
                <li>Building responsive mobile UIs with Flexbox & gestures</li>
                <li>State management (Context, Redux) and offline data</li>
                <li>Accessing device features: camera, location, sensors, storage</li>
                <li>Testing, debugging, performance profiling, and publishing apps</li>
              </ul>
            </div>

            <aside className="col-lg-4">
              <div className="card p-4 shadow-sm border-0 rounded-4" style={{ background: "linear-gradient(180deg,#ffffff,#f8f9fb)" }}>
                <h6 className="mb-2 text-center fw-bold">Course Snapshot</h6>
                <div className="small mb-3">
                  <div><strong>Duration:</strong> 3 months</div>
                  <div><strong>Fee:</strong> ₹25,000</div>
                  <div><strong>Format:</strong> Offline, cohort-based</div>
                </div>

                <h6 className="mb-2 text-center">Skills you'll learn</h6>
                <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                  <span className="badge text-bg-info">React Native</span>
                  <span className="badge text-bg-warning text-dark">JavaScript</span>
                  <span className="badge text-bg-light border">Expo</span>
                  <span className="badge text-bg-light border">Navigation</span>
                  <span className="badge text-bg-light border">App Publishing</span>
                </div>

                <h6 className="mb-2 text-center">Who should join?</h6>
                <p className="small text-muted text-center">
                  Frontend devs, mobile enthusiasts, and career-changers who want to build native apps quickly with React Native.
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
                    <i className="bi bi-phone-fill fs-2 text-primary mb-2"></i>
                    <h6 className="fw-bold mb-1">RN Basics</h6>
                    <p className="small text-muted mb-0">3 weeks</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-4 rounded-4">
                    <i className="bi bi-layout-text-sidebar-reverse fs-2 text-info mb-2"></i>
                    <h6 className="fw-bold mb-1">UI & Navigation</h6>
                    <p className="small text-muted mb-0">3 weeks</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-4 rounded-4">
                    <i className="bi bi-stack fs-2 text-warning mb-2"></i>
                    <h6 className="fw-bold mb-1">State & Data</h6>
                    <p className="small text-muted mb-0">3 weeks</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-4 rounded-4">
                    <i className="bi bi-cloud-upload-fill fs-2 text-success mb-2"></i>
                    <h6 className="fw-bold mb-1">Native APIs & Deployment</h6>
                    <p className="small text-muted mb-0">3 weeks</p>
                  </div>
                </div>
              </div>

              <h4 className="my-4 text-center">Curriculum</h4>
              <div className="mx-auto" style={{ maxWidth: "900px" }}>
                <div className="accordion" id="appDevAccordion">
                  {/* JS & React refresher */}
                  <SubtopicGroup
                    id="jsreact"
                    title="🧠 JS & React Refresher"
                    topics={[
                      {
                        id: "js-essentials",
                        title: "JavaScript Essentials",
                        icon: "bi bi-filetype-js text-warning",
                        items: [
                          "ES6+ features, async/await, modules",
                          "Promises and fetch patterns for APIs",
                          "Performance basics and memory considerations",
                        ],
                      },
                      {
                        id: "react-ref",
                        title: "React Patterns (hooks)",
                        icon: "bi bi-react text-info",
                        items: [
                          "Functional components, hooks (`useState`, `useEffect`)",
                          "Context API and composition patterns",
                          "Reusing logic with custom hooks",
                        ],
                      },
                    ]}
                  />

                  {/* React Native basics */}
                  <SubtopicGroup
                    id="rn-basics"
                    title="📱 React Native Basics"
                    topics={[
                      {
                        id: "setup-expo",
                        title: "Setup & Expo vs CLI",
                        icon: "bi bi-box-seam text-secondary",
                        items: [
                          "Expo managed workflow vs bare workflow",
                          "Project structure and hot reloading",
                          "Working with TypeScript (optional) in RN",
                        ],
                      },
                      {
                        id: "components",
                        title: "Core Components",
                        icon: "bi bi-grid-3x3-gap-fill text-secondary",
                        items: [
                          "View/Text/Image/TextInput/ScrollView/FlatList",
                          "Touchable components and accessibility",
                          "Layout with Flexbox (mobile-first)",
                        ],
                      },
                    ]}
                  />

                  {/* UI & Navigation */}
                  <SubtopicGroup
                    id="ui-nav"
                    title="🎨 UI, Styling & Navigation"
                    topics={[
                      {
                        id: "styling",
                        title: "Styling & Gestures",
                        icon: "bi bi-brush text-info",
                        items: [
                          "StyleSheets, responsive sizing, adaptive UI",
                          "Gesture handling & animations (Reanimated / Gesture Handler)",
                        ],
                      },
                      {
                        id: "navigation",
                        title: "Navigation",
                        icon: "bi bi-compass text-info",
                        items: [
                          "react-navigation: stack, tabs, drawers",
                          "Deep linking & passing params",
                          "Navigation patterns & performance tips",
                        ],
                      },
                    ]}
                  />

                  {/* State & Data */}
                  <SubtopicGroup
                    id="state-data"
                    title="🧩 State Management & Offline Data"
                    topics={[
                      {
                        id: "state",
                        title: "State Patterns",
                        icon: "bi bi-stack text-warning",
                        items: [
                          "Context vs Redux vs Zustand (tradeoffs)",
                          "Local storage with AsyncStorage / MMKV",
                          "Data caching & optimistic updates",
                        ],
                      },
                      {
                        id: "apis",
                        title: "APIs & Data",
                        icon: "bi bi-cloud-download text-secondary",
                        items: [
                          "REST & GraphQL patterns in mobile",
                          "Handling auth tokens, refresh flows",
                          "File uploads and background sync basics",
                        ],
                      },
                    ]}
                  />

                  {/* Native modules & device APIs */}
                  <SubtopicGroup
                    id="native-apis"
                    title="🔌 Native APIs & Device Features"
                    topics={[
                      {
                        id: "camera",
                        title: "Camera, Location & Sensors",
                        icon: "bi bi-camera-fill text-success",
                        items: [
                          "Camera integration, permissions & media handling",
                          "Geolocation & maps basics",
                          "Using device sensors and device info",
                        ],
                      },
                      {
                        id: "native-mod",
                        title: "Native Modules & Linking",
                        icon: "bi bi-plug text-success",
                        items: [
                          "Linking native SDKs or writing native modules (overview)",
                          "Working with platform differences (iOS vs Android)",
                        ],
                      },
                    ]}
                  />

                  {/* Debugging, Testing & Performance */}
                  <SubtopicGroup
                    id="qa"
                    title="🧰 Debugging, Testing & Performance"
                    topics={[
                      {
                        id: "debug",
                        title: "Debugging & DevTools",
                        icon: "bi bi-bug text-secondary",
                        items: [
                          "Remote debugging, Flipper, logs & crash reporting",
                          "Performance profiling and avoiding re-renders",
                        ],
                      },
                      {
                        id: "testing",
                        title: "Testing",
                        icon: "bi bi-check2-square text-secondary",
                        items: [
                          "Unit tests, component tests (Jest, Testing Library)",
                          "E2E test basics (Detox / Appium overview)",
                        ],
                      },
                    ]}
                  />

                  {/* Deployment */}
                  <div className="accordion-item main-topic mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button main-heading collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#deploymentCollapse"
                      >
                        ☁️ Deployment & Publishing
                      </button>
                    </h2>
                    <div id="deploymentCollapse" className="accordion-collapse collapse">
                      <div className="accordion-body p-0">
                        <ul className="styled-list">
                          <li>App signing, provisioning profiles and stores</li>
                          <li>Publishing with Expo or building native binaries</li>
                          <li>Release channels, OTA updates & app store metadata</li>
                          <li>Basic analytics, monitoring and crash reporting</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tools */}
                  <SubtopicGroup
                    id="tools"
                    title="🛠️ Tools & Ecosystem"
                    topics={[
                      {
                        id: "expo",
                        title: "Expo & CLI",
                        icon: "bi bi-box-arrow-in-down text-secondary",
                        items: [
                          "Expo SDK overview and native modules",
                          "Using the CLI, build services and eas",
                        ],
                      },
                      {
                        id: "ci",
                        title: "CI / Release",
                        icon: "bi bi-github text-dark",
                        items: [
                          "Automating builds, app store uploads",
                          "Code signing management and release flows",
                        ],
                      },
                    ]}
                  />

                  {/* Career Prep */}
                  <div className="accordion-item main-topic mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button main-heading collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#careerCollapse"
                      >
                        <i className="bi bi-bullseye me-2 text-danger"></i> Career Prep
                      </button>
                    </h2>
                    <div id="careerCollapse" className="accordion-collapse collapse">
                      <div className="accordion-body p-0">
                        <ul className="styled-list">
                          <li>Publishing a portfolio app to Play Store / App Store</li>
                          <li>Resume & LinkedIn optimizations for mobile roles</li>
                          <li>Mock interviews focused on mobile engineering</li>
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
                    <i className="bi bi-phone-fill text-primary fs-4 mb-2"></i>
                    <p className="mb-0 small">Cross-platform app published to stores</p>
                  </div>
                </div>
                <div className="col-md-3 col-10">
                  <div className="card text-center p-3 h-100">
                    <i className="bi bi-github text-dark fs-4 mb-2"></i>
                    <p className="mb-0 small">Portfolio with native features & tests</p>
                  </div>
                </div>
                <div className="col-md-3 col-10">
                  <div className="card text-center p-3 h-100">
                    <i className="bi bi-people-fill text-success fs-4 mb-2"></i>
                    <p className="mb-0 small">Interview-ready mobile engineering skills</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 d-flex justify-content-center gap-2">
                <a className="btn btn-brand" href="https://wa.me/918639460402">Join Free Demo</a>
                <Link className="btn btn-outline-dark" to="/contact">Apply Now</Link>
                <a className="btn btn-outline-secondary" href="/handouts/appdev.pdf" download>Download PDF</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
