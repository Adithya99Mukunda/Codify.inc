import { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import UniqueSection from '../components/UniqueSection';
import WhoIsThisFor from '../components/WhoIsThisFor';
import WhatYoullLearn from '../components/WhatYoullLearn';
import MeetYourMentor from '../components/MeetYourMentor';
import DemoModal from '../components/Modal';
import Footer from '../components/Footer';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />

      <HeroSection
        title={
          <>
            <span style={{ color: '#ff6b00' }}>Become a Job-Ready</span>{' '}
            Frontend Developer
          </>
        }
        subtitle="Offline training in Khammam to help you master HTML, CSS, JS & React — with a portfolio, certification, and freelance readiness."
      >
        <button
          className="btn btn-gradient"
          onClick={() => setShowModal(true)}
        >
          Join Free Demo
        </button>
        <a
          href="https://wa.me/918639460402"
          className="btn btn-outline-danger ms-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact on WhatsApp
        </a>

        {/* Free Demo Modal */}
        <DemoModal show={showModal} handleClose={() => setShowModal(false)} />
      </HeroSection>

      <UniqueSection />
      <WhoIsThisFor />
      <WhatYoullLearn />
      <MeetYourMentor />
      <Footer />
    </>
  );
};

export default Home;
