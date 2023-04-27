let mainContainer = document.querySelector("#mainContainer");
console.log(mainContainer);

let gitUrl = "https://api.github.com/users/annamaynard";
console.log(gitUrl)

fetch(gitUrl, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
})

.then((response) => {
    return response.json();
})

.then((parsedResponse)=> {

console.log(parsedResponse);

// //HTML

let avatarPic = document.createElement("img");
avatarPic.src = parsedResponse.avatar_url;
mainContainer.appendChild(avatarPic);
avatarPic.classList.add("avatarPic");

let userName = document.createElement('h1');
userName.innerText = parsedResponse.name;
mainContainer.appendChild(userName);
userName.classList.add("userName");

// // let location = document.createElement("h2");
// // userName.innerText = `${data.location} \n GitHub URL:`;
// // location.appendChild("div");

})