import _ from "lodash";

// Функция average(), которая возвращает среднее арифметическое всех переданных аргументов

const average = (...integers) => {
  if (integers.length === 0) {
    return null;
  }

  let result = 0;

  for (let i = 0; i < integers.length; i += 1) {
    result += integers[i];
  }

  return result / integers.length;
};

//  Версия с lodash
const average2 = (...integers) => {
  if (integers.length === 0) {
    return null;
  }

  return _.sum(integers) / integers.length;
};

console.log(average(-3, 4, 2, 10));
