import React from 'react';
import './Template2.css';

const Template2 = ({ formData }) => {
  return (
    <div className="container">
      <div className="header">
        <div className="full-name">
          <span className="first-name">{formData.name.split(' ')[0]}</span>
          <span className="last-name">{formData.name.split(' ')[1]}</span>
        </div>
        <div className="contact-info">
          <span className="email">Email: </span>
          <span className="email-val">{formData.email}</span>
          <span className="separator"></span>
          <span className="phone">Phone: </span>
          <span className="phone-val">{formData.phone}</span>
        </div>
        <div className="about">
          <span className="position">{formData.summary}</span>
        </div>
      </div>
      <div className="details">
        <div className="section">
          <div className="section__title">Skills</div>
          <div className="section__list">
            <div className="section__list-item">
              {formData.skills}
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section__title">Experience</div>
          <div className="section__list">
            <div className="section__list-item">
              {formData.experience}
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section__title">Projects</div>
          <div className="section__list">
            <div className="section__list-item">
              {formData.projects}
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section__title">Education</div>
          <div className="section__list">
            <div className="section__list-item">
              {formData.education}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
