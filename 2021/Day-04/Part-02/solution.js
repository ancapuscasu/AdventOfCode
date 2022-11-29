//expected answer: 793873

const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(
  path.resolve(path.join(__dirname, "..", "input.txt")),
  "utf-8"
);
const reports = input.split(/\r?\n/);
console.log(reports);

const nElem = reports[0].length;
let remainingReportsOxygen = reports.slice();
let remainingReportsCo2 = reports.slice();

for (let i = 0; i < nElem; i++) {
  let nRemaining = remainingReportsOxygen.length;
  let count = 0;
  for (let j = 0; j < nRemaining; j++) {
    if (remainingReportsOxygen[j][i] === "1") {
      count++;
    }
  }
  if (count >= nRemaining / 2) {
    remainingReportsOxygen = remainingReportsOxygen.filter(
      (report) => report[i] === "1"
    );
  } else {
    remainingReportsOxygen = remainingReportsOxygen.filter(
      (report) => report[i] === "0"
    );
  }
}

let i = 0;
while (remainingReportsCo2.length > 1) {
  let nRemaining = remainingReportsCo2.length;
  let count = 0;
  for (let j = 0; j < nRemaining; j++) {
    if (remainingReportsCo2[j][i] === "1") {
      count++;
    }
  }
  if (count >= nRemaining / 2) {
    remainingReportsCo2 = remainingReportsCo2.filter(
      (report) => report[i] === "0"
    );
  } else {
    remainingReportsCo2 = remainingReportsCo2.filter(
      (report) => report[i] === "1"
    );
  }

  i++;
}

let oxygen = parseInt(remainingReportsOxygen, 2);
let co2 = parseInt(remainingReportsCo2, 2);

console.log("oxygen", oxygen); //3089
console.log("co2", co2); //257
