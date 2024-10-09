import React, { useState } from "react";
import { Container, Form, OverlayTrigger, Tooltip } from "react-bootstrap";

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedIn: "",
    github: "",
    summary: "",
    skills: "",
    employment: "",
    education: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props}
    </Tooltip>
  );

  return (
    <Container className="p-3">
      <Form>
        <Form.Group controlId="formName">
          <OverlayTrigger
            placement="right"
            overlay={renderTooltip("Enter your full name")}
          >
            <Form.Label>Name</Form.Label>
          </OverlayTrigger>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <OverlayTrigger
            placement="right"
            overlay={renderTooltip("Enter your email address")}
          >
            <Form.Label>Email</Form.Label>
          </OverlayTrigger>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <OverlayTrigger
            placement="right"
            overlay={renderTooltip("Enter your phone number")}
          >
            <Form.Label>Phone</Form.Label>
          </OverlayTrigger>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formLinkedIn">
          <OverlayTrigger
            placement="right"
            overlay={renderTooltip("Enter your LinkedIn profile URL")}
          >
            <Form.Label>LinkedIn</Form.Label>
          </OverlayTrigger>
          <Form.Control
            type="text"
            placeholder="Enter your LinkedIn profile URL"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formGithub">
          <OverlayTrigger
            placement="right"
            overlay={renderTooltip("Enter your GitHub profile URL")}
          >
            <Form.Label>GitHub</Form.Label>
          </OverlayTrigger>
          <Form.Control
            type="text"
            placeholder="Enter your GitHub profile URL"
            name="github"
            value={formData.github}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formSummary">
          <OverlayTrigger
            placement="right"
            overlay={renderTooltip("Enter a brief professional summary")}
          >
            <Form.Label>Professional Summary</Form.Label>
          </OverlayTrigger>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your professional summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formSkills">
          <OverlayTrigger
            placement="right"
            overlay={renderTooltip("Enter your skills, separated by commas")}
          >
            <Form.Label>Skills</Form.Label>
          </OverlayTrigger>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmployment">
          <OverlayTrigger
            placement="right"
            overlay={renderTooltip("Enter your employment history")}
          >
            <Form.Label>Employment History</Form.Label>
          </OverlayTrigger>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your employment history"
            name="employment"
            value={formData.employment}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEducation">
          <OverlayTrigger
            placement="right"
            overlay={renderTooltip("Enter your education details")}
          >
            <Form.Label>Education</Form.Label>
          </OverlayTrigger>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your education details"
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default ResumeForm;
