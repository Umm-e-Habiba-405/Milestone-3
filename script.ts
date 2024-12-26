function validateForm(): boolean {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
  
    if (!name || !email || !phone) {
      alert("Please fill out all personal information.");
      return false;
    }
    return true;
  }
  
  document.getElementById('resume-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
      generateResume();
    }
  });
  function generateResume(): void {
    // Personal Information
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
  
    // Education
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const gradYear = (document.getElementById('grad-year') as HTMLInputElement).value;
  
    // Work Experience
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const duration = (document.getElementById('duration') as HTMLInputElement).value;
    const jobDescription = (document.getElementById('job-description') as HTMLInputElement).value;
  
    // Skills
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  
    // Update Resume Template
    const resumeHTML = `
      <h1>${name}</h1>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      
      <h2>Education</h2>
      <p>${degree} from ${institution} (${gradYear})</p>
      
      <h2>Work Experience</h2>
      <p><strong>${jobTitle}</strong> at ${company} (${duration})</p>
      <p>${jobDescription}</p>
      
      <h2>Skills</h2>
      <ul>
        ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
      </ul>
    `;
    
    document.getElementById('resume-display')!.innerHTML = resumeHTML;
  }
    