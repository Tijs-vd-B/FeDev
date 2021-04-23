const paintWall = function (color, defineWall) {
  console.log("The " + defineWall + " wall is painted " + color);
}; // the order of the arguments in the function(x, y) doesn't matter, the names matter
// the order here defines the order the arguments are read when called (and thus which argument is set to what value)

paintWall("green", "southern");
paintWall("red", "south-east");
paintWall("south-east", "red"); // the order matters of-course
