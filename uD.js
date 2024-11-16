let storedText;
fetch('https://ipinfo.io/json?callback') .then(function(response) {
  response.text().then(function(text) {
    let storedText = text;
    let str=storedText.toString();
    uD=str.slice(1, -1);
  });
});