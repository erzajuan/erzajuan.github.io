import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle"> 0 - 1 Years Working</span>
      </div>
      <div className="about__box">
      <i className="bx bx-briefcase-alt"></i>
        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">5+ Projects</span>
      </div>
      <div className="about__box">
      <i className="bx bxs-graduation"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">Computer Science</span>
      </div>
    </div>
  );
};

export default Info;
