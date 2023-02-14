import _ from "lodash";

// Внутренняя функция takeLast(), которая возвращает последние n символов строки в обратном порядке.

const run1 = (text) => {
  const takeLast = (text, count) => {
    if (count > text.length) {
      return null;
    }

    let result = "";
    const lBound = text.length - count;

    for (let i = text.length - 1; i >= lBound; i -= 1) {
      result = `${result}${text[i]}`;
    }
    return result;
  };

  return takeLast(text, 4);
};

// Вариант через массив и преобразование его в строку

const run2 = (text) => {
  const takeLast = (str, length) => {
    if (str.length === 0 || str.length < length) {
      return null;
    }

    const result = [];

    for (let i = str.length - 1; result.length < length; i -= 1) {
      result.push(str[i]);
    }
    return result.join("");
  };

  return takeLast(text, 4);
};

console.log(run1("kids"));
