import { FaPalette, FaCogs, FaReact, FaTools, FaBullseye } from "react-icons/fa";

const content = [
  {
    icon: <FaPalette className="text-primary fs-1 me-3" />,
    title: "The UX Layer",
    text: "We begin with the skeleton—HTML for structure, then CSS to shape its look and feel. You'll master spacing, layouts, colors, and how design impacts usability."
  },
  {
    icon: <FaCogs className="text-warning fs-1 me-3" />,
    title: "JavaScript – Where Things Get Interesting",
    text: "Once it looks good, we make it work. JavaScript brings interaction, handles logic, validates forms, fetches APIs, and powers all the magic."
  },
  {
    icon: <FaReact className="text-info fs-1 me-3" />,
    title: "The React Framework - Where Things Get Easy",
    text: "Learn how big companies break complex UIs into components. We'll cover state management, props, router, API calls, and build modern apps."
  },
  {
    icon: <FaTools className="text-success fs-1 me-3" />,
    title: "Tools That Matter",
    text: "We'll go beyond code—use DevTools, master Git, push to GitHub, and use debugging tools like a real dev. Your workflow becomes professional."
  },
  {
    icon: <FaBullseye className="text-danger fs-1 me-3" />,
    title: "Career Prep",
    text: "You'll learn how to build your portfolio, polish your resume and LinkedIn, and even prepare for mock interviews and freelance pitching."
  }
];

const CurriculumContent = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">What You’ll Actually Learn</h2>
        <div className="row g-4">
          {content.map((item, idx) => (
            <div className="col-md-12 d-flex" key={idx}>
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumContent;
