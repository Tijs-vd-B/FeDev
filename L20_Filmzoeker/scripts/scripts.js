// initial-test-stuff
// movies.forEach((element) => {
//   console.log(element.Title);
// });
// const names = (array) => array.map((n) => n.Title); // independent of superheroes, could work on all arrays ...
// console.log(names(movies));

const movieTitles = function (array) {
  const titles = array.map((n) => n.Poster);
  return titles;
};
// console.log(movieTitles(movies)); // test

const elementMovieList = document.getElementById("movie-list");

const addToMoviesList = function (movieSelected) {
  let newListItem = document.createElement("li");
  let newImgItem = document.createElement("img");
  newImgItem.src = movieSelected;
  // newListItem.classList.add("movie-list-item");
  elementMovieList.appendChild(newListItem);
  newListItem.appendChild(newImgItem);
  //   newImgItem.appendChild(document.createTextNode(movieSelected));
};
movieTitles(movies).forEach((e) => {
  addToMoviesList(e);
});
