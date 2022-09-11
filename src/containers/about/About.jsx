import React from "react";
import "./about.css";
import Feature from "../../components/feature/Feature";
import {WiMoonAltWaxingCrescent1} from 'react-icons/wi'
import Information from "../../components/feature/Information";
import { me } from "../../assets";



function About({switchTheme}) {

  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
   
  return (
    <div className="about component__space" id="about">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={me} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                {Information.Profile}
              </p>
              
             <div className="about__button d__flex align__items__center">
              <Feature/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
      <div className='theme-toggle'>
          <WiMoonAltWaxingCrescent1 className='theme-toggle-i' onClick={switchTheme}></WiMoonAltWaxingCrescent1>
        </div>
    </div>
  );
}

export default About;
