// let mainContainer = document.querySelector("#mainContainer");
// let photoName= document.querySelector("#photoName");
// let userInfo= document.querySelector("#userInfo");
// let userRepos = document.querySelector("#userRepos");

// ^trying to figure out how to style this so that they are in seperate <divs> on the browser. ??? 




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


        // AVATAR PIC
let avatarPic = document.createElement("img");
avatarPic.src = parsedResponse.avatar_url;
avatarPic.classList.add("image");

        // ANNA MAYNARD 
let userName = document.createElement('h1');
userName.innerText = parsedResponse.name;
userName.classList.add("userName");



mainContainer.appendChild(avatarPic);
mainContainer.appendChild(userName);



// FIRST DIV 
    // LOCATION 
    // URL --- make short link  -- why is it not taking on userInfo class? 
    // GITHUB USERNAME 


          // LOCATION
let userLocation = document.createElement('p');
userLocation.innerText = `Location :  ${parsedResponse.location}`
mainContainer.appendChild(userLocation);
userLocation.classList = ("userInfo");
 
console.log(userLocation)
        
        // URL
let gitHubUrl = document.createElement('p');
gitHubUrl.innerText = `GitHub URL : ${parsedResponse.url}`;
mainContainer.appendChild(gitHubUrl);
userLocation.classList = ("userInfo");

console.log(gitHubUrl);

        // USERNAME
let userLogin = document.createElement('p');
userLogin.innerText = `GitHub username : ${parsedResponse.login}`;
mainContainer.appendChild(userLogin);
userLogin.classList = ("userInfo");

console.log(userLogin)


        // REPOS
let gitRepos = document.createElement('div');
gitRepos.innerText = parsedResponse.repos_url; 
mainContainer.appendChild(gitRepos)
gitRepos.classList.add=("gitRepos");

})