var _a;
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    if (!name || !email || !phone) {
        alert("Please fill out all personal information.");
        return false;
    }
    return true;
}
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        generateResume();
    }
});
function generateResume() {
    // Personal Information
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    // Education
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var gradYear = document.getElementById('grad-year').value;
    // Work Experience
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var duration = document.getElementById('duration').value;
    var jobDescription = document.getElementById('job-description').value;
    // Skills
    var skills = document.getElementById('skills').value.split(',');
    // Update Resume Template
    var resumeHTML = "\n      <h1>".concat(name, "</h1>\n      <p>Email: ").concat(email, "</p>\n      <p>Phone: ").concat(phone, "</p>\n      \n      <h2>Education</h2>\n      <p>").concat(degree, " from ").concat(institution, " (").concat(gradYear, ")</p>\n      \n      <h2>Work Experience</h2>\n      <p><strong>").concat(jobTitle, "</strong> at ").concat(company, " (").concat(duration, ")</p>\n      <p>").concat(jobDescription, "</p>\n      \n      <h2>Skills</h2>\n      <ul>\n        ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n      </ul>\n    ");
    document.getElementById('resume-display').innerHTML = resumeHTML;
}
