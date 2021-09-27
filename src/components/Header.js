import React from "react"
import Typed from "react-typed"

const Header = () => {
    return (
    <div className="header-wraper">
        <div className="main-info">
            <h1  class="bg-secondary p-2 text-orange bg-opacity-25 rounded">Hassan Shahid</h1>
            <Typed
            
            className="typed-text"
            strings={["Software Engineer", "Product Developer", "Full-Stack Engineering", "Network Engineer" ]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <a href="#"  className="btn-main-offer"> contact me</a>
        </div>
    </div>
    )
}

export default Header
