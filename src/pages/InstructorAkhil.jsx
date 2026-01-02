// src/pages/InstructorAkhil.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function InstructorAkhil() {
  return (
    <>
      <Navbar />

      <HeroSection
        title={<span style={{ color: "#000" }}>Akhil Potla</span>}
        subtitle="DevOps & Automation Testing Instructor • Senior SDET at Hexagon"
      >
        <p className="lead mb-0">
          Automation-first engineer focused on CI/CD, scalable test frameworks,
          and production-grade quality engineering.
        </p>
      </HeroSection>

      <section className="py-5">
        <div className="container">
          {/* ABOUT */}
          <div className="row g-4 align-items-start">
            <div className="col-lg-8">
              <h1 className="fw-bold mb-2">About</h1>
              <p className="text-muted">
                Akhil Potla is a Senior Software Development Engineer in Test (SDET)
                with 4+ years of industry experience in automation testing, API
                testing, CI/CD integration, and Agile delivery. He currently works
                at Hexagon Capability Center India on complex engineering products
                such as CADWorx Plant, Structure, and Equipment.
              </p>

              <p className="text-muted">
                His strength lies in building reliable automation frameworks,
                integrating them into CI/CD pipelines, and ensuring product
                quality at scale. At Code Medha, Akhil brings real-world DevOps
                and testing practices into the classroom.
              </p>

              <div className="d-flex flex-wrap gap-2 mt-3">
                {[
                  "Automation Testing",
                  "CI/CD Pipelines",
                  "DevOps Practices",
                  "API Testing",
                  "Quality Engineering",
                  "Agile & SAFe",
                ].map((s) => (
                  <span key={s} className="badge text-bg-light border">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* SNAPSHOT */}
            <aside className="col-lg-4">
              <div
                className="card p-4 shadow-sm border-0 rounded-4"
                style={{
                  background: "linear-gradient(180deg,#ffffff,#f8f9fb)",
                }}
              >
                <h6 className="mb-2 text-center fw-bold">Instructor Snapshot</h6>

                <div className="small">
                  <div className="mb-2">
                    <strong>Current Role:</strong> Senior SDET
                  </div>
                  <div className="mb-2">
                    <strong>Company:</strong> Hexagon Capability Center India
                  </div>
                  <div className="mb-2">
                    <strong>Experience:</strong> 4+ years
                  </div>
                  <div className="mb-2">
                    <strong>Specialization:</strong> Automation + DevOps
                  </div>
                </div>

                <div className="mt-3 d-grid gap-2">
                  <a className="btn btn-brand" href="/contact">
                    Talk to us
                  </a>
                  <a
                    className="btn btn-outline-dark"
                    href="https://wa.me/919505368540"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* EXPERIENCE */}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="fw-bold mb-3">Industry Experience</h3>

              {/* HEXAGON */}
              <div className="border rounded-4 p-4 mb-3">
                <h5 className="fw-bold mb-1">
                  Hexagon Capability Center India — Senior SDET
                </h5>
                <div className="text-muted small">
                  Oct 2021 – Present • Hyderabad
                </div>

                <ul className="mt-3 text-muted mb-0">
                  <li>
                    Designed and enhanced automation frameworks for CADWorx
                    Plant, Structure, and Equipment across multiple versions.
                  </li>
                  <li>
                    Integrated automated test suites into CI/CD pipelines,
                    identifying and fixing <strong>10+ critical</strong> and
                    <strong> 30+ P3</strong> bugs.
                  </li>
                  <li>
                    Built research-driven testing strategies adopted across
                    multiple products after leadership review.
                  </li>
                  <li>
                    Improved release efficiency by <strong>73%</strong> through
                    end-to-end automation engineering.
                  </li>
                </ul>
              </div>

              {/* TCS */}
              <div className="border rounded-4 p-4">
                <h5 className="fw-bold mb-1">
                  Tata Consultancy Services — Assistant System Engineer Trainee
                </h5>
                <div className="text-muted small">
                  Nov 2020 – Oct 2021 • Hyderabad
                </div>

                <ul className="mt-3 text-muted mb-0">
                  <li>
                    Performed manual and automated testing for enterprise web
                    applications.
                  </li>
                  <li>
                    Developed Selenium-based scripts for functional and
                    regression validation.
                  </li>
                  <li>
                    Worked in Agile teams handling backend and UI testing.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="fw-bold mb-3">Key Achievements</h3>
              <ul className="text-muted">
                <li>
                  Awarded for <strong>73% reduction</strong> in manual testing
                  time through automation.
                </li>
                <li>
                  SAFe Agile Certified professional.
                </li>
                <li>
                  Recognized for contributions to company-wide automation
                  initiatives.
                </li>
              </ul>
            </div>
          </div>

          {/* SKILLS */}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="fw-bold mb-3">Skills & Tools</h3>

              <div className="row g-3">
                {[
                  ["Automation", "Selenium, Playwright, TestComplete, UIPath"],
                  ["Languages", "Python, JavaScript, Java, C#"],
                  ["API Testing", "Postman, SoapUI"],
                  ["CI/CD & DevOps", "GitHub, GitLab, Bitbucket"],
                  ["Testing Types", "Manual, Automation, Regression"],
                  ["Methodologies", "Agile, SAFe, Scrum, DevOps"],
                ].map(([title, desc]) => (
                  <div className="col-md-6" key={title}>
                    <div className="p-4 border rounded-4 h-100">
                      <h6 className="fw-bold mb-2">{title}</h6>
                      <p className="text-muted mb-0">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TEACHING FOCUS */}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="fw-bold mb-3">Teaching Focus at Code Medha</h3>
              <ul className="text-muted">
                <li>Automation testing from fundamentals to frameworks</li>
                <li>CI/CD pipelines and DevOps mindset for testers</li>
                <li>API testing and backend validation</li>
                <li>Industry interview preparation for SDET roles</li>
              </ul>

              <div className="mt-4 d-flex justify-content-center gap-2">
                <a className="btn btn-brand" href="/contact">
                  Join Free Demo
                </a>
                <a className="btn btn-outline-dark" href="/instructors">
                  Back to Instructors
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
