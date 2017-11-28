var input = document.querySelector('#user-gif-search');
var searchBtn = document.querySelector('#submit-gif-search');
var gifContainer = document.querySelector('#gif-result-container');

function findGifs(userInput) {
  fetch("https://api.giphy.com/v1/gifs/search?q=" + userInput +
  "&api_key=dc6zaTOxFJmzC&limit=10")
    .then(function(response) {    // we will use ajax to load the information using .then
      return response.json();     //have to convert to JSON so we can easily access objects and properties
    })
    .then(function(response) {
      showGifs(response.data)     //to show only data
    });
}  //Closes findGifs function

function showGifs(data) {
  gifContainer.innerHTML = '';
  for (var x = 0; x < data.length; x++) {
    var img = document.createElement('img');
    img.src = data[x].images.original.url;
    //add element to the end of it
    gifContainer.appendChild(img);
  }
}

if (input && searchBtn && gifContainer) {
  searchBtn.addEventListener('click', function() {
    var userInput = input.value;
    if (userInput !== '') {
      findGifs(userInput);
    }
  })
}
