import _ from "lodash";

// Функция sayPrimeOrNot(), которая проверяет переданное число на простоту и печатает на экран yes или no.

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num; i++) {
    if (num % i === 0 && num !== i) {
      return false;
    }
  }
  return true;
};

const sayPrimeOrNot = (num) => {
  console.log(isPrime(num) ? "yes" : "no");
};

console.log(sayPrimeOrNot(2));
