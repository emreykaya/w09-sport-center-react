import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero">
        {/*  IMAGE */}
        <img src="images/hero-man.jpg" alt="Hero"/>
        <div className="hero-content">
            <span>POWERFULL</span>
            {/*  MAIN TITLE */}
            <h1>Group Practice With Trainer</h1>
            {/*  TEXT AREA */}
            <div className="hero-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit aut iste. Velit porro rerum, unde modi ipsam exercitationem laudantium illum. Id, laborum? Totam, dicta nisi. Voluptates, vero id. Perferendis.</p>
            </div>
            {/*  BUTTONS */}
            <div className="hero-btns">
                <button className="hero-btn-1">Sign Up</button>
                <button className="hero-btn-2">Details</button>
            </div>
        </div>
    </section>
  )
}

export default Hero
