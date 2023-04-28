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
gitHubUrl.classList = ("userInfo");

console.log(gitHubUrl);

        // USERNAME
let userLogin = document.createElement('p');
userLogin.innerText = `GitHub username : ${parsedResponse.login}`;
mainContainer.appendChild(userLogin);
userLogin.classList = ("userInfo");

console.log(userLogin)



// REPOS

let gitRepo = function(parsedResponse) {

    for(let repo in parsedResponse) {
        let repoDiv= document.createElement ('div');
        let repoLink= document.createElement('a');



        let source = parsedResponse[repo]
        let text = document.createTextNode ("href", source ["full_name"]);
        repoLink.setAttribute("href", source['git_url']);
        repoLink.appendChild(text);
        repoDiv.append(repoLink);
        mainContainer.append (repoDiv);

    }
    console.log(mainContainer);

}






        // REPOS
// let gitRepos = document.createElement('div');
// gitRepos.innerText = parsedResponse.repos_url; 
// mainContainer.appendChild(gitRepos)
// gitRepos.classList.add=("gitRepos");

})