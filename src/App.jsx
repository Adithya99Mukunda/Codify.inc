import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Curriculum from "./pages/Curriculum";
import Contact from "./pages/Contact";
import Roles from "./pages/Roles";
import Instructors from "./pages/Instructors";

// Courses
import CourseFrontend from "./pages/CourseFrontend";
import CourseFullstack6m from "./pages/CourseFullstack6m";
import CourseFullstack9m from "./pages/CourseFullstack9m";
import CourseDSA from "./pages/CourseDSA";
import CourseSoftSkills from "./pages/CourseSoftSkills";
import CourseAppDev from "./pages/CourseAppDev";

// Instructor portfolios
import Portfolio from "./pages/Portfolio"; // ← Adithya
import InstructorSriHarsha from "./pages/InstructorSriHarsha"; // ← Sri Harsha
import InstructorAkhil from "./pages/InstructorAkhil"; // ← Akhil Potla
import InstructorMahesh from "./pages/InstructorMahesh"; // ← Mahesh Boddu

function App() {
  return (
    <Routes>
      {/* Core pages */}
      <Route path="/" element={<Home />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/roles" element={<Roles />} />

      {/* Instructors hub */}
      <Route path="/instructors" element={<Instructors />} />

      {/* Instructor portfolios */}
      {/* <Route path="/instructors/adithya" element={<Portfolio />} /> */}
      <Route path="/instructors/sri-harsha" element={<InstructorSriHarsha />} />
      <Route path="/instructors/akhil-potla" element={<InstructorAkhil />} />
      <Route path="/instructors/mahesh-boddu" element={<InstructorMahesh />} />

      {/* Courses */}
      <Route path="/courses/frontend" element={<CourseFrontend />} />
      <Route path="/courses/fullstack-6m" element={<CourseFullstack6m />} />
      <Route path="/courses/fullstack-9m" element={<CourseFullstack9m />} />
      <Route path="/courses/dsa" element={<CourseDSA />} />
      <Route path="/courses/app-development" element={<CourseAppDev />} />
      <Route path="/courses/soft-skills" element={<CourseSoftSkills />} />
    </Routes>
  );
}

export default App;
