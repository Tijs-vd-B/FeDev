//https://www.irt.org/articles/js046/
//day of the month that each zodiac star sign starts on, starting with Aquarius.
const horroscopes = [20, 19, 21, 21, 21, 21, 22, 22, 22, 23, 22, 21];
//handy if you want to assign the result of starSign(), it can be mapped to these signs respectively
const starsigns =
  ("Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius");

const starSign = function (day, month) {
  if (day < horroscopes[month - 1]) return month;
  else if (month == 12) return 1;
  else return month + 1;
};
