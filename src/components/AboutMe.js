import React from "react";
import author from "../components/images/InShot_20210803_101306628.jpg"
const AboutMe = () => {
    return (
        <div id="aboutme" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                 <img className="profile-img" src={author} alt="author...."/>
                    </div>
           
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p> Paragrah goes here</p>

                </div>
            </div>
        </div>
    )
}

export default AboutMe
