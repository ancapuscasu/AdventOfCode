//expected answer: 1252

const { readFileSync } = require("fs");
const path = require("path");

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);

  return arr;
}

const arr = syncReadFile(path.resolve(path.join(__dirname, "..", "input.txt")));

let numIncreases = 0;
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  newArr.push(parseInt(arr[i]) + parseInt(arr[i + 1]) + parseInt(arr[i + 2]));
}
for (let i = 1; i < newArr.length - 2; i++) {
  if (newArr[i] > newArr[i - 1]) {
    numIncreases++;
  }
}
console.log(numIncreases); //1252
