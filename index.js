// import _ from "lodash";
// import path from "path";
// import * as fs from "node:fs";
// import get from "lodash/get.js";

// Испытания. Javascript: Одинаковая четность

const isEven = (num) => num % 2 === 0;

const sameParityFilter = (collection) => {
  const firstNumber = collection[0];

  if (isEven(firstNumber)) {
    return collection.filter((num) => isEven(num));
  }

  return collection.filter((num) => !isEven(num));
};

// Версия №2
const sameParityFilter2 = (collection) => {
  const firstNumber = isEven(collection[0]);
  return collection.filter((num) => isEven(num) === firstNumber);
};

const coll1 = [-1, 0, 1, -3, 10, -2];
const coll2 = [2, 0, 1, -3, 10, -2];

console.log(sameParityFilter2(coll1));
