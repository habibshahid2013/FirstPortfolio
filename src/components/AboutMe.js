import React from "react";
import author from "../components/images/InShot_20210803_101306628.jpg"

import { FaTwitterSquare, FaInstagram, FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div id="aboutme" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author...."/>
                 </div>
    <ul class="nav col-md-7 justify-content-end list-unstyled d-flex">
      <li> <a href="https://github.com/habibshahid2013">
        <i><FaGithubSquare size="3rem" color="green"/></i>
        </a></li>
      <li> <a href="https://www.linkedin.com/in/hassan-shahid-49849368/">
        <i><FaLinkedin size="3rem" color="green"/></i>
        </a></li>
    </ul>
                   
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p> My three passions are music, living with a purpose , and all things involving tech. After spending the last 8 years in Youth Work, Also having some success as a local twin cities artist. I decided to explore one of my other passions and began to pursue a career in the tech field. I trained and worked for a few years as a Network Engineer working within multiple data-center environments providing my expertise and knowledge within the routing and switching realm.  
Eager to continue my education and develop my skill-set I decided to switch my focus going into software development. Having completed a 20 week intensive program at Prime Academy in October 2021, I learned the coding skills necessary to excel in the web/app development world. Currently I’m trained and certified as a Software Engineer looking to grow within the field and utilizing the Full-Stack Engineering skills-set that I developed. 
</p>

                </div>
            </div>
        </div>
    )
}

export default AboutMe
