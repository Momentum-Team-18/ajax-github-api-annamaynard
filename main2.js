let gitUrl = "https://api.github.com/users/annamaynard";

console.log(gitUrl);

fetch(gitUrl, {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((response) => {
    return response.json();
  })

  .then((parsedResponse) => {
    console.log(parsedResponse);
    console.log(parsedResponse.repos_url);
    fetch(parsedResponse.repos_url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((responseRepo) => {
        return responseRepo.json();
      })
      .then((parsedRepo) => {
        gitRepo(parsedRepo)
        console.log(parsedRepo);
      });

    // HEADER DIV
    let headerDiv = document.createElement("div");
    headerDiv.classList.add("headerDiv");
    mainContainer.appendChild(headerDiv);

    // AVATAR PIC
    let avatarDiv = document.createElement("div");
    avatarDiv.classList.add("avatarDiv");
    let avatarPic = document.createElement("img");
    avatarPic.src = parsedResponse.avatar_url;
    avatarPic.classList.add("image");
    headerDiv.appendChild(avatarDiv);
    avatarDiv.appendChild(avatarPic);

    console.log(avatarDiv);

    // ANNA MAYNARD
    let nameDiv = document.createElement("div");
    nameDiv.classList.add("nameDiv");
    nameDiv.innerText = parsedResponse.name;
    mainContainer.appendChild(nameDiv);  
    headerDiv.appendChild(nameDiv);
   
    console.log(nameDiv);

    // USER INFO DIV
    let userInfoDiv = document.createElement("div");
    userInfoDiv.classList.add("userInfoDiv");
    mainContainer.appendChild(userInfoDiv);
    console.log(userInfoDiv);

    // LOCATION
    let userLocation = document.createElement("p");
    userLocation.innerText = `Location :  ${parsedResponse.location}`;
    userInfoDiv.appendChild(userLocation);

    // URL
    let gitHubUrl = document.createElement("p");
    gitHubUrl.innerText = `GitHub URL : ${parsedResponse.url}`;
    userInfoDiv.appendChild(gitHubUrl);

    // USERNAME
    let userLogin = document.createElement("p");
    userLogin.innerText = `GitHub username : ${parsedResponse.login}`;
    userInfoDiv.appendChild(userLogin);

    
    // Call the gitRepo function to populate the reposDiv


    // THIS IS WHERE YOU LEFT OFF -- ADDING A DIV FOR THE REPOSITORIES 
    let repoDiv = document.createElement("div");
    repoDiv.classList.add("repoDiv");
    mainContainer.appendChild(repoDiv);

    let gitRepo = function(parsedResponse) {

        for(let repo of parsedResponse) {
            let repoLink= document.createElement('a');
            repoLink.classList.add("repoDiv")
            repoLink.href=repo.url
            repoLink.innerText=repo.url
            mainContainer.append(repoDiv)
            mainContainer.append(repoLink);
    
        }
        console.log(mainContainer);
    
    }
 
    mainContainer.appendChild(headerDiv);
    // mainContainer.appendChild(nameDiv);
    mainContainer.appendChild(userInfoDiv);
    mainContainer.appendChild(repoDiv);
  });
