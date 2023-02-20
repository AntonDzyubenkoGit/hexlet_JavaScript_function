// import _ from "lodash";
// import path from "path";
// import * as fs from "node:fs";
// import get from "lodash/get.js";

// Функция smallestDivisor(), которая находит наименьший делитель заданного числа

const smallestDivisor = (num) => {
  if (num === 1) {
    return num;
  }
  const iter = (num, divisor) => {
    if (num % divisor === 0) {
      return divisor;
    }
    return iter(num, divisor + 1);
  };

  return iter(num, 2);
};

console.log(smallestDivisor(15));
