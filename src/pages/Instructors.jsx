// src/pages/Instructors.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

// If you already have your photo in assets (it exists in your project),
// keep this import. If the path/name differs, adjust it.
import AdithyaImg from "../assets/AdithyaMukunda1.jpg";

/** Small helper avatar (initials) for instructors without images */
function InitialAvatar({ name }) {
  const initials = (name || "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <div
      className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
      style={{
        width: 84,
        height: 84,
        background: "linear-gradient(135deg,#0F2C59,#FF6B00)",
        color: "#fff",
        fontWeight: 800,
        fontSize: 24,
        letterSpacing: 1,
        flex: "0 0 auto",
      }}
      aria-label={name}
      title={name}
    >
      {initials}
    </div>
  );
}

function InstructorCard({ person }) {
  const navigate = useNavigate();

  const go = () => {
    if (!person.slug) return;
    navigate(`/instructors/${person.slug}`);
  };

  return (
    <div
      className="card border-0 shadow-sm rounded-4 h-100 p-4"
      role="button"
      tabIndex={0}
      onClick={go}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") go();
      }}
      style={{
        cursor: person.slug ? "pointer" : "default",
        transition: "transform .12s ease, box-shadow .12s ease",
      }}
      onMouseEnter={(e) => {
        if (!person.slug) return;
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div className="d-flex gap-3 align-items-center mb-3">
        {person.photo ? (
          <img
            src={person.photo}
            alt={person.name}
            className="rounded-circle shadow-sm"
            width="84"
            height="84"
            style={{ objectFit: "cover", flex: "0 0 auto" }}
          />
        ) : (
          <InitialAvatar name={person.name} />
        )}

        <div className="flex-grow-1">
          <h5 className="fw-bold mb-1">{person.name}</h5>
          <div className="text-muted small">{person.role}</div>
          {person.company ? (
            <div className="small mt-1">
              <span className="text-primary fw-semibold">{person.company}</span>
            </div>
          ) : null}
        </div>
      </div>

      {person.summary ? (
        <p className="text-muted mb-3" style={{ fontSize: ".95rem" }}>
          {person.summary}
        </p>
      ) : null}

      {person.points?.length ? (
        <ul className="text-muted mb-0 ps-3" style={{ fontSize: ".95rem" }}>
          {person.points.map((p, i) => (
            <li key={i} className="mb-1">
              {p}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-4">
        {person.slug ? (
          <button
            className="btn btn-outline-dark w-100"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go();
            }}
          >
            View Portfolio →
          </button>
        ) : (
          <div className="text-center">
            <span className="badge bg-primary px-3 py-2">Founder</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Instructors() {
  const instructorsTopRow = [
    {
      name: "Adithya Mukunda",
      role: "Instructor • Complete Development + App Dev",
      company: "Full stack Developer • Gramener Technologies",
      slug: "adithya",
      photo: AdithyaImg,
      summary:
        "Builds end-to-end web & app projects with students — focusing on real-world workflows, clean UI, and interview-ready outcomes.",
      points: [
        "Complete Development (Frontend + Backend)",
        "App Development (React Native)",
        "Project mentoring & portfolio guidance",
      ],
    },
    {
      name: "Sri Harsha Gade",
      role: "Instructor • Data Analytics",
      company: "AI/ML Engineer • Kirusa",
      slug: "sri-harsha",
      photo: null,
      summary:
        "Industry-focused analytics mentor — teaches SQL, dashboards, and how to think in metrics like real companies do.",
      points: ["SQL + Analytics fundamentals", "Dashboarding & reporting", "Interview preparation for analyst roles"],
    },
  ];

  const instructorsBottomRow = [
    {
      name: "Akhil Potla",
      role: "Instructor • DevOps + Automation Testing",
      company: "Backend & Automation + DevOps • Hexagon Technologies",
      slug: "akhil-potla",
      photo: null,
      summary:
        "Teaches deployment mindset + automation discipline — CI/CD basics, testing workflows, and practical DevOps habits.",
      points: ["CI/CD & deployment basics", "Automation testing practices", "Backend + DevOps workflows"],
    },
    {
      name: "Mahesh Boddu",
      role: "Instructor • DSA",
      company: "IIT Kharagpur (CSE ‘20) • Ex-Samsung • Telangana Govt",
      slug: "mahesh-boddu",
      photo: null,
      summary:
        "Strong DSA mentor focused on clarity and consistency — builds problem-solving patterns for interviews and coding rounds.",
      points: ["DSA foundations", "Interview problem patterns", "Consistency + strategy"],
    },
  ];

  return (
    <>
      <Navbar />

      <HeroSection
        title={<span style={{ color: "#000" }}>Founder & Instructors</span>}
        subtitle="Founder-led mission with working professionals as mentors — learn locally in Khammam with real industry guidance."
      />

      {/* Founder (Centered row, no portfolio) */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-9">
              <div className="p-4 p-md-5 bg-white border shadow-sm rounded-4 text-center">
                <div className="d-flex justify-content-center mb-3">
                  <InitialAvatar name="Malliswari Naga" />
                </div>

                <h2 className="fw-bold mb-1">Malliswari Naga</h2>
                <div className="text-muted mb-3">Founder</div>

                <p className="text-muted mb-3" style={{ maxWidth: 820, margin: "0 auto" }}>
                  A graduate from <strong>REC-Warangal</strong> with a communications background, Malliswari’s mission
                  is simple: make quality software education available to students in <strong>Khammam</strong>.
                </p>

                <p className="text-muted mb-3" style={{ maxWidth: 820, margin: "0 auto" }}>
                  When she had to send her son to <strong>Ameerpet, Hyderabad</strong>, the cost of staying in a PG and
                  coaching came to around <strong>₹2 lakhs</strong> in total. Even after spending that much, the training
                  quality was poor — and the stay itself was a meagre place to survive.
                </p>

                <p className="text-muted mb-0" style={{ maxWidth: 820, margin: "0 auto" }}>
                  That experience became the turning point. She decided to build a software training institute in Khammam
                  — and to ensure quality, she made sure all instructors are <strong>working professionals</strong>.
                </p>

                <div className="mt-4 d-flex justify-content-center gap-2 flex-wrap">
                  <a className="btn btn-brand" href="/contact">
                    Talk to us / Join demo
                  </a>
                  <a className="btn btn-outline-dark" href="https://wa.me/918639460402">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Adithya + Sri Harsha */}
          <div className="row g-4 mt-4">
            {instructorsTopRow.map((p) => (
              <div key={p.slug} className="col-12 col-md-6">
                <InstructorCard person={p} />
              </div>
            ))}
          </div>

          {/* Row 3: Akhil + Mahesh */}
          <div className="row g-4 mt-2">
            {instructorsBottomRow.map((p) => (
              <div key={p.slug} className="col-12 col-md-6">
                <InstructorCard person={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
