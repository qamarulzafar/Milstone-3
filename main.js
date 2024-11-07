var form = document.getElementById("inputfield");
var output_container = document.getElementById("output");
var main = document.getElementById("resume-builder");
var editbtn = document.getElementById("edit-btn");
var printbtn = document.getElementById("print-btn");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var occupation = document.getElementById('occupation').value;
    var email = document.getElementById('email').value;
    var email_2 = document.getElementById('email-2').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var summery = document.getElementById('summery').value;
    var education = document.getElementById('education').value;
    var institute = document.getElementById('institute').value;
    var eduCompleteYear = document.getElementById('edu-complete-year').value;
    var experience = document.getElementById('experience').value;
    var company = document.getElementById('company').value;
    var role = document.getElementById('role').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var skills = document.getElementById('skills').value;
    var interest = document.getElementById('interest').value;
    if (output_container) {
        main.style.display = 'none';
        output_container.innerHTML = "\n\n          <div class=\"resume-cont\">\n                <div class=\"center\">\n                    <div class=\"main\">\n                        <div class=\"resume-head\">\n                            <div class=\"name\">".concat(name, "</div>\n                            <div class=\"occupation\">").concat(occupation, "</div>\n                        </div>\n            \n            \n                    </div>\n                    <div class=\"resume-main\">\n                        <div class=\"side1\">\n            \n                            <!-- summery -->\n            \n                            <div class=\"summery\">\n                                <h2>SUMMERY</h2>\n                                <p>").concat(summery, "</p>\n                            </div>\n            \n                            <!-- experience  -->\n            \n                            <div class=\"experience\">\n                                <h2>Experience</h2>\n                                <div class=\"duration\">").concat(from, "  to  ").concat(to, "</div>\n                                <div class=\"jobrole\">").concat(role, "</div>\n                                <div class=\"company\">").concat(company, "</div>\n                                <div class=\"exp-info\">").concat(experience, "</div>\n                            </div>\n            \n                            <!-- interest  -->\n            \n                            <div class=\"interest\">\n                            \n                                <h2>Interest</h2>\n                                <p>").concat(interest, "</p>\n                            \n                            </div>\n            \n                        </div>\n                        <div class=\"side2\">\n            \n                            <!-- contact  -->\n            \n                        <div class=\"contact\">\n\n                            <h2>Contact</h2>\n                          <div class=\"contact-info\"> \n\n                            <div class=\"phone\">").concat(phone, "</div>\n                            <div class=\"email\">").concat(email, "</div>\n                            <div class=\"alternate-email\">").concat(email_2, "</div>\n                            <div class=\"address\">").concat(address, "</div>\n                          </div> \n                        </div>\n            \n                            <!-- education  -->\n            \n                        <div class=\"education\">\n\n                            <h2>Education</h2>\n\n                            <div class=\"higher-education\">").concat(education, "</div>\n                            <div class=\"institute\">").concat(institute, "</div>\n                            <div class=\"complition\">").concat(eduCompleteYear, "</div>\n                        </div>\n            \n                        <!-- skills  -->\n            \n                        <div class=\"skills\">\n                        \n                            <h2>Skills</h2>\n                            <p>").concat(skills, "</p>\n\n                        </div>\n                        </div>\n                    </div>\n                </div>\n\n\n               \n            </div>\n        ");
    }
    ;
});
