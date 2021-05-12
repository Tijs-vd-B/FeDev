// initial-test-stuff
// movies.forEach((element) => {
//   console.log(element.Title);
// });
// const names = (array) => array.map((n) => n.Title); // independent of superheroes, could work on all arrays ...
// console.log(names(movies));
const elementMovieList = document.getElementById("movie-list");

// adds li elements (with content from array) to ul movie-list
const addMoviesToDom = function (array) {
  array.forEach((e) => {
    let newListItem = document.createElement("li");
    let newAItem = document.createElement("a");
    // let imdbLink = ;
    newAItem.href = "https://www.imdb.com/title/" + e.imdbID;
    newAItem.target = "blank";
    let newImgItem = document.createElement("img");
    newImgItem.src = e.Poster;
    newImgItem.alt = e.Title;
    // newListItem.classList.add("movie-list-item");
    elementMovieList.appendChild(newListItem);
    newListItem.appendChild(newAItem);
    newAItem.appendChild(newImgItem);
  });
};
// console.log(movieTitles(movies)); // test

const radioList = document.querySelectorAll("#radio");
radioList.forEach(function (btn) {
  btn.addEventListener("change", function (e) {
    let wordInMovieTitle = "";
    switch (e.target.value) {
      case "all-movies":
        console.log(e.target.value);
        filterMovieTitle(wordInMovieTitle);
        break;
      case "latest-movies":
        console.log(e.target.value);
        filterMovieAge(2014);
        break;
      case "avengers-movies":
        console.log(e.target.value);
        wordInMovieTitle = "Avengers";
        filterMovieTitle(wordInMovieTitle);
        break;
      case "batman-movies":
        console.log(e.target.value);
        wordInMovieTitle = "Batman";
        filterMovieTitle(wordInMovieTitle);
        break;
      case "x-men-movies":
        console.log(e.target.value);
        wordInMovieTitle = "X-Men";
        filterMovieTitle(wordInMovieTitle);
        break;
      case "princess-movies":
        console.log(e.target.value);
        wordInMovieTitle = "Princess";
        filterMovieTitle(wordInMovieTitle);
        break;
    }
  });
});
const filterMovieTitle = function (name) {
  clearMovieList();
  addMoviesToDom(movies.filter((n) => n.Title.includes(name)));
};

const filterMovieAge = function (year) {
  console.log(movies.Year);
  clearMovieList();
  addMoviesToDom(movies.filter((n) => n.Year >= year));
};

// clears the li elements added
const clearMovieList = function () {
  let elementMovieListItem = elementMovieList.querySelectorAll("li");
  elementMovieListItem.forEach(function (e) {
    elementMovieList.removeChild(e);
  });
};

addMoviesToDom(movies); //start is all movies anyways
// movies.forEach((element) => {
//   console.log(parseInt(element.Year), element.Year);
// });
