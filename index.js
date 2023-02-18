// import _ from "lodash";

// Функция groupBy(), которая группирует объекты по заданному свойству
const students = [
  { name: "Tirion", class: "B", mark: 3 },
  { name: "Keit", class: "A", mark: 3 },
  { name: "Ramsey", class: "A", mark: 4 },
];

const groupBy = (objects, key) =>
  objects.reduce((acc, object) => {
    if (!Object.hasOwn(acc, object[key])) {
      acc[object[key]] = [];
    }

    acc[object[key]].push(object);

    return acc;
  }, {});

console.log(groupBy(students, "mark"));
