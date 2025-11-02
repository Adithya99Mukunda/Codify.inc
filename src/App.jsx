import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Curriculum from './pages/Curriculum';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio'; 
import CourseFrontend from './pages/CourseFrontend';
import CourseFullstack6m from './pages/CourseFullstack6m';
import CourseFullstack9m from './pages/CourseFullstack9m';
import CourseDSA from './pages/CourseDSA';
import CourseSoftSkills from './pages/CourseSoftSkills';
import CourseAppDev from './pages/CourseAppDev';
import Roles from './pages/Roles';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} /> 
      <Route path="/courses/frontend" element={<CourseFrontend />} />
      <Route path="/courses/fullstack-9m" element={<CourseFullstack9m />} />
      <Route path="/courses/fullstack-6m" element={<CourseFullstack6m />} />
      <Route path="/courses/dsa" element={<CourseDSA />} />
      <Route path="/courses/app-development" element={<CourseAppDev />} />
      <Route path="/courses/soft-skills" element={<CourseSoftSkills />} />
      <Route path="/roles" element={<Roles />} />
    </Routes>
  );
}

export default App;
