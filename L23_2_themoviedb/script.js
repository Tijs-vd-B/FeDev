const elementGenreList = document.getElementById("genre-list");
const elementFavoriteTitle = document.getElementById("favorite-title");
const elementTopRatedTitles = document.getElementById("toprated-titles");
const elementTopRatedActionTitles = document.getElementById(
  "toprated-action-titles"
);
const elementTopRated1975Titles = document.getElementById(
  "toprated-1975-titles"
);

const addGenreListItemsToDom = async () => {
  const array = await getMovieGenres();
  array.genres.forEach((e) => {
    // returned is an array named genres...
    // let newUlItem = document.createElement("ul");
    let newLiItem = document.createElement("li");
    elementGenreList.appendChild(newLiItem);
    newLiItem.appendChild(
      document.createTextNode("genre naam: " + e.name + "  id: " + e.id)
    );
  });
};

const addFavoriteTitleToDom = async (imdbId) => {
  const movieDbData = await getMovieById(imdbId);
  let newHeader = document.createElement("h2");
  elementFavoriteTitle.appendChild(newHeader);
  newHeader.appendChild(
    document.createTextNode(movieDbData.movie_results[0].title)
  );
};

const addTopRatedListItemsToDom = async () => {
  const array = await getTopRatedMovies();
  const firtst10 = array.results.splice(0, 10);
  firtst10.forEach((e) => {
    let newLiItem = document.createElement("li");
    elementTopRatedTitles.appendChild(newLiItem);
    newLiItem.appendChild(
      document.createTextNode(e.title + " " + e.vote_average)
    );
  });
};

const addTopRatedActionListItemsToDom = async () => {
  const array = await getTopRatedActionMovies();
  const firtst10 = array.results.splice(0, 10);
  firtst10.forEach((e) => {
    let newLiItem = document.createElement("li");
    elementTopRatedActionTitles.appendChild(newLiItem);
    newLiItem.appendChild(
      document.createTextNode(e.title + " " + e.vote_average)
    );
  });
};

const addTopRated1975ListItemsToDom = async () => {
  const array = await getTopRatedActionMovies();
  const firtst10 = array.results.splice(0, 10);
  firtst10.forEach((e) => {
    let newLiItem = document.createElement("li");
    elementTopRated1975Titles.appendChild(newLiItem);
    newLiItem.appendChild(
      document.createTextNode(e.title + " " + e.vote_average)
    );
  });
};

document.addEventListener("DOMContentLoaded", () => {
  addGenreListItemsToDom();
  addFavoriteTitleToDom("tt11655202");
  addTopRatedListItemsToDom();
  addTopRatedActionListItemsToDom();
  addTopRated1975ListItemsToDom();
});
