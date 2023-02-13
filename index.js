import _ from "lodash";

// Функция convert(), которая конвертирует даты в массив человеко-читаемых строк на английском языке

const convert = (...args) => {
  const result = [];

  for (let i = 0; i < args.length; i += 1) {
    const date = new Date(...args[i]).toDateString();
    result.push(date);
  }
  return result;
};

const date = [
  [1993, 3, 24],
  [1997, 8, 12],
  [2001, 10, 18],
];

console.log(convert(...date));
