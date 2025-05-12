
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'
import { gsap } from 'gsap/gsap-core'
import Header from './components/header'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import Footer from './components/Footer'
const technologies = [
  "🍃 MongoDB",
  "🚂 Express.js",
  "⚛️ React.js",
  "🟩 Node.js",
  "🔷 TypeScript",
  "🟨 JavaScript",
  "🌐 HTML",
  "🎨 CSS",
  "🔧 Git",
  "🌀 Redux"
];

function App() {
  
  useGSAP(() => {
    gsap.from(".tech-item", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from("h2", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from("p", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.fromTo(".link-button", 
      { opacity: 0, scale: 0.8, y: -20 }, 
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);
    
  return (
    <>
     <Header/>
     <hr/>
     <main >
      <section className='p-3 about-section '>
<div className='container'>
           <h2 className='py-2 text-center'>About Me</h2>
           <p className='fs-5 py-2 text-center'>Hi, I’m Karan Bharti — a full-stack web developer with a strong focus on building scalable, efficient, and user-friendly web applications.
I work with the MERN stack and have developed production-grade projects like CRMs, e-commerce platforms, and real-time collaboration tools.
I’m passionate about clean architecture, seamless UI/UX, and writing code that performs — both in the browser and on the backend.
</p>
</div>
         
         </section>
         <section className='my-3'>
          
          <div className='container'>
            <h2 className='text-center py-2'>Technologies</h2>
              <div className="row justify-content-center">
          {technologies.map((tech, index) => (
            <div key={index} className="col-6 col-md-3 mb-4 tech-item text-light">
              <div className="p-3 border rounded bg-secondary bg-opacity-10 text-center">
                {tech}
              </div>
            </div>
          ))}
        </div>
        </div>
         </section>
         <section className='my-3'>
          <div className='container text-center '>
            <h2 className='py-2 text-center'>View My Projects</h2>
   <p className="fs-5 py-2 text-center">From sleek UIs to powerful backend solutions — take a deep dive into what I’ve been building lately.</p>
   <Link className='link-button' to="/projects">Explore Projects</Link>
          </div>
         </section>
     
     </main>
     
     <Footer/>
    </>
  )
}

export default App
