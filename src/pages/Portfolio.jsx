// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import HeroSection from "../components/HeroSection";
// import Footer from "../components/Footer";
// import ProjectModal from "../components/ProjectModal";
// import Dubai from "../assets/Dubai-command.jpg";
// import AiEducator from "../assets/AiEducator.png";
// import WKCaseLaws from "../assets/Wk-Case-Laws.jpg";
// import Arcadia from "../assets/arcadia.png";
// import Loughs from "../assets/LoughsAgency.jpg";
// import Reddy from "../assets/ReddyLabs.png";
// import Adithya from "../assets/AdithyaMukunda1.jpg";

// const projects = [
//   {
//     key: "dubai",
//     title: "Dubai Tourism Dashboard",
//     role: "Frontend Developer (JavaScript, Bootstrap, SaSS, Gramex)",
//     description:
//       "Responsive dashboards for Dubai Tourism across iPad and 5760×1080 ultra-wide displays.",
//     skills: ["JavaScript", "Bootstrap", "SaSS", "Gramex", "Responsive UI"],
//     challenges: [
//       "Two target displays: iPad + 5760×1080 wall",
//       "Conditional layouts for extreme aspect ratios",
//       "Delivered under tight deadlines",
//     ],
//     image: Dubai,
//   },
//   {
//     key: "wk",
//     title: "WK Case Laws – Legal Dashboard",
//     role: "Frontend Developer (React.js)",
//     description:
//       "Built a legal analytics dashboard for a US law firm with reusable React components.",
//     skills: [
//       "React.js",
//       "API Integration",
//       "Frontend Engineering",
//       "UI Design",
//     ],
//     challenges: [
//       "Rendered complex nested data efficiently",
//       "Ensured clean UI for long-form legal content",
//       "Optimized for internal enterprise usage",
//     ],
//     image: WKCaseLaws,
//   },
//   {
//     key: "aiedu",
//     title: "AiEducator – EdTech Platform",
//     role: "Fullstack Developer (Angular, Express.js, Django)",
//     description:
//       "Personalized learning modules with Angular UI, Express APIs, and Django backend.",
//     skills: [
//       "Angular",
//       "Express.js",
//       "Django",
//       "REST APIs",
//       "Perf Optimization",
//     ],
//     challenges: [
//       "Integrated AI-driven math modules",
//       "Scalable state and routing in Angular",
//       "Improved load time with code splitting",
//     ],
//     image: AiEducator,
//   },
//   {
//     key: "arcadia",
//     title: "Arcadia – Energy Analytics",
//     role: "Frontend Developer",
//     description:
//       "Responsive dashboards and UI components for Arcadia’s clean energy platform.",
//     skills: ["React", "Chart.js", "Responsive UI", "Dashboard Development"],
//     challenges: [
//       "Handled high-volume energy datasets",
//       "Built interactive data visualizations",
//       "Ensured cross-browser compatibility",
//     ],
//     image: Arcadia,
//   },
//   {
//     key: "loughs",
//     title: "Loughs Agency – Environmental Dashboard",
//     role: "Frontend Developer (React.js)",
//     description:
//       "Developed a responsive dashboard for monitoring environmental data across regions.",
//     skills: ["React", "Bootstrap", "API Integration", "Responsive Design"],
//     challenges: [
//       "Integrated real-time environmental data",
//       "Reusable UI components",
//       "Optimized for desktop and tablets",
//     ],
//     image: Loughs,
//   },
//   {
//     key: "drreddy",
//     title: "Dr. Reddy’s Laboratories – Engagement Platform",
//     role: "Frontend Developer (React.js)",
//     description:
//       "Enhanced user engagement by 30% through a redesigned platform for Dr. Reddy’s.",
//     skills: ["React.js", "UI/UX", "Performance Optimization", "Responsive UI"],
//     challenges: [
//       "Boosted engagement by 30%",
//       "Optimized component rendering",
//       "Consistent cross-platform UI",
//     ],
//     image: Reddy,
//   },
// ];

// const Portfolio = () => {
//   const [selected, setSelected] = useState(null);
//   return (
//     <>
//       <Navbar />
//       <HeroSection
//         title="Hi, I'm Adithya 👋"
//         subtitle="I'm a UX & UI Engineer and Fullstack Developer with 5+ years of experience crafting clean, responsive, and accessible web interfaces. I specialize in HTML, CSS, Bootstrap, Tailwind, JavaScript, Angular, and React."
//       />

