let mainContainer = document.querySelector("#mainContainer");
console.log(mainContainer);

let gitHubUrl = "https://api.github.com/users/annamaynard";
console.log(gitHubUrl)

fetch(gitHubUrl, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
})

.then((response) => { 
    return response.json();
})
