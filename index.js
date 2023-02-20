import _ from "lodash";
// import path from "path";
// import * as fs from "node:fs";
// import get from "lodash/get.js";

// Испытания. Javascript: Счётчик одногодок

const getMenCountByYear = (coll) => {
  const years = coll.filter(({ gender }) => gender === "male").map(({ birthday }) => birthday.slice(0, 4));

  const result = years.reduce((acc, item) => {
    acc[item] = years.filter((year) => year === item).length;
    return acc;
  }, {});

  return result;
};

// Вариант с lodash

const getMenCountByYear2 = (coll) => {
  const mens = coll.filter(({ gender }) => gender === "male");
  const years = mens.map(({ birthday }) => birthday.split("-")[0]);
  const result = years.reduce((acc, year) => {
    const count = _.get(acc, year, 0) + 1;
    return { ...acc, [year]: count };
  }, {});

  return result;
};

const users = [
  { name: "Bronn", gender: "male", birthday: "1973-03-23" },
  { name: "Reigar", gender: "male", birthday: "1973-11-03" },
  { name: "Eiegon", gender: "male", birthday: "1963-11-03" },
  { name: "Sansa", gender: "female", birthday: "2012-11-03" },
  { name: "Jon", gender: "male", birthday: "1980-11-03" },
  { name: "Robb", gender: "male", birthday: "1980-05-14" },
  { name: "Tisha", gender: "female", birthday: "2012-11-03" },
  { name: "Rick", gender: "male", birthday: "2012-11-03" },
  { name: "Joffrey", gender: "male", birthday: "1999-11-03" },
  { name: "Edd", gender: "male", birthday: "1973-11-03" },
];

console.log(getMenCountByYear2(users));
