import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const Curriculum = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Curriculum"
        subtitle="Here’s everything you’ll master in our offline frontend training program — structured, practical, and beginner-friendly."
      />

      <section id="curriculum" className="container py-5">
        <h2 className="section-title text-center mb-4">Curriculum</h2>
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <div className="accordion" id="curriculumAccordion">
              {/* HTML */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingHtml">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseHtml"
                    aria-expanded="true"
                    aria-controls="collapseHtml"
                  >
                    <i className="fab fa-html5 text-danger me-2"></i>HTML
                  </button>
                </h2>
                <div
                  id="collapseHtml"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingHtml"
                  data-bs-parent="#curriculumAccordion"
                >
                  <div className="accordion-body rounded-bottom">
                    <ul className="styled-list">
                      <li>Structure & Boilerplate</li>
                      <li>Text & Formatting</li>
                      <li>Tags Links & Navigation</li>
                      <li>Images & Media</li>
                      <li>Lists (ul, ol, dl)</li>
                      <li>Forms & Input Elements</li>
                      <li>Tables</li>
                      <li>Semantic Tags</li>
                      <li>Inline vs Block Elements</li>
                      <li>Entities & Symbols</li>
                      <li>HTML Attributes (Global & Specific)</li>
                      <li>Accessibility (alt, aria-label)</li>
                      <li>Meta Tags & SEO Basics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CSS */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingCss">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseCss"
                    aria-expanded="false"
                    aria-controls="collapseCss"
                  >
                    <i className="fab fa-css3-alt text-primary me-2"></i>CSS
                  </button>
                </h2>
                <div
                  id="collapseCss"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingCss"
                  data-bs-parent="#curriculumAccordion"
                >
                  <div className="accordion-body rounded-bottom">
                    <ul className="styled-list">
                      <li>Introduction & CSS Syntax</li>
                      <li>Types of CSS (Inline, Internal, External)</li>
                      <li>Selectors (Element, Class, ID, Advanced)</li>
                      <li>Color Formats & CSS Units</li>
                      <li>Typography & Text Styling</li>
                      <li>Box Model</li>
                      <li>Display Types (block, inline, inline-block)</li>
                      <li>
                        Positioning (`relative`, `absolute`, etc.) & Z-index
                      </li>
                      <li>Flexbox</li>
                      <li>CSS Grid</li>
                      <li>Combinators & Pseudo Selectors</li>
                      <li>Transitions, Hover Effects, Animations</li>
                      <li>Media Queries & Responsive Design</li>
                      <li>Mini Project (Product Card or Layout Page)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* SASS */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSass">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSass"
                    aria-expanded="false"
                    aria-controls="collapseSass"
                  >
                    <i className="fab fa-sass text-pink me-2"></i>SASS
                  </button>
                </h2>
                <div
                  id="collapseSass"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSass"
                  data-bs-parent="#curriculumAccordion"
                >
                  <div className="accordion-body rounded-bottom">
                    <ul className="styled-list">
                      <li>What is SASS & Setup</li>
                      <li>Variables</li>
                      <li>Nesting</li>
                      <li>Partials & Imports</li>
                      <li>Mixins & Functions</li>
                      <li>Extend/Inheritance</li>
                      <li>Operators & Conditions</li>
                      <li>Compiling SASS to CSS</li>
                      <li>Mini Project with SASS</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bootstrap */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingBootstrap">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBootstrap"
                    aria-expanded="false"
                    aria-controls="collapseBootstrap"
                  >
                    <i className="fab fa-bootstrap text-purple me-2"></i>
                    Bootstrap
                  </button>
                </h2>
                <div
                  id="collapseBootstrap"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingBootstrap"
                  data-bs-parent="#curriculumAccordion"
                >
                  <div className="accordion-body rounded-bottom">
                    <ul className="styled-list">
                      <li>Bootstrap Introduction & Setup</li>
                      <li>Bootstrap Grid System</li>
                      <li>Typography & Utility Classes</li>
                      <li>Buttons, Alerts, Badges</li>
                      <li>Navbar & Navigation Components</li>
                      <li>Cards & Layout Components</li>
                      <li>Forms & Validation</li>
                      <li>Modals, Carousels, Collapse</li>
                      <li>Responsive Design with Bootstrap</li>
                      <li>Mini Project (Admin Dashboard or Landing Page)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* JavaScript */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingJs">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseJs"
                    aria-expanded="false"
                    aria-controls="collapseJs"
                  >
                    <i className="fab fa-js text-warning me-2"></i>JavaScript
                  </button>
                </h2>
                <div
                  id="collapseJs"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingJs"
                  data-bs-parent="#curriculumAccordion"
                >
                  <div className="accordion-body rounded-bottom">
                    <ul className="styled-list">
                      <li>Introduction to JavaScript</li>
                      <li>Variables (`let`, `const`, `var`)</li>
                      <li>Data Types & Type Conversion</li>
                      <li>Operators & Expressions</li>
                      <li>Conditional Statements</li>
                      <li>Loops (`for`, `while`, `forEach`)</li>
                      <li>Functions (Declaration, Expression, Arrow)</li>
                      <li>Arrays & Array Methods</li>
                      <li>Objects & Object Methods</li>
                      <li>DOM Manipulation</li>
                      <li>Events & Event Listeners</li>
                      <li>Form Validation Basics</li>
                      <li>Local Storage & Session Storage</li>
                      <li>ES6 Features (Destructuring, Spread, etc.)</li>
                      <li>Promises, Async & Await</li>
                      <li>Mini Projects (Todo App, Calculator, etc.)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* React */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingReact">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseReact"
                    aria-expanded="false"
                    aria-controls="collapseReact"
                  >
                    <i className="fab fa-react text-info me-2"></i>React
                  </button>
                </h2>
                <div
                  id="collapseReact"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingReact"
                  data-bs-parent="#curriculumAccordion"
                >
                  <div className="accordion-body rounded-bottom">
                    <ul className="styled-list">
                      <li>Introduction to React & Setup (Vite)</li>
                      <li>JSX Syntax</li>
                      <li>Function Components</li>
                      <li>Props & Component Communication</li>
                      <li>State Management with `useState()`</li>
                      <li>Event Handling</li>
                      <li>Conditional Rendering</li>
                      <li>Lists & Keys</li>
                      <li>Forms (Controlled)</li>
                      <li>Hooks: `useEffect`, `useRef`</li>
                      <li>Lifting State Up</li>
                      <li>Context API</li>
                      <li>React Router (`react-router-dom`)</li>
                      <li>API Calls using `fetch` or `axios`</li>
                      <li>Mini Project (React Todo/Weather/Portfolio)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* DevTools */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingDev">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseDev"
                    aria-expanded="false"
                    aria-controls="collapseDev"
                  >
                    <i className="fas fa-terminal text-success me-2"></i>
                    DevTools
                  </button>
                </h2>
                <div
                  id="collapseDev"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingDev"
                  data-bs-parent="#curriculumAccordion"
                >
                  <div className="accordion-body rounded-bottom">
                    <ul className="styled-list">
                      <li>Inspect Element & Live HTML Editing</li>
                      <li>DevTools Interface Overview</li>
                      <li>Inspect Element & Live HTML Editing</li>
                      <li>CSS Live Editing & Box Model</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Git & GitHub */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingGit">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseGit"
                    aria-expanded="false"
                    aria-controls="collapseGit"
                  >
                    <i className="fab fa-git-alt text-dark me-2"></i>Git &
                    GitHub
                  </button>
                </h2>
                <div
                  id="collapseGit"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingGit"
                  data-bs-parent="#curriculumAccordion"
                >
                  <div className="accordion-body rounded-bottom">
                    <ul className="styled-list">
                      <li>What is Git & Version Control</li>
                      <li>Installing Git & Basic Setup</li>
                      <li>Creating a Local Repo</li>
                      <li>Tracking Changes (`add`, `commit`)</li>
                      <li>Undoing Changes</li>
                      <li>GitHub Account & Remote Setup</li>
                      <li>Pushing & Pulling from GitHub</li>
                      <li>Cloning a Repository</li>
                      <li>Branching & Merging</li>
                      <li>Handling Merge Conflicts (Basics)</li>
                      <li>Deploying with GitHub Pages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Curriculum;