//       {/* About Me Section */}
//       <section id="about" className="py-5">
//         <div className="container">
//           <h2 className="text-center mb-5">About Me</h2>
//           <div className="row align-items-center justify-content-center">
//             <div className="col-md-4 text-center mb-4 mb-md-0">
//               <img
//                 src={Adithya}
//                 alt="Adithya"
//                 className="rounded-circle"
//                 width="180"
//                 height="180"
//               />
//             </div>
//             <div className="col-md-8">
//               <div className="p-4 rounded bg-fff">
//                 <p>
//                   Hi! I’m Adithya — a UI/UX Engineer and Fullstack Developer
//                   with 5 years of experience. I craft clean, responsive, and
//                   user-centric interfaces using modern frameworks like React,
//                   Angular, and Tailwind. On the backend, I work with Node.js,
//                   Express, and MySQL to build scalable APIs and database
//                   solutions, ensuring seamless end-to-end applications.
//                 </p>
//                 <p>
//                   I bridge design and development — turning ideas into
//                   functional products. From Figma prototypes to production-ready
//                   code, I build scalable, responsive, and user-focused
//                   applications. Whether it’s crafting intuitive UIs or
//                   integrating robust backends, I deliver solutions that balance
//                   usability with performance.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-5">
//         <div className="container">
//           <h2 className="mb-4 text-center">Projects</h2>
//           <div className="row g-4">
//             {projects.map((p) => (
//               <div className="col-md-4" key={p.key}>
//                 <div className="card h-100 shadow-sm">
//                   <img
//                     src={p.image}
//                     className="card-img-top"
//                     alt={p.title}
//                     style={{ objectFit: "cover", height: "200px" }}
//                   />
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="fw-bold">{p.title}</h5>
//                     <p className="text-muted small mb-1">
//                       <strong>Role:</strong> {p.role}
//                     </p>
//                     <p className="small text-dark">{p.description}</p>
//                     <button
//                       className="btn btn-outline-dark btn-sm w-100 d-flex align-items-center justify-content-between mt-auto"
//                       onClick={() => setSelected(p)}
//                     >
//                       <span>View details</span>
//                       <span aria-hidden="true">›</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Modal */}
//       <ProjectModal project={selected} handleClose={() => setSelected(null)} />

