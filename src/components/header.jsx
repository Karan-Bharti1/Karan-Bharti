import { Link } from "react-router-dom";
import gsap from "gsap";
import {useGSAP} from "@gsap/react"
const Header=()=>{
    useGSAP(()=>{
  gsap.fromTo(".link-view", 
    { opacity: 0, scale: 0.8, y: -20 }, 
    { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" }
  );
    })

return(<>
<header className="text-light py-2">
    <div className="container">
    <nav className="navbar navbar-expand-lg  text-light ">
      <div className="container-fluid">
        <Link className="text-light link-view text-decoration-none logo" to="/">Karan Bharti</Link>
        <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link className="nav-link active text-light link-view"  to="/" >Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light link-view" to="/projects">Projects</Link>
            </li>
            
          </ul>
        
        </div>
      </div>
    </nav>
    </div>
    </header>
</>)
}
export default Header;