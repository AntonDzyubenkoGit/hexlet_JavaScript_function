import _ from "lodash";

// Функция groupBy(), которая группирует объекты по заданному свойству

const groupBy = (objects, key) =>
  objects.reduce((acc, object) => {
    const groupName = object[key];
    const group = acc[groupName] ?? [];
    return { ...acc, [groupName]: group.concat(object) };
  }, {});

//Вариант с lodash

const groupBy2 = (collection, property) => {
  const result = _.groupBy(collection, property);
  return result;
};

// Версия №3

const groupBy3 = (collection, key) => {
  const result = collection.reduce((a, b) => {
    (a[b[key]] = a[b[key]] || []).push(b);
    return a;
  }, {});
  return result;
};

const students = [
  { name: "Tirion", class: "B", mark: 2 },
  { name: "Keit", class: "A", mark: 3 },
  { name: "Ramsey", class: "A", mark: 4 },
  { name: "Bronn", class: "B", mark: 3 },
  { name: "Sam", class: "A", mark: 2 },
  { name: "Aria", class: "B", mark: 5 },
  { name: "Keit", class: "B", mark: 4 },
  { name: "Rob", class: "B", mark: 4 },
  { name: "Taywin", class: "A", mark: 5 },
];

console.log(groupBy3(students, "class"));
