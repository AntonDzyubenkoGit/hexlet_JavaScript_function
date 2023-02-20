// import _ from "lodash";
// import path from "path";
// import * as fs from "node:fs";
// import get from "lodash/get.js";

// Испытания. Javascript: Переворот строки

const reverse = (str) => {
  const [...result] = str;
  return result.reverse().join("");
};

// Вариант с рекурсией

const reverse2 = (str) => {
  if (str.length === 0) {
    return str;
  }

  return `${str.slice(-1)}${reverse2(str.slice(0, - 1))}`
};

console.log(reverse2("hexlet"));
