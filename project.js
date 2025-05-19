document.getElementById("fetch-users").addEventListener("click", function (event) {
    event.preventDefault(); // Stop default action of <a> tag
const promise=fetch("https://fake-json-api.mock.beeceptor.com/users");
promise.then((response)=>{
    const pro2=response.json();
    pro2.then((response2)=>{
        const container = document.getElementById("user-container"); // Select div

                response2.forEach(user => {  // Loop through array
                const userElement = document.createElement("p");
                userElement.innerHTML = `<strong>Name:</strong> ${user.name} <br> <strong>Country:</strong> ${user.country} <br><img src=${user.photo} width="30" hieght="30"></img><br>`;
                container.appendChild(userElement); // Append each user
                // Add Horizontal Divider Below Each User
                const divider = document.createElement("hr");
                divider.classList.add("user-divider");
                container.appendChild(divider);

            });
        })
    });
});

// Theme toggle functionality
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.classList.toggle("dark-button"); // Change button style dynamically
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode"); // 
        const themeButton = document.getElementById("theme-toggle");
        if (themeButton) {
            themeButton.classList.add("dark-button"); // 
        }
    }
});
    
document.getElementById("home-link").addEventListener("click", function (event) {
    event.preventDefault(); // Stop default link action

document.getElementById("home-container").innerHTML = `
<pre>
    PRIYA CHAUDHARY
    BTech (CSE)
    20 Years
    College :GLA UNIVERSITY (MATHURA)
    School:Hanuman Prasad Ddhanuka
    Sign:Virgo
    DOB:25th April 2005
    💡 Skills: Web Development, JavaScript, CSS, API Integration, Debugging
    📌 Interests: Interactive UI Design, Theme Customization, Code Optimization
    🌟 Projects:
    - Portfolio Website
    - API-based Data Fetching Tool
    - Dynamic Theme Changer
    – AI-powered cavity detection
    – Build a task manager that tracks CPU and memory usage.
    – Implement end-to-end encryption for messaging.
    – Analyze password security using entropy calculation.
</pre>
`;
    document.querySelector(".nav-container").style.gap = "8px";
});