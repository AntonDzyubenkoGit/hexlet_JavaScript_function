import _ from "lodash";
// import path from "path";
// import * as fs from "node:fs";
// import get from "lodash/get.js";

// Испытания. Javascript: Фильтр анаграмм

const coll1 = ["aabb", "abcd", "bbaa", "dada"];
const coll2 = ["crazer", "carer", "racar", "caers", "racer"];
const coll3 = ["lazing", "lazy", "lacer"];

const charsDictionary = (word) => {
  const [...chars] = word;

  return chars.reduce((acc, item) => {
    acc[item] = chars.filter((char) => char === item).length;
    return acc;
  }, {});
};

const is = (object1, object2, keys) => {
  for (const key of keys) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const filterAnagrams = (word, arr) => {
  const result = [];

  for (const item of arr) {
    const [...keys] = item;
    if (is(charsDictionary(word), charsDictionary(item), keys)) {
      result.push(item);
    }
  }

  return result;
};

// Вариант с lodash

const filterAnagrams2 = (word, arr) => {
  const [...chars] = word;

  const charsDictionary = chars.reduce((acc, item) => {
    acc[item] = chars.filter((char) => char === item).length;
    return acc;
  }, {});

  const result = [];

  for (const item of arr) {
    const [...chars] = item;
    const itemDictionary = chars.reduce((acc, item) => {
      acc[item] = chars.filter((char) => char === item).length;
      return acc;
    }, {});
    if (_.isEqual(charsDictionary, itemDictionary)) {
      result.push(item);
    }
  }

  return result;
};

// Вариант через filter()

const filterAnagrams3 = (word, words) => {
  const normalize = (str) => str.split("").sort().join("");
  const normal = normalize(word);

  return words.filter((item) => normalize(item) === normal);
};

console.log(filterAnagrams3("racer", coll2));
