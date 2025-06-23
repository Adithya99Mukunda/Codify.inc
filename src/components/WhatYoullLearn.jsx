import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaTerminal,
    FaSass,
    FaBootstrap
  } from 'react-icons/fa';
  

const topics = [
  { icon: <FaHtml5 className="text-danger" />, title: "HTML5 & Structure" },
  { icon: <FaCss3Alt className="text-primary" />, title: "CSS3 & Responsive Design" },
 { icon: <FaSass style={{ color: "#CD6799" }} />, title: "SASS & Modular Styling" },
 { icon: <FaBootstrap style={{ color: "#7952B3" }} />, title: "Bootstrap Framework" },
  { icon: <FaJs className="text-warning" />, title: "JavaScript Deep Dive" },
  { icon: <FaReact className="text-info" />, title: "React" },
  { icon: <FaGitAlt style={{ color: "#F1502F" }} />, title: "Git & GitHub Workflows" },
  { icon: <FaTerminal className="text-success" />, title: "Command Line & Dev Tools" }
];


const WhatYoullLearn = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">What You’ll Learn</h2>
        <div className="row justify-content-center">
          {topics.map(({ icon, title }, idx) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={idx}>
              <div className="card h-100 p-4 border-0 shadow-sm learn-card text-center">
                <div className="display-5 mb-3">{icon}</div>
                <h6 className="fw-semibold">{title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;
