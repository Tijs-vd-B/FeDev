const age = 17;
const isFemale = true;
const driverStatus = "notbob";
const name = "Sarah";
const totalAmount = 34;

if (age >= 18) {
  console.log("Kom maar binnen!");
} else {
  console.log("HO!");
}
if (isFemale) {
  console.log("You're female");
} else {
  console.log("You're not female");
}
if (driverStatus === "bob") {
  console.log("You may drive!");
} else {
  console.log("You're not allowed to drive");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Je mag de volle mep betalen");
}
if (name == "Sarah" || name == "Bram") {
  console.log("Wat een leuke naam! Geniet van deze gratis consumptie!!");
}

if (totalAmount >= 25) {
  if (totalAmount >= 50) {
    console.log(
      "Dank voor je enorme bestelling, daar krijg je een portie nachos bij!"
    );
  } else {
    console.log(
      "Dank voor je behoorlijke bestelling, daar krijg je een portie (vega)bitterballen bij!"
    );
  }
} else {
  console.log("Dank voor je bestelling!");
}
