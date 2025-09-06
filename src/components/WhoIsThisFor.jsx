import { FaUserGraduate, FaBriefcase, FaRocket } from "react-icons/fa";

const profiles = [
  {
    icon: <FaUserGraduate size={32} className="text-primary mb-2" />,
    title: "Beginners & College Students",
    desc: "No prior experience? Start from scratch and become fullstack-ready.",
  },
  {
    icon: <FaBriefcase size={32} className="text-primary mb-2" />,
    title: "Job Seekers & Career Switchers",
    desc: "Crack interviews, build real projects, and land your first dev role.",
  },
  {
    icon: <FaRocket size={32} className="text-primary mb-2" />,
    title: "Freelancers & Side Hustlers",
    desc: "Learn to pitch clients, manage projects, and earn independently.",
  },
];

const WhoIsThisFor = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Who Is This For?</h2>
        <div className="row justify-content-center">
          {profiles.map(({ icon, title, desc }, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 shadow-sm p-4 border-0 profile-card">
                <div className="d-flex justify-content-center mb-2">{icon}</div>
                <h5 className="fw-semibold mt-2">{title}</h5>
                <p className="text-muted mt-2">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
