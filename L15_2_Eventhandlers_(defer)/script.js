const myButton = document.querySelector("#mybutton");
const myColorButton = document.querySelector("#myColorButton");
// const body = document.getElementsByTagName("body");

myButton.addEventListener("click", function () {
  alert("button clicked");
});

const makeBackgroundRed = () => {
  document.body.classList.toggle("red-background");
};
myColorButton.addEventListener("click", makeBackgroundRed);

// const alarm = function (tekst) {
//   alert("button clicked");
// };
