// src/pages/InstructorMahesh.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function InstructorMahesh() {
  return (
    <>
      <Navbar />

      <HeroSection
        title={<span style={{ color: "#000" }}>Mahesh Boddu</span>}
        subtitle="DSA Instructor • IIT Kharagpur (CSE ’20) • Ex-Samsung • Telangana Govt"
      >
        <p className="lead mb-0">
          DSA mentor focused on interview problem-solving patterns, clarity of thinking,
          and consistent practice — built from real engineering experience.
        </p>
      </HeroSection>

      <section className="py-5">
        <div className="container">
          {/* About + Snapshot */}
          <div className="row g-4 align-items-start">
            <div className="col-lg-8">
              <h1 className="fw-bold mb-2">About</h1>
              <p className="text-muted">
                Mahesh Boddu is a Computer Science graduate from <strong>IIT Kharagpur (2020)</strong>.
                He worked at <strong>Samsung</strong> in a high-impact developer role and currently
                works with the <strong>Telangana Government</strong>.
              </p>
              <p className="text-muted">
                At Code Medha, Mahesh teaches DSA the way interviews demand it:
                fundamentals → patterns → timed practice → explanation-first approach.
                The goal is not just to “solve”, but to <strong>think clearly under pressure</strong>.
              </p>

              <div className="d-flex flex-wrap gap-2 mt-3">
                {[
                  "DSA Foundations",
                  "Problem-Solving Patterns",
                  "Interview Prep",
                  "Complexity & Optimization",
                  "Coding Rounds Strategy",
                  "Consistency & Practice",
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
                style={{ background: "linear-gradient(180deg,#ffffff,#f8f9fb)" }}
              >
                <h6 className="mb-2 text-center fw-bold">Instructor Snapshot</h6>
                <div className="small">
                  <div className="mb-2">
                    <strong>Specialization:</strong> DSA + Interview Patterns
                  </div>
                  <div className="mb-2">
                    <strong>Education:</strong> IIT Kharagpur (CSE, 2020)
                  </div>
                  <div className="mb-2">
                    <strong>Experience:</strong> Ex-Samsung, Telangana Govt
                  </div>
                </div>

                <div className="mt-3 d-grid gap-2">
                  <a className="btn btn-brand" href="/contact">
                    Talk to us
                  </a>
                  <a className="btn btn-outline-dark" href="/instructors">
                    Back to Instructors
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* What students will get */}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="fw-bold mb-3">What You’ll Learn With Mahesh</h3>

              <div className="row g-3">
                {[
                  [
                    "DSA Foundations",
                    "Arrays, strings, hashing, recursion, sorting, and complexity basics — built step-by-step.",
                  ],
                  [
                    "Core Patterns",
                    "Two pointers, sliding window, binary search, stacks/queues, prefix sums, greedy basics.",
                  ],
                  [
                    "Trees & Graphs",
                    "Traversal patterns, BFS/DFS, shortest paths basics, and interview-style graph questions.",
                  ],
                  [
                    "Dynamic Programming",
                    "DP intuition first, then classic patterns: knapsack, LIS, grid DP, partition DP.",
                  ],
                  [
                    "Interview Strategy",
                    "How to approach unknown problems, communicate clearly, and avoid common traps.",
                  ],
                  [
                    "Timed Practice",
                    "Weekly mock rounds and pattern-based drills to build speed + confidence.",
                  ],
                ].map(([title, desc]) => (
                  <div className="col-md-6" key={title}>
                    <div className="p-4 bg-white border rounded-4 h-100">
                      <h6 className="fw-bold mb-2">{title}</h6>
                      <p className="text-muted mb-0">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Teaching style */}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="fw-bold mb-3">Teaching Style</h3>
              <ul className="text-muted">
                <li><strong>Explain-first:</strong> intuition → approach → code → complexity.</li>
                <li><strong>Pattern library:</strong> learn reusable templates, not random tricks.</li>
                <li><strong>Consistency:</strong> small daily practice beats weekend cramming.</li>
                <li><strong>Interview-ready:</strong> communication + clarity matters as much as the answer.</li>
              </ul>

              <div className="mt-4 d-flex justify-content-center gap-2 flex-wrap">
                <a className="btn btn-brand" href="/contact">
                  Join Free Demo
                </a>
                <a className="btn btn-outline-dark" href="/courses/dsa">
                  View DSA Course
                </a>
              </div>
            </div>
          </div>

          {/* Note (no resume) */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="alert alert-light border rounded-4 mb-0">
                <strong>Note:</strong> This page is built from verified background details you provided.
                If you share Mahesh’s resume later, we can add projects, achievements, and a richer timeline.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
