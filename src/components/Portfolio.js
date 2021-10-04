import React from 'react'
import Pizza from "../components/images/Pizza.png"
import Dotnet from "../components/images/dotnet.png"
import TBA from "../components/images/TBA.jpeg"
//react font awesome
import { FaGithub, FaLink } from "react-icons/fa";

const Portfolio = () => {


    return (
        <>
       <div>
           <h1 className="profolio-header"><u>Portfolio</u></h1>
       </div>
<div id="portfolio" class="card-group">
    
  <div class="card">
    <img src={Pizza} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Pizza Parlor</h5>
      <p class="card-text">The initial point of this application was to set up the API CRUD functionality within the application. returning the information with a GET command. From there you had to use POST command to order the pizza order input into the database using a POST command. Then reorder the information onto the DOM with another GET command. This assignment was to demostrate our knowledge on using Reduxs and also how to send API commands to postgresSQL Database. Making a basic, but functioning pizza ordering web application.</p>
    </div>
    <div id="cards" class="card-footer">
       <a href="https://github.com/habibshahid2013/redux-pizza-parlor2">
        <i><FaLink size="3rem" color="blue"/></i>
        </a>
    </div>
  </div>
  <div class="card">
    <img src={Dotnet}class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Pets Hotel</h5>
      <p class="card-text"> This projected was focused on getting the Routes connected and built within the application using our knowledge on CRUD API functionality. I was able to build a functional application the owner could see how many pets they have within the hotel. Adding or subtracting the amount of pets each owner has. Sending that information to the database. Also being able to add and remove Pet owners  as-well. This project was amazing due to the fact it was built using .NET and C#</p>
    </div>
    <div id="cards" class="card-footer">
      <a href="https://github.com/habibshahid2013/pet-hotel">
        <i><FaLink size="3rem" color="blue"/></i>
        </a>
    </div>
  </div>
  <div class="card">
    <img src={TBA} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Group Project</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div id="cards" class="card-footer">
      <a href="https://github.com/habibshahid2013/redux-pizza-parlor2">
        <i><FaLink size="3rem" color="blue"/></i>
        </a>
    </div>
  </div>
</div>
</>
    )
}

export default Portfolio
