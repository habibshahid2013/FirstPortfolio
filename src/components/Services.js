import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faDesktop, faFileCode,  fa-network-wired} from "@fortawesome/free-solid-svg-icons";




const Services = () => {
    return (
       <div className="services">
           <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
       <div className="circle"><FontAwesomeIcon icon={faDesktop} size="2x"/></div>
                            <h3>Software Engineering </h3>
                            <p>I'm versed through various languages needed to do Full-Stack Engineering. After being trained at Prime Digital Academy. I'm certified to to be a Full-Stack Software Engineer. </p>
                            <p><u> Software Engineer Skill-Set</u></p>
                            <p>Node.js, PostgresSQL, HTML, CSS, JQuery, JavaScript, React, Redux, Saga, JSON, Git, Heroku, Bootstrap, Material UI, AJAX, REST, Express, Firebase,.Net, C#  </p>


                        </div>
                    </div>
                    {/*   */}
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
         <div className="circle"><FaNetworkWired  icon={FaNetworkWired} size="2x"/></div>
                            <h3>Network Engineering</h3>
                            <p>Training and working within the Networking Field. I am CCNA Qualified. Applying my knowledge of routing and switching into various Data Center environments.  </p>
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
         <div className="circle"><FontAwesomeIcon icon={faFileCode} size="2x"/></div>
                            <h3>Network Engineering</h3>
                            <p>Real niggas stay winning when they focus on the goal YEAAAAHHH</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
       </div>
    )
}

export default Services
