// src/pages/Contact.jsx
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/movwqvrr";
const SYLLABUS_PDF = "/handouts/syllabus.pdf"; // change if your PDF path is different
const WHATSAPP_NUMBER = "918639460402";

export default function Contact() {
  // form state (kept minimal)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [intent, setIntent] = useState("Join next batch");
  const [message, setMessage] = useState("");
  const [showMore, setShowMore] = useState(false); // "Add details"
  const [showBatch, setShowBatch] = useState(false); // fees & batches toggle
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null); // { ok, text }

  // small helper to build a WhatsApp prefill URL
  const waPrefill = (chosenIntent = intent) => {
    const base = `https://wa.me/${WHATSAPP_NUMBER}`;
    const txt = encodeURIComponent(
      `Hi Adithya, I want to ${chosenIntent}. Name: ${name || "-"} Phone: ${phone || "-"}`
    );
    return `${base}?text=${txt}`;
  };

  const numericPhone = (v) => v.replace(/\D/g, "").slice(0, 10);

  // minimal AJAX submit to Formspree
  const handleSubmit = async (e) => {
    e?.preventDefault();
    setFeedback(null);

    if (!name.trim() || !phone.trim()) {
      setFeedback({ ok: false, text: "Name and WhatsApp number are required." });
      return;
    }

    setLoading(true);
    const fd = new FormData();
    fd.append("_subject", `Contact — ${intent}`);
    fd.append("name", name.trim());
    fd.append("phone", phone.trim());
    fd.append("email", email.trim());
    fd.append("intent", intent);
    fd.append("message", message.trim());

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setFeedback({ ok: true, text: "Thanks — message received. We’ll reply within 24 hours." });
        // small success actions: if user wanted syllabus, trigger download link
        if (intent.toLowerCase().includes("syllabus")) {
          // open syllabus in new tab
          window.open(SYLLABUS_PDF, "_blank");
        }
        // clear light fields to reduce friction for another submit
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        setFeedback({ ok: false, text: data.error || "Could not send — try WhatsApp." });
      }
    } catch (err) {
      setFeedback({ ok: false, text: "Network error — try WhatsApp for fastest response." });
    } finally {
      setLoading(false);
    }
  };

  // quick intent action: if user picks quick intent and has phone+name -> auto-submit
  const pickIntent = (it) => {
    setIntent(it);
    // if user already filled minimal fields and intent is low-friction (Get syllabus / Ask about fees)
    if (name.trim() && phone.trim() && (it === "Get syllabus" || it === "Ask about fees")) {
      // allow tiny delay for state update then submit
      setTimeout(() => {
        document.getElementById("contact-form")?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
      }, 80);
    }
  };

  return (
    <>
      <Navbar />
      <HeroSection
        title="Contact Us"
        subtitle="Quick contact for batches, syllabus or pricing — WhatsApp is fastest."
      />

      <main className="container py-5" id="contact">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="contact-topstrip mb-3">
              <strong>Next batch:</strong> <span>10 Nov • Fee ₹35,000 • Seats left: 6</span>
              <button className="link-btn ms-3" onClick={() => setShowBatch((s) => !s)}>
                {showBatch ? "Hide details" : "Show fees & next batches"}
              </button>
            </div>

            {showBatch && (
              <div className="batch-panel mb-4">
                <ul>
                  <li><strong>Fullstack 6 months</strong> — Next: 10 Nov • Fee ₹35,000</li>
                  <li><strong>App Dev 3 months</strong> — Next: 05 Dec • Fee ₹25,000</li>
                  <li><strong>Demo:</strong> Free weekly demo — register for a slot</li>
                </ul>
              </div>
            )}

            <div className="contact-card p-4 rounded-4 shadow-sm bg-white">
              <h2 className="mb-1">Let’s get you into the right batch</h2>
              <p className="text-muted mb-3">Pick what you want and leave minimal details — or jump to WhatsApp for instant replies.</p>

              {/* INTENT PILLS */}
              <div className="mb-3 intent-pills">
                {["Join next batch", "Get syllabus", "Ask about fees", "Career guidance"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={`pill ${intent === p ? "active" : ""}`}
                    onClick={() => pickIntent(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <form id="contact-form" onSubmit={handleSubmit} className="row g-3" noValidate>
                <div className="col-md-6">
                  <label className="form-label">Full name</label>
                  <input
                    name="name"
                    className="form-control"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">WhatsApp number</label>
                  <input
                    name="phone"
                    className="form-control"
                    required
                    value={phone}
                    onChange={(e) => setPhone(numericPhone(e.target.value))}
                    placeholder="10-digit phone"
                    maxLength={10}
                    inputMode="numeric"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Email (optional)</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                  />
                </div>

                {/* message hidden until user clicks "Add details" */}
                {showMore && (
                  <div className="col-12">
                    <label className="form-label">Message (optional)</label>
                    <textarea
                      name="message"
                      rows={3}
                      className="form-control"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="A line about your background or goals (optional)"
                    />
                  </div>
                )}

                <div className="col-12 d-flex gap-2 align-items-center">
                  <button
                    type="button"
                    className="btn btn-outline-secondary small"
                    onClick={() => setShowMore((s) => !s)}
                  >
                    {showMore ? "Hide details" : "Add details"}
                  </button>

                  <a
                    className="btn btn-whatsapp quick-wa"
                    href={waPrefill(intent)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp us <span className="ms-1">→</span>
                  </a>

                  <button type="submit" className="btn btn-primary ms-auto" disabled={loading}>
                    {loading ? "Sending…" : "Send"}
                  </button>
                </div>

                {/* minimal proof + feedback */}
                {feedback && (
                  <div className={`mt-3 ${feedback.ok ? "feedback-ok" : "feedback-err"}`}>
                    {feedback.text}
                    {feedback.ok && (
                      <span className="ms-3">
                        <a href={waPrefill(intent)} target="_blank" rel="noopener noreferrer"> Open WhatsApp</a>
                      </span>
                    )}
                  </div>
                )}
              </form>
            </div>

            {/* small FAQ (collapsed by default) */}
            <details className="mt-4 small-faq">
              <summary className="fw-semibold">Quick FAQ — click to expand</summary>
              <div className="mt-2">
                <p><strong>How long is the course?</strong> 6 months for Fullstack, 3 months for App Dev — hands-on, offline.</p>
                <p><strong>Installments?</strong> Yes — contact on WhatsApp for EMI options.</p>
                
              </div>
            </details>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
