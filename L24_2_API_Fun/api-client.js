const pokéBase = "https://pokeapi.co/api/v2";
const originalPoké = 151;
async function getRandomPoké() {
  const id = Math.floor(Math.random() * originalPoké) + 1;
  const apiUrl = `${pokéBase}/pokemon/${id}`;
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

const dadJokeBase = "https://icanhazdadjoke.com";
async function getRandomDadJoke() {
  const apiUrl = `${dadJokeBase}`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Just testing with Postman",
        Accept: "text/plain",
      },
    });
    return await response.text();
  } catch (error) {
    console.log(error);
  }
}

const tronaldDumpBase = "https://tronalddump.io";
async function getRandomDumpQuote() {
  const apiUrl = `${tronaldDumpBase}/random/quote`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
