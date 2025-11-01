// src/pages/CourseDSA.jsx
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

/* --- DSA course page --- */
export default function CourseDSA() {
  return (
    <>
      <Navbar />

      <HeroSection
        title={
          <>
            <span style={{ color: "#000" }}>Concepts of DSA</span>
          </>
        }
        subtitle="Fundamentals of algorithms & data structures — problem-solving focused (45 days)"
      >
        <p className="lead mb-0">
          Short, intensive DSA track that teaches core patterns, sorting, and
          essential data structures with interview practice.
        </p>
      </HeroSection>

      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-8">
              <h1 className="fw-bold">Concepts of DSA</h1>
              <p className="text-muted">
                Duration: <strong>45 days</strong> • Fee:{" "}
                <strong>₹7,000</strong>
              </p>
            </div>
            <aside className="col-lg-4">
              <div
                className="card p-4 shadow-sm border-0 rounded-4"
                style={{
                  background: "linear-gradient(180deg,#ffffff,#f8f9fb)",
                }}
              >
                <h6 className="mb-2 text-center fw-bold">Course Snapshot</h6>
                <div className="small mb-3">
                  <div>
                    <strong>Duration:</strong> 45 days
                  </div>
                  <div>
                    <strong>Fee:</strong> ₹7,000
                  </div>
                  <div>
                    <strong>Format:</strong> Offline / Cohort
                  </div>
                </div>

                <h6 className="mb-2 text-center">Skills you'll learn</h6>
                <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                  <span className="badge text-bg-warning text-dark">
                    Algorithms
                  </span>
                  <span className="badge text-bg-info">Data Structures</span>
                  <span className="badge text-bg-light border">
                    Problem Solving
                  </span>
                  <span className="badge text-bg-light border">
                    Interview Prep
                  </span>
                </div>

                <h6 className="mb-2 text-center">Who should join?</h6>
                <p className="small text-muted text-center">
                  Students and devs who want to improve problem-solving and
                  interview readiness.
                </p>
              </div>
            </aside>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h4 className="my-4 text-center">Course Timeline</h4>
              <div className="row g-3 my-3 justify-content-center">
                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-3 rounded-4">
                    <i className="bi bi-sort-numeric-up fs-2 text-primary mb-2"></i>
                    <h6 className="fw-bold mb-1">Sorting</h6>
                    <p className="small text-muted mb-0">20 days</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-3 rounded-4">
                    <i className="bi bi-layout-text-window-reverse fs-2 text-info mb-2"></i>
                    <h6 className="fw-bold mb-1">Data Structures</h6>
                    <p className="small text-muted mb-0">20 days</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="timeline-card h-100 text-center p-3 rounded-4">
                    <i className="bi bi-person-badge-fill fs-2 text-danger mb-2"></i>
                    <h6 className="fw-bold mb-1">Interview Prep</h6>
                    <p className="small text-muted mb-0">5 days</p>
                  </div>
                </div>
              </div>

              <h4 className="my-4 text-center">Curriculum</h4>
              <div className="mx-auto" style={{ maxWidth: "900px" }}>
                <div className="accordion" id="dsaAccordion">
                  {/* Sorting Techniques */}
                  <SubtopicGroup
                    id="sorting"
                    title="🔀 Sorting Techniques"
                    topics={[
                      {
                        id: "bubble",
                        title: "Bubble Sort",
                        icon: "bi bi-arrow-repeat text-secondary",
                        items: [
                          "Algorithm & swaps",
                          "Time complexity (O(n²))",
                          "When it’s used (teaching & tiny lists)",
                        ],
                      },
                      {
                        id: "selection",
                        title: "Selection Sort",
                        icon: "bi bi-signpost-split text-secondary",
                        items: [
                          "Selection principle",
                          "Time complexity (O(n²))",
                          "In-place sorting notes",
                        ],
                      },
                      {
                        id: "insertion",
                        title: "Insertion Sort",
                        icon: "bi bi-arrow-up-right-square text-secondary",
                        items: [
                          "Build sorted prefix",
                          "Good for small/mostly-sorted arrays",
                          "Time complexity (O(n²))",
                        ],
                      },
                      {
                        id: "merge",
                        title: "Merge Sort",
                        icon: "bi bi-shuffle text-secondary",
                        items: [
                          "Divide & conquer",
                          "Stable sort, O(n log n)",
                          "Merge step & extra memory",
                        ],
                      },
                      {
                        id: "quick",
                        title: "Quick Sort",
                        icon: "bi bi-lightning-charge-fill text-warning",
                        items: [
                          "Partitioning (Lomuto / Hoare)",
                          "Average O(n log n), worst O(n²)",
                          "In-place & practical performance",
                        ],
                      },
                      {
                        id: "heap",
                        title: "Heap Sort",
                        icon: "bi bi-arrow-bar-up text-secondary",
                        items: [
                          "Heapify & extract-max/min",
                          "O(n log n) with in-place heap",
                          "Not stable",
                        ],
                      },
                      {
                        id: "counting",
                        title: "Counting / Radix / Bucket",
                        icon: "bi bi-grid-3x3-gap-fill text-secondary",
                        items: [
                          "Non-comparison sorts (counting, radix, bucket)",
                          "Linear-ish time for small key ranges",
                          "Use-cases and limitations",
                        ],
                      },
                      {
                        id: "shell",
                        title: "Shell Sort",
                        icon: "bi bi-arrow-left-right text-secondary",
                        items: [
                          "Gap-based insertion improvements",
                          "Practical speedups over simple O(n²) sorts",
                        ],
                      },
                    ]}
                  />

                  {/* Data Structures */}
                  <SubtopicGroup
                    id="datastructures"
                    title="🗄️ Core Data Structures"
                    topics={[
                      {
                        id: "stacks",
                        title: "Stacks",
                        icon: "bi bi-stack text-info",
                        items: [
                          "LIFO principle",
                          "Operations: push, pop, peek",
                          "Use-cases: recursion, expression evaluation",
                        ],
                      },
                      {
                        id: "queues",
                        title: "Queues",
                        icon: "bi bi-queue-fill text-info",
                        items: [
                          "FIFO principle",
                          "Variants: circular, deque, priority queue",
                          "Use-cases: scheduling, buffering",
                        ],
                      },
                      {
                        id: "linkedlists",
                        title: "Linked Lists",
                        icon: "bi bi-link-45deg text-info",
                        items: [
                          "Singly, doubly, circular lists",
                          "Insertion/deletion complexity",
                          "When to use vs arrays",
                        ],
                      },
                      {
                        id: "trees",
                        title: "Trees (BST & more)",
                        icon: "bi bi-tree-fill text-success",
                        items: [
                          "Binary Trees, Binary Search Trees",
                          "Tree traversals (in/pre/post)",
                          "Balanced trees & basic intro to AVL/Red-Black",
                        ],
                      },
                      {
                        id: "graphs",
                        title: "Graphs",
                        icon: "bi bi-diagram-3-fill text-success",
                        items: [
                          "Representation: adjacency list/matrix",
                          "BFS & DFS traversals",
                          "Shortest path basics (Dijkstra intro)",
                        ],
                      },
                      {
                        id: "hashmaps",
                        title: "Hash Maps / Hash Tables",
                        icon: "bi bi-hash text-warning",
                        items: [
                          "Hashing concept & collisions",
                          "Open addressing vs chaining",
                          "Use-cases & complexity",
                        ],
                      },
                    ]}
                  />

                  {/* Interview patterns note */}
                  <div className="accordion-item main-topic mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button main-heading collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#patternsCollapse"
                      >
                        🔎 Problem Patterns & Interview Prep
                      </button>
                    </h2>
                    <div
                      id="patternsCollapse"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body p-0">
                        <ul className="styled-list">
                          <li>Two pointers, sliding window</li>
                          <li>Divide & conquer patterns</li>
                          <li>Greedy patterns & DP intro</li>
                          <li>Practice strategy: timed mocks + code reviews</li>
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
                    <i className="bi bi-braces fs-4 text-primary mb-2"></i>
                    <p className="mb-0 small">
                      Algorithmic problem-solving confidence
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-10">
                  <div className="card text-center p-3 h-100">
                    <i className="bi bi-clock-history fs-4 text-dark mb-2"></i>
                    <p className="mb-0 small">
                      Timed practice & speed improvements
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-10">
                  <div className="card text-center p-3 h-100">
                    <i className="bi bi-award fs-4 text-success mb-2"></i>
                    <p className="mb-0 small">Prepared for coding interviews</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 d-flex justify-content-center gap-2">
                <a className="btn btn-brand" href="https://wa.me/918639460402">
                  Join Free Demo
                </a>
                <Link className="btn btn-outline-dark" to="/contact">
                  Apply Now
                </Link>
                <a
                  className="btn btn-outline-secondary"
                  href="/handouts/dsa.pdf"
                  download
                >
                  Download PDF
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
