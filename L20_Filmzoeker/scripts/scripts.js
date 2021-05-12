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
    let newObjItem = document.createElement("obj");
    newObjItem.classList.add("portfolio__image");
    // newListItem.class = "movie-container__item";
    let newAItem = document.createElement("a");
    newAItem.href = "https://www.imdb.com/title/" + e.imdbID;
    newAItem.target = "blank";
    newAItem.classList.add("button");
    let newImgItem = document.createElement("img");
    newImgItem.classList.add("movie-container__item__image");
    newImgItem.src = e.Poster;
    newImgItem.alt = e.Title;
    let newBtnItem = document.createElement("div");
    newBtnItem.classList.add("button");
    newBtnContent = document.createElement("p");
    // newListItem.classList.add("movie-list-item");
    elementMovieList.appendChild(newObjItem);
    newObjItem.appendChild(newImgItem);
    // newObjItem.appendChild(newBtnItem);
    // newBtnItem.appendChild(newAItem);
    newObjItem.appendChild(newAItem);
    newAItem.appendChild(newBtnContent);
    newBtnContent.appendChild(document.createTextNode("Read more"));
  });
};
// console.log(movieTitles(movies)); // test

const radioList = document.querySelectorAll("#radio");
radioList.forEach(function (btn) {
  btn.addEventListener("change", function (e) {
    switch (e.target.value) {
      case "all-movies":
        console.log(e.target.value);
        filterMovieTitle("");
        break;
      case "latest-movies":
        console.log(e.target.value);
        filterMovieAge(2014);
        break;
      case "avengers-movies":
        console.log(e.target.value);
        filterMovieTitle("Avengers");
        break;
      case "batman-movies":
        console.log(e.target.value);
        filterMovieTitle("Batman");
        break;
      case "x-men-movies":
        filterMovieTitle("X-Men");
        break;
      case "princess-movies":
        console.log(e.target.value);
        filterMovieTitle("Princess");
        break;
    }
  });
});
const filterMovieTitle = function (name) {
  clearMovieList();
  addMoviesToDom(
    movies.filter((n) => n.Title.includes(name))
  );
};

const filterMovieAge = function (year) {
  console.log(movies.Year);
  clearMovieList();
  addMoviesToDom(movies.filter((n) => n.Year >= year));
};

// clears the li elements added
const clearMovieList = function () {
  let elementMovieListItem = elementMovieList.querySelectorAll("obj");
  elementMovieListItem.forEach(function (e) {
    elementMovieList.removeChild(e);
  });
};

addMoviesToDom(movies); //start is all movies anyways
// movies.forEach((element) => {
//   console.log(parseInt(element.Year), element.Year);
// });
