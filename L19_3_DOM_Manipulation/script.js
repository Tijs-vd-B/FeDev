const bigFiveList = document.querySelector(".big-five-list");
const bigFiveListItems = document.querySelectorAll(".big-five-list-item");
const bigFiveListButton = document.querySelectorAll(".big-five-button");
// bigFiveListItems.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     console.log(this.textContent);
//   });
// });
const spottedList = document.getElementById("spotted-animals-list");
let newSpottedAnimal = "";
bigFiveListButton.forEach(function (btn) {
  btn.addEventListener("click", function () {
    newSpottedAnimal = this.textContent;
    addClickedToList(newSpottedAnimal);
  });
});
const addClickedToList = function (newSpottedAnimal) {
  const newSpottedListItem = document.createElement("li");
  newSpottedListItem.classList.add("spotted-animals-list-item");
  spottedList.appendChild(newSpottedListItem);
  newSpottedListItem.appendChild(document.createTextNode(newSpottedAnimal));
};

const removeFirstBtn = document.getElementById("remove-first-item-button");
removeFirstBtn.addEventListener("click", function () {
  const setItemToRemove = spottedList.getElementsByTagName("li")[0];
  if (setItemToRemove !== undefined) {
    spottedList.removeChild(setItemToRemove);
  }
});

const RemoveAllSpotted = document.getElementById("remove-all-button");

RemoveAllSpotted.addEventListener("click", function () {
  let spottedListItem = spottedList.querySelectorAll("li");
  spottedListItem.forEach(function (e) {
    spottedList.removeChild(e);
  });
});
