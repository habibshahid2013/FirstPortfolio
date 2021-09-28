import React from "react"
import Typed from "react-typed"

const Header = () => {
    return (
    <div className="header-wraper">
        <div className="main-info">
            <h1  class="bg-secondary p-2 text-orange bg-opacity-25 rounded">Hassan Shahid</h1>
            <Typed
            
            className="typed-text"
            strings={["Software Engineer", "Product Developer", "Full-Stack Software Engineering", "Network Engineer" ]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <a href="#aboutme"  className="btn btn-outline-success"> About Me</a>
        </div>
    </div>
    )
}

export default Header
