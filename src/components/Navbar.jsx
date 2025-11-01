import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm sticky-top">
      <div className="container px-3">
        {/* Logo */}
        <NavLink className="navbar-brand fw-bold" to="/">
          <img
            src={logo}
            alt="CodeMedha Logo"
            style={{
              height: "37px", // base size so navbar stays slim
              transform: "scale(3.7)", // visually enlarge
              marginTop: "7px", // align with text
              transformOrigin: "center", // scale from center
            }}
          />
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "700",
              fontSize: "1.4rem",
              // letterSpacing: "0.5px",
              marginLeft: "12px",
            }}
          >
            <span style={{ color: "#0F2C59" }}>Code</span>{" "}
            <span style={{ color: "#4CAF50", marginLeft: "1px" }}>Medha</span>
          </span>
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <FaBars size={22} />
        </button>

        {/* Nav Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/curriculum"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
