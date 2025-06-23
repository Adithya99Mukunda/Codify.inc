const HeroSection = ({ title, subtitle, children }) => {
  return (
    <section className="hero section-alt text-center position-relative">
      <div className="container p-5">
        <h1 className="mb-3">{title}</h1>
        <p className="mt-3">{subtitle}</p>
        <div className="cta-buttons mt-4 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
          {children}
        </div>
      </div>

      
      {/* <div className="hero-bottom-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            fill="#f9fafb"
            d="M0,64L1440,0L1440,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default HeroSection;
