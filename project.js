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
    Priya Chaudhary
    BTech (CSE)
    20 Years
    GLA UNIVERSITY (MATHURA)
</pre>
`;
    document.querySelector(".nav-container").style.gap = "3px";
});