//expected answer: 1,025,636

const { readFileSync } = require("fs");
const path = require("path");

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);

  return arr;
}

const reports = syncReadFile(
  path.resolve(path.join(__dirname, "..", "input.txt"))
);

let common = {};
let gamma = [];
let epsilon = [];

for (let i = 0; i < reports.length; i++) {
  let binary = reports[i];
  for (let j = 0; j < binary.length; j++) {
    if (binary[j] === "1") {
      common[j] = common[j] ? common[j] + 1 : 1;
    }
  }
}

for (let property in common) {
  if (reports.length - common[property] < reports.length / 2) {
    epsilon.push("0");
    gamma.push("1");
  } else {
    epsilon.push("1");
    gamma.push("0");
  }
}

let gammaDec = parseInt(gamma.join(""), 2);
let epsilonDec = parseInt(epsilon.join(""), 2);

console.log(gammaDec); //3827
console.log(epsilonDec); //268
