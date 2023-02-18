import _ from "lodash";
import path from "path";
import * as fs from "node:fs";
import get from "lodash/get.js";

// Функция getFreeDomainsCount(), которая принимает на вход список емейлов, а возвращает количество емейлов, расположенных на каждом бесплатном домене.

const emails = ["info@gmail.com", "info@yandex.ru", "info@hotmail.com", "mk@host.com", "support@hexlet.io", "key@yandex.ru", "sergey@gmail.com", "vovan@gmail.com", "vovan@hotmail.com"];
const freeEmailDomains = ["gmail.com", "yandex.ru", "hotmail.com", "yahoo.com"];

const getFreeDomainsCount = (emails) => {
  const domains = emails.map((mail) => mail.split("@")[1]);

  const result = freeEmailDomains.reduce((acc, item) => {
    if (domains.includes(item)) {
      acc[item] = domains.filter((domain) => domain === item).length;
    }
    return acc;
  }, {});

  return result;
};

console.log(getFreeDomainsCount(emails));

// Вариант с использованием _.get()

const getFreeDomainsCount2 = (emails) =>
  emails
    .map((email) => {
      const [, domain] = email.split("@");
      return domain;
    })
    .filter((domain) => freeEmailDomains.includes(domain))
    .reduce((acc, domain) => {
      const count = get(acc, domain, 0) + 1;
      return { ...acc, [domain]: count };
    }, {});

console.log(getFreeDomainsCount2(emails));
