import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Curriculum from './pages/Curriculum';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio'; // Uncomment when ready

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="/portfolio" element={<Portfolio />} /> 
    </Routes>
  );
}

export default App;
