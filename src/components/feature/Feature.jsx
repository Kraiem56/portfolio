import React,{ useState } from "react";
import Information from './Information'
import  './feature.css';

function Feature() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
const [text, setText] = useState(Information)
// console.log(text)
  return (
    <div className="container-feature">
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Main Skills
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Experience
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Education
        </div>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>{text.skills}</p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p className="p_bold">
            {text.work[0].CompanyName}
            {text.work[0].Date}
          </p>
            {text.work[0].specialization} <br />
          <br />
          <p className="p_bold">
            {text.work[1].CompanyName}
            {text.work[1].Date} 
          </p>
            {text.work[1].specialization}
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <p className="p_bold">
            {text.education[0].UniversityName} <br />
            {text.education[0].location}
            {text.education[0].DateOfPassing}
          </p>{" "}
            {text.education[0].specialization} <br />
          <br />
          <p className="p_bold">
            {text.education[1].UniversityName}
            {text.education[1].DateOfPassing} 
          </p>
            {text.education[1].specialization}
        </div>
      </div>
    </div>
  );
}

export default Feature;
