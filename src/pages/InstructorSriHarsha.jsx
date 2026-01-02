// src/pages/InstructorSriHarsha.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function InstructorSriHarsha() {
  return (
    <>
      <Navbar />

      <HeroSection
        title={
          <>
            <span style={{ color: "#000" }}>Sri Harsha Gade</span>
          </>
        }
        subtitle="Data Analytics Instructor • AI/ML Engineer (Kirusa)"
      >
        <p className="lead mb-0">
          Industry mentor focused on practical analytics: SQL, dashboards,
          business KPIs, and interview-ready problem solving.
        </p>
      </HeroSection>

      <section className="py-5">
        <div className="container">
          {/* Quick summary */}
          <div className="row g-4 align-items-start">
            <div className="col-lg-8">
              <h1 className="fw-bold mb-2">About</h1>
              <p className="text-muted">
                Sri Harsha is an AI/ML Engineer at Kirusa and a Data Analytics
                instructor at Code Medha. He brings hands-on experience working
                with product and engineering teams, building KPI dashboards,
                improving reporting reliability, and translating business needs
                into measurable outcomes.
              </p>

              <div className="d-flex flex-wrap gap-2 mt-3">
                {[
                  "SQL",
                  "Power BI",
                  "Python",
                  "PostgreSQL",
                  "MySQL",
                  "AWS",
                  "REST APIs",
                  "Data Visualization",
                  "PRDs & Documentation",
                ].map((s) => (
                  <span key={s} className="badge text-bg-light border">
                    {s}
                  </span>
                ))}
              </div>
            </div>

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
                    <strong>Role:</strong> Data Analytics Instructor
                  </div>
                  <div className="mb-2">
                    <strong>Current:</strong> AI/ML Engineer, Kirusa (Bengaluru)
                  </div>
                  <div className="mb-2">
                    <strong>Focus:</strong> SQL + Dashboards + KPI thinking
                  </div>
                </div>

                <div className="mt-3 d-grid gap-2">
                  <a className="btn btn-brand" href="/contact">
                    Talk to us
                  </a>
                  <a
                    className="btn btn-outline-dark"
                    href="https://wa.me/918639460402"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Experience */}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="fw-bold mb-3">Industry Experience</h3>

              <div className="border rounded-4 p-4 mb-3">
                <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                  <div>
                    <h5 className="fw-bold mb-1">
                      Kirusa — AI/ML Engineer → Product Management Contributor
                    </h5>
                    <div className="text-muted small">Jan 2024 – Present • Bengaluru, KA</div>
                  </div>
                </div>

                <ul className="mt-3 text-muted mb-0">
                  <li>
                    Planned and shaped AI-driven fitness & nutrition features for
                    “Happy Fit” with product and engineering teams.
                  </li>
                  <li>
                    Supported roadmap discussions and module prioritization
                    (personalized meal planning, fitness tracking).
                  </li>
                  <li>
                    Created PRDs and documentation to align design, AI, and dev
                    teams.
                  </li>
                  <li>
                    Coordinated testing + feedback cycles, reducing issue
                    resolution time by ~20%.
                  </li>
                  <li>
                    Worked with UI/UX teams to ensure privacy compliance and data
                    accuracy in product design.
                  </li>
                </ul>
              </div>

              <div className="border rounded-4 p-4 mb-3">
                <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                  <div>
                    <h5 className="fw-bold mb-1">Innominds Software — Software Engineer Trainee</h5>
                    <div className="text-muted small">Aug 2021 – Dec 2023 • Hyderabad, TS</div>
                  </div>
                </div>

                <ul className="mt-3 text-muted mb-0">
                  <li>
                    Implemented KPI dashboards for IT Service Management,
                    improving operational efficiency by ~15%.
                  </li>
                  <li>
                    Deployed data visualization workflows: reduced reporting
                    errors by ~25% and improved data accessibility by ~30%.
                  </li>
                  <li>
                    Improved delivery speed and outcomes: reduced delivery time
                    by ~15% and improved success rates by ~10%.
                  </li>
                  <li>
                    Strengthened data foundations: optimized cleaning (errors
                    down ~10%) and improved processing time by ~30% using robust
                    Postgres connections and query workflows.
                  </li>
                </ul>
              </div>

              <div className="border rounded-4 p-4">
                <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                  <div>
                    <h5 className="fw-bold mb-1">Innomatics Research Labs — Data Science Intern</h5>
                    <div className="text-muted small">Apr 2021 – Jul 2021 • Hyderabad, TS</div>
                  </div>
                </div>

                <ul className="mt-3 text-muted mb-0">
                  <li>
                    Built and deployed a Music Recommender System in a team
                    setting, gaining exposure to full-cycle data product work.
                  </li>
                  <li>
                    Presented findings to improve collaboration and deliverable
                    quality through structured analysis and communication.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="fw-bold mb-3">Projects</h3>

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="p-4 border rounded-4 h-100">
                    <h5 className="fw-bold mb-2">Netflix Content Analysis Dashboard (Power BI)</h5>
                    <p className="text-muted mb-3">
                      Dashboard built on historical Netflix data with KPI-focused visuals
                      and trend insights.
                    </p>
                    <a
                      className="btn btn-outline-dark btn-sm"
                      href="https://drive.google.com/file/d/1Bf2HfqyKB_DCtMQ6svZS9N4_qvkUSozw/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Dashboard →
                    </a>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 border rounded-4 h-100">
                    <h5 className="fw-bold mb-2">Fintech Data Analysis Dashboard (Power BI)</h5>
                    <p className="text-muted mb-3">
                      Finance dashboard with comprehensive visuals designed to quantify
                      and analyze key financial indicators.
                    </p>
                    <a
                      className="btn btn-outline-dark btn-sm"
                      href="https://drive.google.com/file/d/1hBVxh9hY-RG0Ig1gFmIz8Eaj6wS7mWnV/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Dashboard →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Teaching Focus */}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="fw-bold mb-3">Teaching Focus at Code Medha</h3>
              <div className="row g-3">
                {[
                  ["SQL Mastery", "Querying, joins, grouping, filtering, and KPI extraction using real datasets."],
                  ["Dashboards", "Power BI dashboards with business metrics—charts that answer questions, not just visuals."],
                  ["Analytics Thinking", "How to define metrics, interpret trends, and turn insights into decisions."],
                  ["Interview Prep", "Analyst-ready practice: case-style questions, SQL rounds, dashboards walkthroughs."],
                ].map(([title, desc]) => (
                  <div className="col-md-6" key={title}>
                    <div className="p-4 bg-white border rounded-4 h-100">
                      <h6 className="fw-bold mb-2">{title}</h6>
                      <p className="text-muted mb-0">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 d-flex justify-content-center gap-2 flex-wrap">
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
