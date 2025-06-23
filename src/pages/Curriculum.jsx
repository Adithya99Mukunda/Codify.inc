import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CurriculumContent from '../components/CurriculumContent';


const Curriculum = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Curriculum"
        subtitle="Build more than just websites—build user experiences. Our frontend program isn’t just about coding, it’s about design thinking, logic, and real-world readiness."
      />
      <CurriculumContent />

      <section id="curriculum" className="container py-5">
        <h2 className="section-title text-center mb-4">Course Structure</h2>
        <div className="curriculum-wrapper">
          <div className="accordion" id="mainAccordion">
            {/* UX LAYER */}
            <div className="accordion-item main-topic mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button main-heading"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#uxCollapse"
                >
                  <i className="bi bi-palette me-2 text-primary-emphasis"></i>{" "}
                  The UX Layer
                </button>
              </h2>
              <div id="uxCollapse" className="accordion-collapse collapse show">
                <div className="accordion-body p-0">
                  <div className="accordion subtopics" id="uxSubtopics">
                    {/* HTML */}
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

                    {/* CSS */}
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

                    {/* Bootstrap */}
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

                    {/* SASS */}
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

            {/* React */}
            <SubtopicGroup
              id="react"
              title="⚛️ Framework"
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

            {/* Career Prep */}
            <div className="accordion-item main-topic mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button main-heading collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#careerCollapse"
                >
                  <i className="bi bi-bullseye me-2 text-danger"></i> Career
                  Prep
                </button>
              </h2>
              <div id="careerCollapse" className="accordion-collapse collapse">
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
      </section>

      <Footer />
    </>
  );
};

const SubtopicAccordion = ({ id, title, icon, items }) => (
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

const SubtopicGroup = ({ id, title, topics }) => (
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

export default Curriculum;
