import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section text-light">
      <div className="container py-4">
        <div className="row gy-4 align-items-center">

          {/* Logo + Address */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-2">
              Tech <span className="text-accent">Mukunda</span>
            </h5>
            <p className="small mb-1">
              <FaMapMarkerAlt className="me-2 text-white" />
              Khammam, Telangana
            </p>
            <p className="small mb-0">
              <FaPhoneAlt className="me-2 text-white" />
              +91 86394 60402
            </p>
          </div>

          {/* Socials */}
          <div className="col-md-4 text-center">
            {/* <a
              href="https://instagram.com/adithya.ink"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-none d-block mb-2 small"
            >
              <FaInstagram className="me-2 text-pink" />
              @adithya.ink
            </a> */}
            <a
              href="https://wa.me/918639460402"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-sm"
            >
              <FaWhatsapp className="me-2" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Footer Note */}
          <div className="col-md-4 text-center text-md-end">
            <p className="mb-1 small">
              Made with <FaHeart className="text-danger" /> in Khammam
            </p>
            <p className="mb-0 small">&copy; {new Date().getFullYear()} Code Medha</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
