import React from 'react'
import Pizza from "../components/images/Pizza.png"
import Dotnet from "../components/images/dotnet.png"
import TBA from "../components/images/TBA.jpeg"

const Portfolio = () => {
    return (
        <>
       <div>
           <h1 className="profolio-header">Portfolio</h1>
       </div>
<div id="profiolo" class="card-group">
    
  <div class="card">
    <img src={Pizza} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Pizza Parlor</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src={Dotnet}class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Pets Hotel</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src={TBA} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Group Project</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</>
    )
}

export default Portfolio
