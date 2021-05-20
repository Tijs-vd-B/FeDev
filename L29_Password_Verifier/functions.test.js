//Bestand functions.test.js:
const functions = require("./functions.js");

describe("Verify separate condition pass functions", () => {
  test("Password is null", function () {
    expect(functions.isNotNullOrUndefined(null)).toBe(false);
  });
  test("Password is not null", function () {
    expect(functions.isNotNullOrUndefined("null")).toBe(true);
  });

  test("Password is shorter than 9 chars", function () {
    expect(functions.hasRightLength("notnine")).toBe(true);
  });
  test("Password is longer than 9 chars", function () {
    expect(functions.hasRightLength("morethan9chars")).toBe(false);
  });

  test("Password has a Capital", function () {
    expect(functions.hasUpperCaseCharacter("notN1ne")).toBe(true);
  });
  test("Password has no Capital", function () {
    expect(functions.hasUpperCaseCharacter("notne")).toBe(false);
  });

  test("Password has lower case chars", function () {
    expect(functions.hasLowerCaseCharacter("notN1ne")).toBe(true);
  });
  test("Password has no lower case chars", function () {
    expect(functions.hasLowerCaseCharacter("NOTNINE")).toBe(false);
  });

  test("Password has digits", function () {
    expect(functions.hasDigit("notN1ne")).toBe(true);
  });
  test("Password has no digits", function () {
    expect(functions.hasDigit("NOTNINE")).toBe(false);
  });
});

describe("Verify number of conditions match", () => {
  test("Passes minimum conditions", function () {
    expect(functions.minimumConditionsReached("notN0ll")).toBe(true);
  });
  test("Does not pass minimum conditions", function () {
    expect(functions.minimumConditionsReached("MORETHANNINE")).toBe(false);
  });
  test("Passes with upper case and digits, but no lower case", function () {
    expect(functions.minimumConditionsReached("N0TN1NE")).toBe(true);
  });
});

describe("Verify full password", () => {
  test("Passes with only lower case chars", function () {
    expect(functions.verifyPassword("onlylow")).toBe(true);
  });
  test("Passes with upper case and digits, but no lower case", function () {
    expect(functions.verifyPassword("N0TN1NE")).toBe(false);
  });
  test("Password is undefined", function () {
    expect(functions.verifyPassword()).toBe(false);
  });
  test("Password is null", function () {
    expect(functions.verifyPassword(null)).toBe(false);
  });
  test("Password is empty", function () {
    expect(functions.verifyPassword("")).toBe(false);
  });
  test("Password is only one lower case char", function () {
    expect(functions.verifyPassword("a")).toBe(true);
  });
  test("Password has uncommon chars, but with a lower case char", function () {
    expect(functions.verifyPassword("n&*^%@.")).toBe(true);
  });
  test("Password is too long, but passes enough others", function () {
    expect(functions.verifyPassword("nLONG&*^%@.")).toBe(true);
  });
  test("Password is too long, and does not pass enough others", function () {
    expect(functions.verifyPassword("onlytoolongandnotnull")).toBe(false);
  });
});
