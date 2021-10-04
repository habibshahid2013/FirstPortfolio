import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faDesktop, faFileCode, faNetworkWired, faUsers} from "@fortawesome/free-solid-svg-icons";




const Services = () => {
    return (
       <div id="services" className="services">
           <div className="py-5">
            <div className="container">
                   <h1 className="skill"><u>Professional Skill-Set</u></h1>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
       <div className="circle"><FontAwesomeIcon icon={faDesktop} size="4x" color="green" /></div>
                            <h3>Software Engineering </h3>
                            <p>Versed through various languages needed to do Full-Stack Engineering. After being trained at Prime Digital Academy. I'm certified to to be a Full-Stack Software Engineer. </p>
                            <p><u> Software Engineer Skill-Set</u></p>
                            <p>Node.js, PostgresSQL, HTML, CSS, JQuery, JavaScript, React, Redux, Saga, JSON, Git, Heroku, Bootstrap, Material UI, AJAX, REST, Express, Firebase,.Net, C#  </p>


                        </div>
                    </div>
                    {/*   */}
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
         <div className="circle"><FontAwesomeIcon icon={faNetworkWired} size="4x" color="green"/></div>
                            <h3>Network Engineering</h3>
                            <p>Trained and certified within the Networking Field. I am CCNA Qualified. Applying my knowledge of routing and switching into various Data Center environments.  </p>
                            <p><u>Network Engineer Technologies</u></p>
                            <ul className="techlist">
                            <li>Routing and Switching</li>
                            <li> Cisco ACI</li>
                            <li>Firewall (ASA, Firepower, and Pal-Alto)</li>
                            <li> Cisco Wireless</li>
                            <li>SD-Wan</li>
                            <li>Cisco Nexus (VDC, VPC, and FEX)</li>
                            <li>WAN and LAN</li>
                            <li>SNMP/Netflow</li> 
                            <li>Infoblox</li> 
                            </ul> 

                        </div>
                    </div>
                     {/*   */}
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
         <div className="circle"><FontAwesomeIcon icon={faUsers} size="4x" color="green"/></div>
                            <h3>Social Professionalism</h3>
                            <p>Over the years I've developed many soft skills that I've used in many organizations to provide effective and progressional environments </p>
                            <p><u>Social/Analytical  Development</u></p>
                            <ul className="techlist">
                            <li>Facilitator Skills</li>
                            <li>Communicational Skills</li>
                            <li>Open-mindedness and Adaptability Skills</li>
                            <li> Critical thinking, creativity, and problem-solving Skills</li>
                            <li>Teamwork and Collaboration Skills</li>
                            <li>Organizational Skills</li>
                            <li>Problem Solving and Analytical Skills</li>
                            <li>Interpersonal Skills</li>

                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
           </div>
       </div>
    )
}

export default Services
