import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
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
                  <h1 className="fw-bold mb-2">Privacy Policy</h1>
                  <p className="text-muted mb-4">Effective date: {effectiveDate}</p>

                  <p>
                    This Privacy Policy explains how Code Medha ("we", "us", "our") collects, uses,
                    and protects your information when you visit our website, contact us, or enroll in
                    our training programs.
                  </p>

                  <h2 className="h5 fw-semibold mt-4">Information we collect</h2>
                  <ul>
                    <li><strong>Contact details:</strong> name, phone number, email, and messages you submit.</li>
                    <li><strong>Course enquiry details:</strong> course interest, schedule preference, etc.</li>
                    <li><strong>Basic usage data:</strong> device/browser, pages visited, referral source (analytics).</li>
                    <li><strong>Advertising data:</strong> aggregated ad performance data (e.g., Meta) as per platform policies.</li>
                  </ul>

                  <h2 className="h5 fw-semibold mt-4">How we use your information</h2>
                  <ul>
                    <li>To respond to enquiries and share course details.</li>
                    <li>To manage demos, admissions, and student support.</li>
                    <li>To improve our website and offerings.</li>
                    <li>To measure and optimize marketing campaigns.</li>
                  </ul>

                  <h2 className="h5 fw-semibold mt-4">Cookies & analytics</h2>
                  <p>
                    We may use cookies and similar technologies for analytics and performance. You can
                    control cookies through your browser settings.
                  </p>

                  <h2 className="h5 fw-semibold mt-4">Sharing of information</h2>
                  <p>We do not sell your personal information. We may share limited data with:</p>
                  <ul>
                    <li><strong>Service providers</strong> (hosting/analytics) for operating the website.</li>
                    <li><strong>Advertising platforms</strong> (e.g., Meta) for running/measuring ads.</li>
                    <li><strong>Legal authorities</strong> if required by law.</li>
                  </ul>

                  <h2 className="h5 fw-semibold mt-4">Data retention</h2>
                  <p>
                    We keep information only as long as needed for the purposes above or as required by law.
                  </p>

                  <h2 className="h5 fw-semibold mt-4">Your choices</h2>
                  <ul>
                    <li>You can request access, correction, or deletion of your data.</li>
                    <li>You can opt out of marketing messages anytime.</li>
                  </ul>

                  <h2 className="h5 fw-semibold mt-4">Contact</h2>
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
