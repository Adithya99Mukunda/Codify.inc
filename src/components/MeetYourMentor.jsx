import { FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import mentorImg from "../assets/AdithyaMukunda1.jpg";

const MeetYourMentor = () => {
  return (
    <section className="py-5 pb-5 mb-5" style={{ background: "#fefcf5" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Meet Your Mentor</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            {/* Card wrapped in Link */}
            <Link to="/portfolio" className="text-decoration-none text-dark">
              <div className="card border-0 shadow-sm p-4 mentor-card h-100">
                <div className="d-flex flex-column flex-md-row align-items-center text-md-start">
                  <img
                    src={mentorImg}
                    alt="Mentor"
                    className="rounded-circle me-md-4 mb-3 mb-md-0"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h5 className="fw-semibold">Adithya Mukunda</h5>
                    <p className="text-muted mb-2">
                      Fullstack Developer, UX Engineer & Coding Instructor from
                      Khammam. I teach HTML, CSS, JavaScript, React, Bootstrap,
                      Git and freelance readiness.
                    </p>
                    <p className="text-muted mb-0">
                      I don’t teach from theory. I teach from what I’ve built,
                      shipped, and broken. You’ll get real project insights and
                      practical guidance throughout.
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Call to Action Button */}
            <Link to="/contact" className="btn btn-outline-dark mt-4">
              Join the Next Batch <FaArrowRight className="ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetYourMentor;