//       {/* Skills Section */}
//       <section id="skills" className="py-5">
//         <div className="container">
//           <h2 className="text-center mb-4">Skills</h2>
//           <div className="row text-center g-4">
//             {[
//               { name: "HTML5", color: "E34F26" },
//               { name: "SASS", color: "CC6699" },
//               { name: "Bootstrap", color: "7952B3" },
//               { name: "Tailwind CSS", color: "06B6D4" },
//               { name: "JavaScript", color: "F7DF1E" },
//               { name: "TypeScript", color: "3178C6" },
//               { name: "React", color: "61DAFB" },
//               {
//                 name: "React Native",
//                 icon: "https://img.icons8.com/color/48/react-native.png",
//               },
//               { name: "Node.js", color: "339933" },
//               { name: "Express", color: "000000" },
//               { name: "Git", color: "F05032" },
//               { name: "GitHub", color: "181717" },
//               {
//                 name: "DevTools",
//                 icon: "https://img.icons8.com/ios-filled/50/000000/developer-mode.png",
//               },
//               {
//                 name: "Command Line",
//                 icon: "https://img.icons8.com/ios-filled/50/000000/console.png",
//               },
//               { name: "Angular", color: "DD0031" },
//             ].map((skill) => (
//               <div className="col-6 col-md-3" key={skill.name}>
//                 {skill.icon ? (
//                   <img src={skill.icon} alt={skill.name} width="40" />
//                 ) : (
//                   <img
//                     src={`https://cdn.simpleicons.org/${skill.name
//                       .toLowerCase()
//                       .replace(/\s+/g, "")}/${skill.color}`}
//                     alt={skill.name}
//                     width="40"
//                   />
//                 )}
//                 <p className="mt-2">{skill.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-5">
//         <div className="container">
//           <h2 className="text-center mb-5">Experience</h2>
//           <div className="row text-center g-4 justify-content-center">
//             {/* Experience 1 */}
//             <div className="col-md-4">
//               <div className="border card p-4 h-100 rounded shadow-sm text-start">
//                 <h5 className="mb-1">UX Engineer</h5>
//                 <h6 className="text-primary fw-bold">Gramener (now Straive)</h6>
//                 <p className="text-muted mb-3">Jan 2024 – Present</p>
//                 <ul className="text-start small ps-3">
//                   <li>
//                     Launched <span className="fw-bold">G20 Summit website</span>
//                     , increasing traffic by <span className="fw-bold">25%</span>
//                     .
//                   </li>
//                   <li>
//                     Boosted user engagement by{" "}
//                     <span className="fw-bold">30%</span> for{" "}
//                     <span className="fw-bold">Dr. Reddy Laboratories</span>{" "}
//                     platform (React.js).
//                   </li>
//                   <li>
//                     Delivered scalable UIs and responsive layouts for{" "}
//                     <span className="fw-bold">Dubai Tourism’s 5760×1080</span>{" "}
//                     Command Center & Controller.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Experience 2 */}
//             <div className="col-md-4">
//               <div className="border card p-4 h-100 rounded shadow-sm text-start">
//                 <h5 className="mb-1">Full-Stack Developer</h5>
//                 <h6 className="text-primary fw-bold">
//                   Metagogy Learning Systems
//                 </h6>
//                 <p className="text-muted mb-3">Jan 2021 – Dec 2023</p>
//                 <ul className="text-start small ps-3">
//                   <li>
//                     Enhanced <span className="fw-bold">Maths AI Educator</span>{" "}
//                     UI (↑ <span className="fw-bold">40%</span> completion rate).
//                   </li>
//                   <li>
//                     Cut <span className="fw-bold">load time</span> by{" "}
//                     <span className="fw-bold">35%</span> (React.js
//                     optimization).
//                   </li>
//                   <li>
//                     Enabled{" "}
//                     <span className="fw-bold">real-time video streaming</span>{" "}
//                     for <span className="fw-bold">5K+</span> users.
//                   </li>
//                   <li>
//                     Built scalable{" "}
//                     <span className="fw-bold">Angular 13 components</span> for
//                     AI Educator.
//                   </li>
//                   <li>
//                     Boosted retention by <span className="fw-bold">25%</span>,
//                     integrated ML tools.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Certifications Section */}
//       <section id="certifications" className="py-5">
//         <div className="container">
//           <h2 className="text-center mb-5">Certifications</h2>
//           <div className="row g-4 text-center">
//             <div className="col-md-4">
//               <div className="border rounded p-4 h-100 bg-fff">
//                 <div className="mb-2" style={{ fontSize: "1.5rem" }}>
//                   ✅
//                 </div>
//                 <h6 className="fw-bold">Responsive Web Design</h6>
//                 <p className="text-muted mb-0">freeCodeCamp</p>
//               </div>
//             </div>

//             {/* Certification 2 */}
//             <div className="col-md-4">
//               <div className="border rounded p-4 h-100 bg-fff">
//                 <div className="mb-2" style={{ fontSize: "1.5rem" }}>
//                   🎨
//                 </div>
//                 <h6 className="fw-bold">UI/UX Design Fundamentals</h6>
//                 <p className="text-muted mb-0">Google (Coursera)</p>
//               </div>
//             </div>

//             {/* Certification 3 */}
//             <div className="col-md-4">
//               <div className="border rounded p-4 h-100 bg-fff">
//                 <div className="mb-2" style={{ fontSize: "1.5rem" }}>
//                   📜
//                 </div>
//                 <h6 className="fw-bold">JavaScript</h6>
//                 <p className="text-muted mb-0">Udemy</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-5 bg-white border-top">
//         <div
//           className="container text-center p-5 rounded-4 shadow-sm"
//           style={{ backgroundColor: "#fefefe" }}
//         >
//           <h2 className="mb-3 fw-bold display-5">Let’s Connect ✉️</h2>
//           <p className="mb-4 fs-5 text-muted">
//             Got a project or idea? I'd love to hear from you!
//           </p>

//           <div className="d-flex justify-content-center gap-4 fs-3">
//             <a
//               href="mailto:adithya.chandrasekhar99@gmail.com?subject=Let%27s%20Connect&body=Hi%20Adithya,"
//               className="contact-icon bg-danger text-white"
//               aria-label="Email"
//             >
//               <i className="bi bi-envelope-fill"></i>
//             </a>

//             <a
//               href="https://wa.me/918639460402"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="contact-icon bg-success text-white"
//               aria-label="WhatsApp"
//             >
//               <i className="bi bi-whatsapp"></i>
//             </a>
//             <a
//               href="https://github.com/Adithya99Mukunda"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="contact-icon bg-dark text-white"
//               aria-label="GitHub"
//             >
//               <i className="bi bi-github"></i>
//             </a>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Portfolio;
