// src/pages/home.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DemoModal from "../components/Modal";
import Footer from "../components/Footer";
import MeetYourMentor from "../components/MeetYourMentor";
import UniqueSection from "../components/UniqueSection";

const HighlightCard = ({ title, desc, accent }) => (
  <div className="col-12 col-md-4">
    <div className="card p-3 shadow-sm h-100 text-center bg-white border-0">
      <h6 className={`fw-bold mb-2 ${accent || ""}`}>{title}</h6>
      <p className="small text-muted mb-0">{desc}</p>
    </div>
  </div>
);

const OutcomeCard = ({ icon, title, small }) => (
  <div className="col-6 col-md-3">
    <div className="card text-center p-3 h-100 bg-white border-0 shadow-sm">
      <div className="fs-3 mb-2">{icon}</div>
      <p className="mb-0 small">
        <strong>{title}</strong>
        <br />
        <span className="text-muted">{small}</span>
      </p>
    </div>
  </div>
);

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        style={{
          background: "linear-gradient(120deg, #f9fafb 0%, #f1f5ff 60%, #fff7ed 100%)",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <HeroSection
          title={
            <>
              <span style={{ color: "#ff6b00" }}>AI-Powered</span> LMS +
              Project-First Software Training
            </>
          }
          subtitle="Adaptive AI tutor, hands-on projects you ship, and 100% placement assistance until you get hired. Offline cohorts in Khammam — plus lifetime hybrid LMS access."
        >
          <button className="btn btn-gradient" onClick={() => setShowModal(true)}>
            Join Free Demo
          </button>

          <a
            href="https://wa.me/918639460402"
            className="btn btn-outline-danger ms-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Talk on WhatsApp
          </a>

          <DemoModal show={showModal} handleClose={() => setShowModal(false)} />
        </HeroSection>

        <UniqueSection />

        {/* Highlights */}
        <section className="py-4">
          <div className="container">
            <div className="row g-3 justify-content-center">
              <HighlightCard
                title="AI Personal Tutor"
                desc="Adaptive paths, code hints, instant feedback, and auto-assessments to speed up learning."
              />
              <HighlightCard
                title="Project-First Curriculum"
                desc="Build 5+ real-world projects—deployed, documented and recruiter-ready."
              />
              <HighlightCard
                title="100% Placement Assistance"
                desc="Resume + LinkedIn overhaul, mock interviews, and employer warm intros until you land a job."
              />
            </div>
          </div>
        </section>

        {/* AI LMS Explanation */}
        <section className="py-5 text-center">
          <div className="container">
            <div className="row justify-content-center g-4">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-4">Why Our AI LMS Actually Works</h2>
                <ul className="styled-list text-start d-inline-block mt-3">
                  <li>
                    <strong>Personalized pace:</strong> the AI identifies gaps and recommends micro-lessons.
                  </li>
                  <li>
                    <strong>Automated code review:</strong> inline hints & suggested fixes so students learn by doing.
                  </li>
                  <li>
                    <strong>Smart projects:</strong> project templates adapt to your level so every build is meaningful.
                  </li>
                  <li>
                    <strong>Progress dashboard:</strong> weekly outcomes & milestones so you never drift.
                  </li>
                </ul>

                <div className="mt-4 d-flex justify-content-center">
                  <a className="btn btn-outline-dark" href="/curriculum">
                    View Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Showcase */}
        <section className="py-5">
          <div className="container">
            <h2 className="section-title text-center mb-4">Projects You’ll Build</h2>
            <p className="text-center text-muted mb-5">
              Every concept you learn turns into a deployable project. These aren’t toy examples — they go into your GitHub portfolio.
            </p>

            <div className="row g-4">
              {/* 6 Projects — same as before */}
              {[
                ["E-Commerce Storefront", "End-to-end shopping app with cart, payments, admin panel and product search.", ["React", "Node.js", "MongoDB"]],
                ["Portfolio + Blog CMS", "Your personal website with blog integration, contact form & SEO optimization.", ["React", "JavaScript", "Netlify"]],
                ["Team Collaboration Dashboard", "Real-time team analytics app with charts, notifications and user roles.", ["React", "Socket.io", "Bootstrap"]],
                ["AI Resume Screener", "An NLP-powered app that analyzes resumes and matches candidates to jobs.", ["Node.js", "React", "OpenAI API"]],
                ["Task Manager (MERN)", "A complete CRUD app with authentication, JWT tokens and RESTful APIs.", ["MongoDB", "Express", "React"]],
                ["Freelancer Invoice System", "Invoice generator with PDF export, client tracking and analytics dashboard.", ["React", "Firebase", "Bootstrap"]],
              ].map(([title, desc, tech], i) => (
                <div key={i} className="col-md-4">
                  <div className="card h-100 p-3 shadow-sm bg-white border-0">
                    <h5 className="fw-bold">{title}</h5>
                    <p className="text-muted small">{desc}</p>
                    <div className="mt-auto">
                      {tech.map((t, idx) => (
                        <span key={idx} className="badge text-bg-light border me-1">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-end mt-3">
              <p className="text-muted fw-semibold mb-0">and many more...</p>
            </div>

            <div className="text-center mt-5">
              <a href="/portfolio" className="btn btn-brand me-2">
                View Student Portfolio
              </a>
              <a href="/curriculum" className="btn btn-outline-dark">
                Explore Courses
              </a>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-5">
          <div className="container">
            <h2 className="section-title text-center mb-4">Outcomes We Guarantee</h2>
            <div className="row g-3 justify-content-center mb-4">
              <OutcomeCard icon="🎯" title="100% Placement Assistance" small="Guidance & intros until you're placed" />
              <OutcomeCard icon="📁" title="Job-Ready Portfolio" small="5+ live projects and recruiter-friendly README" />
              <OutcomeCard icon="🧠" title="AI Learning Coach" small="Personalized remediation & practice" />
              <OutcomeCard icon="🤝" title="Interview Support" small="Mock interviews & follow-ups" />
            </div>

            <p className="text-center text-muted small">
              *Placement assistance means continuous support — resume revisions, interview practice and employer introductions until you get hired.
            </p>

            <div className="text-center mt-3">
              <a className="btn btn-brand me-2" href="/curriculum">
                Apply Now
              </a>
              <a className="btn btn-outline-dark" href="/contact">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-5">
          <div className="container">
            <h2 className="section-title text-center mb-4">Quick FAQs</h2>
            <div className="row g-3 justify-content-center">
              <div className="col-md-4">
                <div className="card p-3 h-100 shadow-sm bg-white border-0">
                  <h6 className="fw-semibold">Do you really use AI?</h6>
                  <p className="small text-muted mb-0">
                    Yes — our LMS uses diagnostics and smart hints to personalize practice and projects.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card p-3 h-100 shadow-sm bg-white border-0">
                  <h6 className="fw-semibold">What does 100% placement assistance mean?</h6>
                  <p className="small text-muted mb-0">
                    We prepare, pitch and connect — resume, LinkedIn, mock interviews and employer intros until you're placed.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card p-3 h-100 shadow-sm bg-white border-0">
                  <h6 className="fw-semibold">Can I learn remotely?</h6>
                  <p className="small text-muted mb-0">
                    Yes — offline classroom + hybrid LMS access. Attend in-person or follow the LMS remotely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MeetYourMentor />
        <Footer />
      </div>
    </>
  );
}
