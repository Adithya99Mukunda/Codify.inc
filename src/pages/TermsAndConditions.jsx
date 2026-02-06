import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
  const effectiveDate = "06 Jan 2026";

  return (
    <>
      <Navbar />

      <main className="py-5" style={{ background: "#f9fafb" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <h1 className="fw-bold mb-2">Terms &amp; Conditions</h1>
                  <p className="text-muted mb-4">Effective date: {effectiveDate}</p>

                  <p>
                    These Terms &amp; Conditions govern your use of the Code Medha website and services.
                    By using our website or contacting/enrolling with us, you agree to these terms.
                  </p>

                  <h2 className="h5 fw-semibold mt-4">1) Use of website</h2>
                  <ul>
                    <li>Do not misuse the website or attempt unauthorized access.</li>
                    <li>Do not copy content (text/images) without permission.</li>
                  </ul>

                  <h2 className="h5 fw-semibold mt-4">2) Course information</h2>
                  <p>
                    Course outlines, timelines, tools, and fees may change periodically to improve outcomes.
                    The latest details shared by Code Medha will apply.
                  </p>

                  <h2 className="h5 fw-semibold mt-4">3) Payments</h2>
                  <ul>
                    <li>Fees are communicated during counselling/admission.</li>
                    <li>Payment schedules (if any) are shared at the time of enrollment.</li>
                  </ul>

                  <h2 className="h5 fw-semibold mt-4">4) Refunds</h2>
                  <p>
                    Refund decisions (if applicable) are subject to our internal policy and the specific
                    batch/enrollment conditions communicated at admission time.
                  </p>

                  <h2 className="h5 fw-semibold mt-4">5) Placement assistance</h2>
                  <p>
                    Placement assistance means resume support, interview prep, and guidance. Jobs depend on
                    skills, performance, attendance, and market conditions. We do not guarantee specific roles/salaries.
                  </p>

                  <h2 className="h5 fw-semibold mt-4">6) Student conduct</h2>
                  <p>
                    Students must maintain respectful behavior in class/online groups. Any misuse, harassment,
                    or academic dishonesty may lead to removal from the program.
                  </p>

                  <h2 className="h5 fw-semibold mt-4">7) Third-party links</h2>
                  <p>
                    The website may link to third-party services (WhatsApp, Instagram, etc.). We are not responsible
                    for their content or privacy practices.
                  </p>

                  <h2 className="h5 fw-semibold mt-4">8) Limitation of liability</h2>
                  <p>
                    We are not liable for indirect damages arising from using the website/services. We provide
                    content “as is” and aim for accuracy, but errors may occur.
                  </p>

                  <h2 className="h5 fw-semibold mt-4">9) Changes to terms</h2>
                  <p>
                    We may update these Terms &amp; Conditions from time to time. Continued use means you accept updates.
                  </p>

                  <h2 className="h5 fw-semibold mt-4">10) Contact</h2>
                  <p className="mb-0">
                    For questions, contact Code Medha at <strong>+91 86394 60402</strong> or visit us in{" "}
                    <strong>Khammam, Telangana</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
