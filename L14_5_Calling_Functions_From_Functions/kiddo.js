const checkAge = function (age) {
  console.log("Entering checkAge");
  console.log("Returning value for " + age);
  return age >= 18;
};

const responseToAge = function (check) {
  //   const checked = checkAge(check);
  if (checkAge(check)) {
    return "Hello there";
  } else return "Hey kiddo";
};

console.log(responseToAge(11));

console.log(responseToAge(29));

console.log(responseToAge(18));
