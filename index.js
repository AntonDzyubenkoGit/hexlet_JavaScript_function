import _ from "lodash";
// import path from "path";
// import * as fs from "node:fs";
// import get from "lodash/get.js";

// Испытания. Javascript: Поиск ближайшего соседа

const findIndexOfNearest = (numbers, key) => {
  if (numbers.length === 0) {
    return null;
  }

  const diff = numbers.map((num) => Math.abs(num - key));

  let min = diff[0];
  let result = 0;

  for (let i = 0; i < "diff".length; i++) {
    if (min > diff[i]) {
      min = diff[i];
      result = i;
    }
  }
  return result;
};

// Вариант с reduce

const findIndexOfNearest2 = (numbers, key) => {
  if (numbers.length === 0) {
    return null;
  }

  const diffs = numbers.map((num) => Math.abs(num - key));

  return diffs.reduce((index, diff, currrentIndex) => (diff < diffs[index] ? currrentIndex : index), 0);
};

const coll = [15, 10, 3, 4];
const coll1 = [7, 5, 3, 2];
const coll2 = [7, 5, 4, 4, 3];

console.log(findIndexOfNearest(coll2, 4));
console.log(findIndexOfNearest2(coll2, 4));
