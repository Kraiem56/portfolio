import './header.css'
import React from 'react'
// import photo from "../../assets/photo.jpg"

const Header = () => {
  return (
    <div id='home'>
      <div className="home__container">
    <div className="home__content">
      <div className="home__meta">
        <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
        <h2 className="home__text pz__10">Hi, I’m Mohamed Ben Kraiem</h2>
        <h3 className="home__text sweet pz__10">Full-Stack JavaScript Developer.</h3>
        <h4 className="home__text pz__10">based in Tunisia.</h4>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Header