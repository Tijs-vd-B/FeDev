const huiswerkMaken = function (vak, callback, duration) {
  console.log("Ok, ok, ik ga nu mijn", vak, "huiswerk maken.");
  setTimeout(() => {
    callback();
  }, duration);
};
const klaarMetHuiswerk = function () {
  console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
};

huiswerkMaken("wiskunde", klaarMetHuiswerk, 15000);
