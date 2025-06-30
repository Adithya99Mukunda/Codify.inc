import {
  FaTools,
  FaBriefcase,
  FaLaptopCode,
  FaCertificate,
  FaChartLine,
  FaCompass,
} from "react-icons/fa";

const features = [
  {
    icon: FaTools,
    title: "Learn by building real projects",
    points: [
      "Gain hands-on experience",
      "Understand real-world use cases",
      "Build job-ready portfolio",
      "Boost confidence with practical skills",
      "Prepare for client projects & interviews",
    ],
  },
  {
    icon: FaBriefcase,
    title: "Freelance readiness",
    points: [
      "Learn how to price your work",
      "Write effective client proposals",
      "Plan and deliver projects on time",
      "Communicate professionally with clients",
      "Understand invoicing & feedback cycles",
    ],
  },
  {
    icon: FaLaptopCode,
    title: "Resume and GitHub setup",
    points: [
      "Create a clean developer resume",
      "Highlight projects the right way",
      "Get your GitHub profile recruiter-ready",
      "Push code with proper commits",
      "Showcase work like a pro",
    ],
  },
  {
    icon: FaCertificate,
    title: "Final certification",
    points: [
      "Printed certificate upon completion",
      "Proof of skills for interviews & clients",
      "Includes project links & skill breakdown",
      "Add to resume & LinkedIn profile",
      "Boosts trust during freelance pitching",
    ],
  },
  {
    icon: FaChartLine,
    title: "Weekly outcome tracker",
    points: [
      "Track your coding progress every week",
      "Stay accountable with learning milestones",
      "Fix gaps fast with feedback",
      "Build momentum through small wins",
      "Personal guidance if falling behind",
    ],
  },
  {
    icon: FaCompass,
    title: "Future Scope & Beyond",
    points: [
      "Build mobile apps with React Native",
      "Learn Node & Express to become Fullstack",
      "Master DSA for better problem-solving",
      "Prepare for interviews with confidence",
      "Start freelancing & earn independently",
    ],
  },
];

const UniqueSection = () => {
  return (
    <section
      className="py-5"
      style={{ background: "linear-gradient(to bottom, #fffef2, #f7f8f4)" }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-5">
          What Makes <span className="text-primary">Codify.ink</span> Unique?
        </h2>
        <div className="row">
          {features.map(({ icon: Icon, title, points }, idx) => (
            <div className="col-md-6 col-lg-4 mb-4" key={idx}>
              <div className="card h-100 border-0 shadow-sm p-4 feature-card">
                <div className="d-flex justify-content-center mb-3">
                  <Icon size={36} className="text-success" />
                </div>
                <h5 className="fw-semibold">{title}</h5>
                <ul className="text-start mt-3">
                  {points.map((point, i) => (
                    <li key={i} className="mb-2 text-dark">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
