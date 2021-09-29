import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    return (
       <div className="services">
           <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
       <div className="circle"><FontAwesomeIcon icon={faDesktop} size="2x"/></div>
                            <h3>Web Design</h3>
                            <p>I approach each project indiviually and always focus on the result</p>

                        </div>
                    </div>
                    {/*   */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
         <div className="circle"><FontAwesomeIcon icon={faFileCode} size="2x"/></div>
                            <h3>Web Design</h3>
                            <p>Your website will be popping hello yay yas yas</p>

                        </div>
                    </div>
                     {/*   */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
         <div className="circle"><FontAwesomeIcon icon={faFileCode} size="2x"/></div>
                            <h3>Web Development</h3>
                            <p>Dont forget we about to be getting monety out here chea!!!</p>

                        </div>
                    </div>
                     {/*   */}
                    <div className="col-md-3 col-sm-6">
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
