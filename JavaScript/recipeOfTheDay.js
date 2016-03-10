var recipesForIndexFile = ["recipe/antonbollar.html", "recipe/appelpie.html", "recipe/chokladbollar.html",     
                           "recipe/kanelbullar.html", "recipe/Proteinpankaka.html"];
var recipes = ["../recipe/antonbollar.html", "../recipe/appelpie.html", "../recipe/chokladbollar.html", 
               "../recipe/kanelbullar.html", "../recipe/Proteinpankaka.html"];
var rand = Math.floor(Math.random() * 5);
var href = document.location.href;
var file = href.substr(href.lastIndexOf('/') + 1);

function setRandomLink(){
    if(file === "index.html"){
        $("#myRandomLink").attr("href", recipesForIndexFile[rand]);
    }
    else{
        $("#myRandomLink").attr("href", recipes[rand]);
    }
};