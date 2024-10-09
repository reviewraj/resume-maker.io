import React from 'react';
import './Template1.css';

const Template1 = ({ formData }) => (
  <div className="container">
    <div className="header">
      <div className="full-name">
        <span className="first-name">{formData.firstName}</span> 
        <span className="last-name">{formData.lastName}</span>
      </div>
      <div className="contact-info">
        <span className="email">Email: </span>
        <span className="email-val">{formData.email}</span>
        <span className="separator"></span>
        <span className="phone">Phone: </span>
        <span className="phone-val">{formData.phone}</span>
      </div>
      <div className="about">
        <span className="position">{formData.position}</span>
        <span className="desc">{formData.about}</span>
      </div>
    </div>
    <div className="details">
      <div className="section">
        <div className="section__title">Experience</div>
        <div className="section__list">
          {formData.experience.map((exp, index) => (
            <div className="section__list-item" key={index}>
              <div className="left">
                <div className="name">{exp.company}</div>
                <div className="addr">{exp.location}</div>
                <div className="duration">{exp.duration}</div>
              </div>
              <div className="right">
                <div className="name">{exp.position}</div>
                <div className="desc">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <div className="section__title">Education</div>
        <div className="section__list">
          {formData.education.map((edu, index) => (
            <div className="section__list-item" key={index}>
              <div className="left">
                <div className="name">{edu.institution}</div>
                <div className="addr">{edu.location}</div>
                <div className="duration">{edu.duration}</div>
              </div>
              <div className="right">
                <div className="name">{edu.degree}</div>
                <div className="desc">{edu.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <div className="section__title">Projects</div>
        <div className="section__list">
          {formData.projects.map((project, index) => (
            <div className="section__list-item" key={index}>
              <div className="name">{project.name}</div>
              <div className="text">{project.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <div className="section__title">Skills</div>
        <div className="skills">
          {formData.skills.map((skill, index) => (
            <div className="skills__item" key={index}>
              <div className="left">
                <div className="name">{skill.name}</div>
              </div>
              <div className="right">
                {Array.from({ length: 5 }).map((_, i) => (
                  <React.Fragment key={i}>
                    <input type="checkbox" id={`ck${index}-${i}`} checked={i < skill.level} readOnly />
                    <label htmlFor={`ck${index}-${i}`}></label>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <div className="section__title">Interests</div>
        <div className="section__list">
          {formData.interests.map((interest, index) => (
            <div className="section__list-item" key={index}>{interest}</div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Template1;
