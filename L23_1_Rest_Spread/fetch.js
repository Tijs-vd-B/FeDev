const fetch = require("node-fetch"); // if used with node.js but creates an error in browsers!

fetch("https://swapi.dev/api/people/1/")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });
