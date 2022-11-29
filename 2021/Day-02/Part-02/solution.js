//expected answer: 1,962,940

const { readFileSync } = require("fs");
const path = require("path");

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);

  return arr;
}

const directions = syncReadFile(
  path.resolve(path.join(__dirname, "..", "input.txt"))
);

let distance = 0;
let depth = 0;
let aim = 0;

for (let i = 0; i < directions.length; i++) {
  let direction = directions[i].replace(/\s[0-9]/g, "");
  let number = parseInt(directions[i].charAt(directions[i].length - 1));

  if (direction === "down") {
    aim += number;
  } else if (direction === "up") {
    aim -= number;
  } else {
    distance += number;
    depth += aim * number;
  }
}
console.log(distance); //2003
console.log(depth); //905474
