import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Dubai from "../assets/Dubai-command.jpg";
import AiEducator from "../assets/AiEducator.png";
import WKCaseLaws from "../assets/Wk-Case-Laws.jpg";
import Arcadia from "../assets/arcadia.png";
import Loughs from "../assets/LoughsAgency.jpg";
import Reddy from "../assets/ReddyLabs.png";
import Adithya from "../assets/AdithyaMukunda1.jpg";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Hi, I'm Adithya 👋"
        subtitle="I'm a UX & UI Engineer and Frontend Developer with 5+ years of experience crafting clean, responsive, and accessible web interfaces. I specialize in HTML, CSS, Bootstrap, Tailwind, JavaScript, Angular, and React."
      />

      {/* About Me Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">About Me</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src={Adithya}
                alt="Adithya"
                className="rounded-circle"
                width="180"
                height="180"
              />
            </div>
            <div className="col-md-8">
              <div className="p-4 rounded shadow-lg">
                <p>
                  Hi! I’m Adithya — A UX Engineer & Frontend Developer
                  passionate about designing user-first experiences. With 5
                  years of experience, I specialize in crafting clean,
                  accessible, and responsive interfaces using modern
                  technologies like React, Angular, and Tailwind.
                </p>
                <p>
                  I thrive at the intersection of design and development —
                  transforming Figma files into pixel-perfect websites and
                  solving real-world UX problems one layout at a time. Whether
                  it’s rapid prototyping or building scalable UIs, I deliver
                  clarity and efficiency in every line of code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Projects</h2>
          <div className="row g-4">
            {/* Dubai Tourism - Private */}
            <div className="col-md-4 h-100">
              <div
                className="card h-100 shadow-md p-3 project-card"
                title="Private dashboard for internal use"
              >
                <img
                  src={Dubai}
                  className="card-img-top rounded"
                  alt="Dubai Tourism Project"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Dubai Tourism Dashboard
                  </h5>
                  <p className="text-muted small mb-1">
                    <strong>Role:</strong> React UI Developer
                  </p>
                  <p className="small text-dark">
                    Delivered responsive dashboards for both a 5760×1080 command
                    center display and iPad controllers. Handled conditional
                    rendering for multi-device UI under tight deadlines.
                  </p>
                </div>
              </div>
            </div>

            {/* AiEducator - Clickable */}
            <div className="col-md-4 h-100">
              <a
                href="https://www.aieducator.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow-md p-3 project-card">
                  <img
                    src={AiEducator}
                    className="card-img-top rounded"
                    alt="AiEducator Platform"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      AiEducator – EdTech Platform
                    </h5>
                    <p className="text-muted small mb-1">
                      <strong>Role:</strong> Frontend Developer (React.js)
                    </p>
                    <p className="small text-dark">
                      Developed dynamic UI components for personalized learning
                      experiences. Integrated AI-driven math modules and
                      optimized performance using code splitting and lazy
                      loading.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* WK Case Laws - Private */}
            <div className="col-md-4 h-100">
              <div
                className="card h-100 shadow-md p-3 project-card"
                title="Private dashboard for internal use"
              >
                <img
                  src={WKCaseLaws}
                  className="card-img-top rounded"
                  alt="WK Case Laws Dashboard"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    WK Case Laws – Legal Dashboard
                  </h5>
                  <p className="text-muted small mb-1">
                    <strong>Role:</strong> React Developer
                  </p>
                  <p className="small text-dark">
                    Built a legal analytics dashboard for an American law firm
                    using React. Focused on clean UI structuring, reusable
                    components, and seamless data rendering from case law APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-4">
            {/* Arcadia - Clickable */}
            <div className="col-md-4 h-100">
              <a
                href="https://www.arcadia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow-md p-3 project-card">
                  <img
                    src={Arcadia}
                    className="card-img-top rounded"
                    alt="Arcadia Solar Platform"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Arcadia</h5>
                    <p className="text-muted small mb-1">
                      <strong>Role:</strong> React UI Developer
                    </p>
                    <p className="small text-dark">
                      Delivered scalable UI components for Arcadia’s clean
                      energy platform, enabling seamless user experience across
                      desktop and mobile. Focused on responsive dashboards,
                      API-driven data visuals, and optimized accessibility for
                      solar and utility account management.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Loughs Agency - Clickable */}
            <div className="col-md-4 h-100">
              <a
                href="https://loughs-agency.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow-md p-3 project-card">
                  <img
                    src={Loughs}
                    className="card-img-top rounded"
                    alt="Loughs Agency Environmental Dashboard"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Loughs Agency – Environmental Dashboard
                    </h5>
                    <p className="text-muted small mb-1">
                      <strong>Role:</strong> Frontend Developer (React.js)
                    </p>
                    <p className="small text-dark">
                      Developed a comprehensive environmental dashboard for
                      Loughs Agency, focusing on data visualization and user
                      engagement. Implemented responsive design principles to
                      ensure accessibility across devices, enhancing public
                      interaction with environmental data.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Dr. Reddy Labs - Clickable */}
            <div className="col-md-4 h-100">
              <a
                href="https://www.drreddys.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow-md p-3 project-card">
                  <img
                    src={Reddy}
                    className="card-img-top rounded"
                    alt="Dr. Reddy Labs"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Reddy Labs – Pharmaceutical Platform
                    </h5>
                    <p className="text-muted small mb-1">
                      <strong>Role:</strong> Frontend Developer (React.js)
                    </p>
                    <p className="small text-dark">
                      Enhanced user engagement by 30% through a redesigned
                      platform for Dr. Reddy Laboratories. Focused on creating
                      responsive, accessible interfaces that improved navigation
                      and usability for healthcare professionals and patients.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Skills</h2>
          <div className="row text-center g-4">
            {[
              { name: "HTML5", color: "E34F26" },
              { name: "CSS3", color: "1572B6" },
              { name: "SASS", color: "CC6699" },
              { name: "Bootstrap", color: "7952B3" },
              { name: "Tailwind CSS", color: "06B6D4" },
              { name: "JavaScript", color: "F7DF1E" },
              { name: "TypeScript", color: "3178C6" },
              { name: "React", color: "61DAFB" },
              {
                name: "React Native",
                icon: "https://img.icons8.com/color/48/react-native.png",
              },
              { name: "Node.js", color: "339933" },
              { name: "Express", color: "000000" },
              { name: "Git", color: "F05032" },
              { name: "GitHub", color: "181717" },
              {
                name: "DevTools",
                icon: "https://img.icons8.com/ios-filled/50/000000/developer-mode.png",
              },
              {
                name: "Command Line",
                icon: "https://img.icons8.com/ios-filled/50/000000/console.png",
              },
              { name: "Angular", color: "DD0031" },
            ].map((skill) => (
              <div className="col-6 col-md-3" key={skill.name}>
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} width="40" />
                ) : (
                  <img
                    src={`https://cdn.simpleicons.org/${skill.name
                      .toLowerCase()
                      .replace(/\s+/g, "")}/${skill.color}`}
                    alt={skill.name}
                    width="40"
                  />
                )}
                <p className="mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Experience</h2>
          <div className="row text-center g-4">
            {/* Experience 1 */}
            <div className="col-md-4">
              <div className="border card p-4 h-100 rounded shadow-sm text-start">
                <h5 className="mb-1">UX Engineer</h5>
                <h6 className="text-primary fw-bold">Gramener (now Straive)</h6>
                <p className="text-muted mb-3">Jan 2024 – Present</p>
                <ul className="text-start small ps-3">
                  <li>
                    Launched <span className="fw-bold">G20 Summit website</span>
                    , increasing traffic by <span className="fw-bold">25%</span>
                    .
                  </li>
                  <li>
                    Boosted user engagement by{" "}
                    <span className="fw-bold">30%</span> for{" "}
                    <span className="fw-bold">Dr. Reddy Laboratories</span>{" "}
                    platform (React.js).
                  </li>
                  <li>
                    Delivered scalable UIs and responsive layouts for{" "}
                    <span className="fw-bold">Dubai Tourism’s 5760×1080</span>{" "}
                    Command Center & Controller.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="col-md-4">
              <div className="border card p-4 h-100 rounded shadow-sm text-start">
                <h5 className="mb-1">Full-Stack Developer</h5>
                <h6 className="text-primary fw-bold">
                  Metagogy Learning Systems
                </h6>
                <p className="text-muted mb-3">Apr 2022 – Dec 2023</p>
                <ul className="text-start small ps-3">
                  <li>
                    Enhanced <span className="fw-bold">Maths AI Educator</span>{" "}
                    UI (↑ <span className="fw-bold">40%</span> completion rate).
                  </li>
                  <li>
                    Cut <span className="fw-bold">load time</span> by{" "}
                    <span className="fw-bold">35%</span> (React.js
                    optimization).
                  </li>
                  <li>
                    Enabled{" "}
                    <span className="fw-bold">real-time video streaming</span>{" "}
                    for <span className="fw-bold">5K+</span> users.
                  </li>
                  <li>
                    Built scalable{" "}
                    <span className="fw-bold">Angular 13 components</span> for
                    AI Educator.
                  </li>
                  <li>
                    Boosted retention by <span className="fw-bold">25%</span>,
                    integrated ML tools.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="col-md-4">
              <div className="border card p-4 h-100 rounded shadow-sm text-start">
                <h5 className="mb-1">Software Developer</h5>
                <h6 className="text-primary fw-bold">CBTS</h6>
                <p className="text-muted mb-3">Oct 2021 – Mar 2022</p>
                <ul className="text-start small ps-3">
                  <li>
                    Enhanced <span className="fw-bold">internal tools</span>,
                    increasing task automation by{" "}
                    <span className="fw-bold">30%</span>.
                  </li>
                  <li>
                    Upgraded frontend skills and worked across UI components.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section id="certifications" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Certifications</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="border rounded p-4 h-100 shadow-lg">
                <div className="mb-2" style={{ fontSize: "1.5rem" }}>
                  ✅
                </div>
                <h6 className="fw-bold">Responsive Web Design</h6>
                <p className="text-muted mb-0">freeCodeCamp</p>
              </div>
            </div>

            {/* Certification 2 */}
            <div className="col-md-4">
              <div className="border rounded p-4 h-100 shadow-lg">
                <div className="mb-2" style={{ fontSize: "1.5rem" }}>
                  🎨
                </div>
                <h6 className="fw-bold">UI/UX Design Fundamentals</h6>
                <p className="text-muted mb-0">Google (Coursera)</p>
              </div>
            </div>

            {/* Certification 3 */}
            <div className="col-md-4">
              <div className="border rounded p-4 h-100 shadow-lg">
                <div className="mb-2" style={{ fontSize: "1.5rem" }}>
                  📜
                </div>
                <h6 className="fw-bold">JavaScript</h6>
                <p className="text-muted mb-0">Udemy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-white border-top">
        <div className="container text-center">
          <h2 className="mb-3 fw-bold">Let's Connect</h2>
          <p className="mb-4 fs-5 text-muted">
            Got a project or idea? I'd love to hear from you!
          </p>

          <div className="d-flex justify-content-center gap-4 fs-3">
            <a
              href="mailto:adithya.chandrasekhar99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon bg-danger text-white"
              aria-label="Email"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a
              href="https://wa.me/918639460402"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon bg-success text-white"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <a
              href="https://github.com/Adithya99Mukunda"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon bg-dark text-white"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;
