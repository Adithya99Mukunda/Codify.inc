import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { useState } from "react";

const Contact = () => {
  const [hasLaptop, setHasLaptop] = useState("Yes");

  return (
    <>
      <Navbar />
      <HeroSection
        title="Contact Us"
        subtitle="Have a question or want to join Code Medha? Fill in your details and we’ll reach out to you soon."
      />

      <section className="container py-5" id="contact">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <form action="https://formspree.io/f/movwqvrr" method="POST">
              <div className="mb-3">
                <label className="form-label ">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  required
                  maxLength="10"
                  inputMode="numeric"
                  pattern="\d{10}"
                  placeholder="10-digit phone number"
                  title="Enter a valid 10-digit number"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address (optional)</label>
                <input type="email" name="email" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Do you have a laptop?</label>
                <select
                  name="laptop"
                  className="form-select"
                  required
                  value={hasLaptop}
                  onChange={(e) => setHasLaptop(e.target.value)}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Current Status</label>
                <select name="status" className="form-select" required>
                  <option value="">Select one</option>
                  <option value="College Student">College Student</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Working Professional">
                    Working Professional
                  </option>
                  <option value="Career Switcher">Career Switcher</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Message / Question</label>
                <textarea
                  name="message"
                  rows="4"
                  className="form-control"
                  placeholder="Anything you want to ask..."
                />
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="confirmation"
                  required
                  id="offlineConfirm"
                />
                <label
                  className="form-check-label text-muted"
                  htmlFor="offlineConfirm"
                >
                  I understand Code Medha is an offline course conducted in
                  Khammam.
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
