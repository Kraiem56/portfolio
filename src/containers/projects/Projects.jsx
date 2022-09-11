import React from "react";
import "./projects.css";
import {bad,todoapp,ecomerce,portfolio} from "../../assets/index"



function Projects() {
  return (
    <div className="project component__space" id="projects">
        <h1 className="heading__text">My Latest Project</h1> <br />
        <br />
       <div className="container">
           <div className="row">
             <div className="col__2">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={portfolio} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Portfolio</h4>
                     <span className="project__text"> 
                     Front: ReactJs,react-icons, EmailJs  <br />
                     </span>
                   <div className="button--code">
                   <a href="#" className="project__btn">View Code</a>

                   </div>
                     </div>
                 </div>
             </div>

             <div className="col__2">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                         <img src={todoapp} alt="" className="project__img" />
                          
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Todo App</h4>
                     <span className="project__text"> 
                     Front: ReactJs,Redux  <br />
                     </span>
                     <div className="button--code">
                   {/* <a href="https://todoapp-d3c91a.netlify.app/" className="project__btn">Live Demo</a> */}
                     <a href="https://github.com/Kraiem56/Redux--todoapp" className="project__btn">View Code</a>

                   </div>
                     </div>
                 </div>
             </div>


             <div className="col__2">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                         <img src={bad} alt="ccc" className="project__img" />
                          
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">breaking bad characters</h4>
                     <span className="project__text"> 
                     Front: ReactJs, REST API
                     </span>
                     <div className="button--code">
                   {/* <a href="https://breaking-bad-api-7c0380.netlify.app/" className="project__btn">Live Demo</a> */}
                     <a href="https://github.com/Kraiem56/API" className="project__btn">View Code</a>
                   </div>
                     </div>
                 </div>
             </div>
             <div className="col__2">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                         <img src={ecomerce} alt="" className="project__img" />
                          
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">E-commerce Website  </h4>
                     <span className="project__text"> 
                     Front: ReactJs,Redux, axios <br />
                     Back: Redux, MongoDB, NodeJs, Express, multer, jsonwebtoken
                     </span>
                     <div className="button--code">
                   {/* <a href="#" className="project__btn">Live Demo</a> */}
                     <a href="https://github.com/Kraiem56/Final-Project-Watchshop" className="project__btn">View Code</a>
                   </div>
                     </div>
                 </div>
             </div>
           </div>
       </div>
    </div>
  );
}

export default Projects;
