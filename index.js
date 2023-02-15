import _ from "lodash";

// Функция getGirlFriends(), которая принимает на вход список пользователей и возвращает плоский список подруг всех пользователей (без сохранения ключей)

const getGirlFriends = (collection) => {
  const allOfFriends = collection.flatMap(({ friends }) => friends);
  const femaleFriends = allOfFriends.filter((allOfFriend) => allOfFriend.gender === "female");
  return femaleFriends;
};

// Вариант с последовательным применением медотов map().filter()

const getGirlFriends2 = (collection) => {
  const femaleFriends = collection.flatMap(({ friends }) => friends).filter((femaleFriend) => femaleFriend.gender === "female");
  return femaleFriends;
};

// Вариант с применением flat()

const getGirlFriends3 = (collection) => {
  const friendsOfUsers = collection.map(({ friends }) => friends);
  return friendsOfUsers.flat().filter(({ gender }) => gender === "female");
};

const users = [
  {
    name: "Tirion",
    friends: [
      { name: "Mira", gender: "female" },
      { name: "Ramsey", gender: "male" },
    ],
  },
  { name: "Bronn", friends: [] },
  {
    name: "Sam",
    friends: [
      { name: "Aria", gender: "female" },
      { name: "Keit", gender: "female" },
    ],
  },
  {
    name: "Rob",
    friends: [{ name: "Taywin", gender: "male" }],
  },
];

console.log(getGirlFriends3(users));
