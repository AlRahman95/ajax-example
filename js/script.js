fetch("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=10")
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    showGifs(response.data)
  });

  function showGifs(data) {
    for (var x = 0; x < data.length; x++) {
      var img = document.createElement('img');
      img.src = data[x].images.original.url;
      document.body.appendChild(img);
    }
  }
