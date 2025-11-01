// src/pages/Courses.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
/**
 * Courses page for Code Medha
 * - Drop-in replacement for Curriculum page
 * - Uses your existing styles (index.css)
 * - Each card links to the course route (e.g. /courses/frontend)
 */

/* ---------- Data (edit / expand as you wish) ---------- */
const COURSES = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "HTML • CSS • JavaScript • React",
    duration: "3 months",
    fee: "₹20,000",
    excerpt:
      "Build responsive UIs, master JavaScript, and ship a portfolio with 3+ projects.",
    bullets: [
      "Project-based curriculum",
      "Git/GitHub + Deployment",
      "Mock interviews & resume",
    ],
    to: "/courses/frontend",
    cta: "View Curriculum",
  },
  {
    id: "fullstack-6m",
    title: "Fullstack Development",
    subtitle: "Frontend + Node/Express + DB",
    duration: "6 months",
    fee: "₹35,000",
    excerpt:
      "APIs, databases, team projects and deploy to the cloud. Real-world capstone included.",
    bullets: [
      "REST APIs & Auth basics",
      "Team project & code reviews",
      "Job-readiness coaching",
    ],
    to: "/courses/fullstack-6m",
    disabled: true,
    cta: "View Curriculum",
  },
  {
    id: "fullstack-9m",
    title: "Fullstack Development + Deployment",
    subtitle: "Frontend + Backend + Cloud + DevOps",
    duration: "9 months",
    fee: "₹45,000",
    excerpt:
      "End-to-end development — build, deploy, and maintain production-grade apps using modern DevOps workflows.",
    bullets: [
      "Fullstack project with CI/CD",
      "Docker & basic cloud deployment",
      "Advanced team collaboration & scaling",
    ],
    to: "/courses/fullstack-9m",
    cta: "View Curriculum",
  },

  {
    id: "dsa",
    title: "Concepts of DSA",
    subtitle: "Data Structures & Problem Solving",
    duration: "45 days",
    fee: "₹7,000",
    excerpt:
      "Foundational DSA patterns with practice tests and mock interviews.",
    bullets: ["Time/Space intuition", "Problem patterns", "Mock tests"],
    to: "/courses/dsa",
    disabled: true,
    cta: "View Curriculum",
  },
  {
    id: "app-dev",
    title: "App Development",
    subtitle: "React Native • Cross-Platform Application Development",
    duration: "3 months",
    fee: "₹25,000",
    excerpt:
      "Learn to build Android and iOS apps using a single React Native codebase. Covers UI, APIs, and deployment.",
    bullets: [
      "React Native fundamentals",
      "APIs & Navigation",
      "Publishing apps to Play Store",
    ],
    to: "/courses/app-development",
    cta: "View Curriculum",
  },
  {
    id: "soft-skills",
    title: "Soft Skills & Interview Behaviour",
    subtitle: "Communication • Confidence • Placement",
    duration: "1 month",
    fee: "₹5,000",
    excerpt:
      "Mock HR rounds, body language, resume & LinkedIn polish — practical and live.",
    bullets: ["Behavioral questions", "Presentation skills", "Peer feedback"],
    to: "/courses/soft-skills",
    disabled: true,
    cta: "View Curriculum",
  },
];

/* ---------- Small helper components ---------- */
function CourseCard({ course }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 course-card">
        <div className="card-body d-flex flex-column">
          <div className="d-flex gap-2 mb-2 flex-wrap">
            {course.duration && (
              <span className="badge badge-duration text-white">
                {course.duration}
              </span>
            )}
            {course.fee && (
              <span className="badge badge-fee text-white">{course.fee}</span>
            )}
          </div>

          <h5 className="card-title">{course.title}</h5>
          {course.subtitle && (
            <p className="text-muted small mb-2">{course.subtitle}</p>
          )}
          <p className="card-text text-muted mb-3">{course.excerpt}</p>

          {Array.isArray(course.bullets) && course.bullets.length > 0 && (
            <ul className="text-muted small ps-3 mb-3">
              {course.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}

          <div className="mt-auto">
            <Link to={course.to} className="btn btn-brand w-100">
              {course.cta || "View"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Main component ---------- */
export default function Courses() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <HeroSection
        title={
          <>
            <span style={{ color: "#000" }}>Choose Your Path</span>
          </>
        }
        subtitle="Project-based batches in Khammam • Practical curriculum • Portfolio & placement prep"
      ></HeroSection>

      {/* COURSES GRID */}
      <section className="py-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-3">
            <h2 className="section-title mb-0">Programs</h2>
            {/* <small className="text-muted">{COURSES.length} active courses</small> */}
          </div>

          <div className="row g-4">
            {COURSES.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING / CTA */}
      <section className="py-5">
        <div className="container">
          <div className="card-soft p-4 text-center">
            <h3 className="h4 fw-bold mb-2">Not sure where to start?</h3>
            <p className="text-muted mb-3">
              Join a free demo session and talk to a mentor.
            </p>

            <div className="d-flex gap-2 justify-content-center">
              <Link to="/roles" className="btn btn-brand">
                Understand The Roles in IT
              </Link>
              <Link to="/contact" className="btn btn-outline-dark">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
