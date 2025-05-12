import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
const Footer=()=>{
    return(<footer className='mt-5'>
        <hr/>

        <div className="container py-3">
            <p className='text-center'>Contact Me Here</p>
            <div className='text-center'>
            <a className='mx-3' href='https://github.com/Karan-Bharti1'  target="_blank"
 rel="noopener noreferrer">  <FaGithub size={30} color="#fff" /></a>
 <a target="_blank"
 rel="noopener noreferrer" href="https://www.linkedin.com/in/bharti1999/" className='mx-3'><FaLinkedin size={30} color="#fff"/></a>
 <a target="_blank"
 rel="noopener noreferrer" href="https://docs.google.com/document/d/1qrhPBpvMv_VDlZ0MuQwEKnPy_42JXj9A/edit?usp=sharing&ouid=101278163838128748428&rtpof=true&sd=true"className='mx-3' ><FaAddressBook size={30} color="#fff"/></a>
            </div>
        </div>
    </footer>)
}
export default Footer;