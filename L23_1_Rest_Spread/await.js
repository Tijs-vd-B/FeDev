function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing Response");
    resolve(`Extra Info + ${response}`);
  });
}

makeRequest("Google")
  .then((response) => {
    console.log("Response Recieved");
    return processRequest(response);
  })
  .then((processedResponse) => {
    console.log(processedResponse);
  })
  .catch((err) => {
    console.log(err);
  });

// same as commented out above, but with async, await and try
// it try's the first bit, if it reecieves an erro it immediately stops and continues at catch
async function doWork() {
  try {
    const response = await makeRequest("Facebook"); // create an error by using anything but "Google"
    console.log("Response Recieved");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}
doWork();
