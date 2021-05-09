const paragraphElement = document.createElement("p");
const paragraphsMain = document
  .getElementById("main-section")
  .getElementsByTagName("div")[0]; // do NOT forget the [0]
paragraphElement.classList.add("added-para-class");
paragraphsMain.appendChild(paragraphElement);
paragraphElement.appendChild(
  document.createTextNode(
    "And an added paragraph, with a class ('added-para-class')"
  )
);
const paraToRemove = paragraphsMain.getElementsByTagName("p")[0];
const removedPara = paragraphsMain.removeChild(paraToRemove);
removedPara.appendChild(
  document.createTextNode(" that is now down here, but it was at the top")
);
paragraphsMain.appendChild(removedPara);
