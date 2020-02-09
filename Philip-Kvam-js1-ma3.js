// question 1

(a,b) => a-b;

// question 2
function loadGames(json) {
    const games = json.results;
    for (let i = 0; i < games.length; i++) {
        console.log(games[i].name)
        
    }

    
};
const baseUrl= "https://api.rawg.io/api/games?genres=sports";
fetch(baseUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) { 
        loadGames(json);
    })
    .catch(function(error) {
        document.location.href="ferror.html";
     
        console.dir(error);
    });

// question 3
replace("cats","giraffes");


// question 4
const queryString=document.location.search;
const params=new URLSearchParams(queryString);
const checkUrl="https://my.site.com?userId=7";
fetch(checkUrl)

if (params.has("userId"<10)) {
    document.location.href="first.html";

}
else if (params.has("userId">10)){
    document.location.href="first.html";

}
else if(params.has("userId"=false)) {
    document.location.href="third.html";
}
    


// question 5

const container=document.querySelector(".container");
const button = document.querySelector(".btn");

    container.removeChild(button);
    


// question 6
const listElement=document.createElement("li");
const listElementContent = document.createTextNode("Parrots");
const animalContainer=document.querySelector(".animals");
const elephant=document.querySelector(".elephants");

listElement.className="parrots";
listElement.appendChild(listElementContent);


animalContainer.appendChild(listElement);
elephant.before(listElement);
// question 7

function assignRating(json) {
    const divTextValue=document.querySelector(".rating");
    const games=json.rating;
   divTextValue.innerText =games;
    console.log(games);
   
        

};

const baseUrl="https://api.rawg.io/api/games/3801";
fetch(baseUrl)
.then(function(response) {

    return response.json();
})
.then(function(json) {
    assignRating(json);

    // console.dir(json);
})
.catch(function(error) {
    console.log(error);
});

// question 8



// question 9


// question 10

// your answer for question 1 goes here