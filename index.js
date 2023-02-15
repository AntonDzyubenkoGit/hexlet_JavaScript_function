import _ from "lodash";

// Функция getChildren(), которая принимает на вход список пользователей и возвращает плоский список их детей

const getChildren = (collection) => {
  const result = collection.map(({ children }) => children).flat();
  return result;
};


const users = [
  {
    name: "Tirion",
    children: [{ name: "Mira", birthday: "1983-03-23" }],
  },
  { name: "Bronn", children: [] },
  {
    name: "Sam",
    children: [
      { name: "Aria", birthday: "2012-11-03" },
      { name: "Keit", birthday: "1933-05-14" },
    ],
  },
  {
    name: "Rob",
    children: [{ name: "Tisha", birthday: "2012-11-03" }],
  },
];

console.log(getChildren(users));
