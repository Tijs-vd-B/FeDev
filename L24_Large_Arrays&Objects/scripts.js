const elementOutput = document.getElementById("outputlist");

// clears the elements added
const clearOutput = function () {
  let elementOutputtedItem = elementOutput.querySelectorAll("li");
  elementOutputtedItem.forEach(function (e) {
    elementOutput.removeChild(e);
  });
};

const addCountriesToDom = async (data) => {
  const array = await allCountries(data);
  array.forEach((e) => {
    let newLiItem = document.createElement("li");
    elementOutput.appendChild(newLiItem);
    newLiItem.appendChild(document.createTextNode("Country: " + e));
  });
};

const addCapriToDom = async (data) => {
  const array = await getCapriWomenAbove30(data);
  array.forEach((e) => {
    let nameSpan = document.createElement("span");
    nameSpan.innerHTML = `${e.name} ${e.surname}`;
    let photoImg = document.createElement("img");
    photoImg.src = e.photo;
    let ageSpan = document.createElement("span");
    ageSpan.innerHTML = e.age;
    let birthdaySpan = document.createElement("span");
    birthdaySpan.innerHTML = e.birthday.dmy;
    let newLiItem = document.createElement("li");
    elementOutput.appendChild(newLiItem);
    newLiItem.appendChild(nameSpan);
    newLiItem.appendChild(document.createElement("br"));
    newLiItem.appendChild(ageSpan);
    newLiItem.appendChild(document.createElement("br"));
    newLiItem.appendChild(birthdaySpan);
    newLiItem.appendChild(document.createElement("br"));
    newLiItem.appendChild(photoImg);
  });
};

const radioList = document.querySelectorAll("#radio");
radioList.forEach(function (btn) {
  btn.addEventListener("change", function (e) {
    switch (e.target.value) {
      case "landenlijst":
        console.log(e.target.value);
        clearOutput();
        addCountriesToDom(randomPersonData);
        break;
      case "capri":
        console.log(e.target.value);
        clearOutput();
        addCapriToDom(randomPersonData);
        break;
    }
  });
});
