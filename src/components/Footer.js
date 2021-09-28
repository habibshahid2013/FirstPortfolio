import React from "react"

//react font awesome
import { FaTwitterSquare, FaInstagram, FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
       <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
      </a>
      <span className="copyright" >© Hassan Shahid, 2021</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li> <a href="https://github.com/habibshahid2013">
        <i><FaGithubSquare size="3rem" color="green"/></i>
        </a></li>
      <li> <a href="https://www.linkedin.com/in/hassan-shahid-49849368/">
        <i><FaLinkedin size="3rem" color="green"/></i>
        </a></li>
      <li> <a href="https://www.facebook.com/KrimsonLotus">
        <i><FaFacebookSquare size="3rem" color="green"/></i>
        </a></li>
    </ul>
  </footer>
    )
}

export default Footer
