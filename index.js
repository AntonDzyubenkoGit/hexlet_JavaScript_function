// import _ from "lodash";
// import path from "path";
// import * as fs from "node:fs";
// import get from "lodash/get.js";

// Функция sequenceSum(), которая которая находит сумму последовательности целых чисел.

const sequenceSum = (begin, end) => {
  if (end === begin) {
    return begin;
  }
  if (end < begin) {
    return NaN;
  }

  return end + sequenceSum(begin, end - 1);
};

console.log(sequenceSum(1, 5));
