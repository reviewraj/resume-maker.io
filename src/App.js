import React, { useState } from 'react';
import './App.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phone: '',
    linkedin: '',
    github: '',
    summary: '',
    skills: '',
    experience: '',
    projects: '',
    education: ''
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDownload = (format) => {
    switch (format) {
      case 'pdf':
        handleDownloadPDF();
        break;
      case 'html':
        handleDownloadHTML();
        break;
      case 'txt':
        handleDownloadTXT();
        break;
      case 'docx':
        handleDownloadDOCX();
        break;
      default:
        break;
    }
    setDropdownOpen(false);
  };

  const handleDownloadPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(12);

      const margins = { top: 20, left: 10, bottom: 20, right: 10 };
      let yOffset = margins.top;

      const addText = (text) => {
        const lines = doc.splitTextToSize(text, 190);
        lines.forEach((line) => {
          if (yOffset + 10 > 297 - margins.bottom) {
            doc.addPage();
            yOffset = margins.top;
          }
          doc.text(line, margins.left, yOffset);
          yOffset += 10;
        });
      };

      doc.setFontSize(16);
      doc.text(formData.name, margins.left, yOffset);
      yOffset += 15;

      doc.setFontSize(12);
      doc.text(`${formData.location} | ${formData.phone}`, margins.left, yOffset);
      yOffset += 10;

      doc.text(`LinkedIn: ${formData.linkedin}`, margins.left, yOffset);
      yOffset += 10;
      doc.text(`GitHub: ${formData.github}`, margins.left, yOffset);
      yOffset += 15;

      doc.setFontSize(14);
      doc.text('Professional Summary:', margins.left, yOffset);
      yOffset += 10;
      addText(formData.summary);
      yOffset += 10;

      doc.setFontSize(14);
      doc.text('Skills:', margins.left, yOffset);
      yOffset += 10;
      addText(formData.skills);
      yOffset += 10;

      doc.setFontSize(14);
      doc.text('Employment History:', margins.left, yOffset);
      yOffset += 10;
      addText(formData.experience);
      yOffset += 10;

      doc.setFontSize(14);
      doc.text('Projects:', margins.left, yOffset);
      yOffset += 10;
      addText(formData.projects);
      yOffset += 10;

      doc.setFontSize(14);
      doc.text('Education:', margins.left, yOffset);
      yOffset += 10;
      addText(formData.education);

      doc.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const handleDownloadHTML = () => {
    try {
      const htmlContent = `
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; font-size: 16px; }
            h1 { font-size: 26px; margin-bottom: 10px; }
            p { margin: 5px 0; }
            .section { margin-bottom: 20px; }
            .section__title { font-size: 18px; font-weight: bold; border-bottom: 1px solid #000; padding-bottom: 5px; }
            .section__content { margin-top: 5px; }
            a { color: #1a0dab; text-decoration: none; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <h1>${formData.name}</h1>
          <p>${formData.location} | ${formData.phone}</p>
          <p><a href="${formData.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="${formData.github}" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          <div class="section">
            <div class="section__title">Professional Summary</div>
            <div class="section__content">${formData.summary}</div>
          </div>
          <div class="section">
            <div class="section__title">Skills</div>
            <div class="section__content">${formData.skills}</div>
          </div>
          <div class="section">
            <div class="section__title">Employment History</div>
            <div class="section__content">${formData.experience}</div>
          </div>
          <div class="section">
            <div class="section__title">Projects</div>
            <div class="section__content">${formData.projects}</div>
          </div>
          <div class="section">
            <div class="section__title">Education</div>
            <div class="section__content">${formData.education}</div>
          </div>
        </body>
        </html>
      `;
      const blob = new Blob([htmlContent], { type: 'text/html' });
      saveAs(blob, 'resume.html');
    } catch (error) {
      console.error('Error generating HTML:', error);
    }
  };

  const handleDownloadTXT = () => {
    try {
      const textContent = `
        ${formData.name}
        ${formData.location} | ${formData.phone}
        LinkedIn: ${formData.linkedin} | GitHub: ${formData.github}

        Professional Summary:
        ${formData.summary}

        Skills:
        ${formData.skills}

        Employment History:
        ${formData.experience}

        Projects:
        ${formData.projects}

        Education:
        ${formData.education}
      `;
      const blob = new Blob([textContent], { type: 'text/plain' });
      saveAs(blob, 'resume.txt');
    } catch (error) {
      console.error('Error generating TXT:', error);
    }
  };

  const handleDownloadDOCX = () => {
    try {
      const htmlContent = `
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; font-size: 16px; }
            h1 { font-size: 26px; margin-bottom: 10px; }
            p { margin: 5px 0; }
            .section { margin-bottom: 20px; }
            .section__title { font-size: 18px; font-weight: bold; border-bottom: 1px solid #000; padding-bottom: 5px; }
            .section__content { margin-top: 5px; }
            a { color: #1a0dab; text-decoration: none; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <h1>${formData.name}</h1>
          <p>${formData.location} | ${formData.phone}</p>
          <p><a href="${formData.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="${formData.github}" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          <div class="section">
            <div class="section__title">Professional Summary</div>
            <div class="section__content">${formData.summary}</div>
          </div>
          <div class="section">
            <div class="section__title">Skills</div>
            <div class="section__content">${formData.skills}</div>
          </div>
          <div class="section">
            <div class="section__title">Employment History</div>
            <div class="section__content">${formData.experience}</div>
          </div>
          <div class="section">
            <div class="section__title">Projects</div>
            <div class="section__content">${formData.projects}</div>
          </div>
          <div class="section">
            <div class="section__title">Education</div>
            <div class="section__content">${formData.education}</div>
          </div>
        </body>
        </html>
      `;
      const converted = htmlDocx.asBlob(htmlContent);
      saveAs(converted, 'resume.docx');
    } catch (error) {
      console.error('Error generating DOCX:', error);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Resume Maker</h1>
      </header>
      <div className="container">
        <div className="form-container">
          <form>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn URL"
              value={formData.linkedin}
              onChange={handleChange}
            />
            <input
              type="text"
              name="github"
              placeholder="GitHub URL"
              value={formData.github}
              onChange={handleChange}
            />
            <textarea
              name="summary"
              placeholder="Professional Summary"
              value={formData.summary}
              onChange={handleChange}
            />
            <textarea
              name="skills"
              placeholder="Skills"
              value={formData.skills}
              onChange={handleChange}
            />
            <textarea
              name="experience"
              placeholder="Employment History"
              value={formData.experience}
              onChange={handleChange}
            />
            <textarea
              name="projects"
              placeholder="Projects"
              value={formData.projects}
              onChange={handleChange}
            />
            <textarea
              name="education"
              placeholder="Education"
              value={formData.education}
              onChange={handleChange}
            />
            <div className="dropdown">
              <button onClick={() => setDropdownOpen(!dropdownOpen)}>Download Resume</button>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <button onClick={() => handleDownload('pdf')}>PDF</button>
                  <button onClick={() => handleDownload('html')}>HTML</button>
                  <button onClick={() => handleDownload('txt')}>TXT</button>
                  <button onClick={() => handleDownload('docx')}>DOCX</button>
                </div>
              )}
            </div>
          </form>
        </div>
        <div className="live-preview">
          <h2>Live Preview</h2>
          <h3>{formData.name}</h3>
          <p>{formData.location} | {formData.phone}</p>
          <p><a href={formData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href={formData.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
          <div className="section">
            <h4>Professional Summary</h4>
            <p>{formData.summary}</p>
          </div>
          <div className="section">
            <h4>Skills</h4>
            <p>{formData.skills}</p>
          </div>
          <div className="section">
            <h4>Employment History</h4>
            <p>{formData.experience}</p>
          </div>
          <div className="section">
            <h4>Projects</h4>
            <p>{formData.projects}</p>
          </div>
          <div className="section">
            <h4>Education</h4>
            <p>{formData.education}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
