// const fetch = require("node-fetch"); // if used with node.js but creates an error in browsers!
const API_KEY = "<movieDB api_key>";
const baseUrl = "https://api.themoviedb.org/3";

async function getMovieGenres() {
  const apiUrl = `${baseUrl}/genre/movie/list?api_key=${API_KEY}`;
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function getMovieById(movieId) {
  const apiUrl = `${baseUrl}/find/${movieId}?language=en-US&external_source=imdb_id&api_key=${API_KEY}`;
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function getTopRatedMovies() {
  const apiUrl = `${baseUrl}/movie/top_rated?page=1&language=en-US&external_source=imdb_id&api_key=${API_KEY}`;
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function getTopRatedActionMovies() {
  const genreId = 28;
  const apiUrl = `${baseUrl}/discover/movie?page=1&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&api_key=${API_KEY}`;
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function getTopRated1975Movies() {
  const primaryReleaseRear = 1975;
  const apiUrl = `${baseUrl}/discover/movie?page=1&language=en-US&primary_release_year=${primaryReleaseRear}&include_adult=false&include_video=false&page=1&api_key=${API_KEY}`;
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

// getMovieGenres();
async function testIt() {
  const setOutput = await getMovieGenres();
  // const setOutput = await getMovieById("tt6105098");
  // const setOutput = await getTopRatedMovies();
  // const setOutput = await getTopRatedActionMovies();
  // const setOutput = await getTopRated1975Movies();
  console.log(setOutput); // setOutput();
}
// testIt();
