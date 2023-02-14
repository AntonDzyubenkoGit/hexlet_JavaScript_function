import _ from "lodash";

// Функция takeOldest(), которая принимает на вход список пользователей и возвращает самых взрослых.

const takeOldest = (users, count = 1) => {
  const sorted = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
  return sorted.slice(0, count);
};

// Версия через встроенный .sort()

const takeOldest2 = (users, num = 1) => {
  users.sort(function (a, b) {
    return new Date(a.birthday) - new Date(b.birthday);
  });
  return users.slice(0, num);
};

// Версия через встроенный .sort() Math.sign

const takeOldest3 = (users, num = 1) => {
  users.sort((a, b) => Math.sign(new Date(a.birthday) - new Date(b.birthday)));
  return users.slice(0, num);
};

// Версия без приведенного формата даты

const takeOldest4 = (users, count = 1) => {
  for (const item of users) {
    item.birthday = Date.parse(item.birthday);
  }

  const sortUsers = _.sortBy(users, "birthday");

  for (const obj of sortUsers) {
    obj.birthday = new Date(obj.birthday).toDateString();
  }

  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(sortUsers[i]);
  }

  return result;
};

const users = [
  { name: "Tirion", birthday: "Nov 19, 1988" },
  { name: "Sam", birthday: "Nov 22, 1999" },
  { name: "Rob", birthday: "Jan 11, 1975" },
  { name: "Sansa", birthday: "Mar 20, 2001" },
  { name: "Tisha", birthday: "Feb 27, 1992" },
  { name: "Chris", birthday: "Dec 25, 1995" },
];

console.log(takeOldest3(users, 2));
