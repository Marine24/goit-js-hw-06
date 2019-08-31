// "use strict";
import { default as users } from "../users.js";

////////task1
const getUserNames = users => {
  return users.map(user => user.name);
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
//////////task2
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//////////task3
const getUsersWithGender = (users, gender) => {
  const userList = users.filter(user => user.gender === gender);
  return userList.map(user => user.name);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

////////task4
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

///////task5

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

////////task6
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

////////task7
const calculateTotalBalance = users => {
  return users.reduce((totalLikes, user) => totalLikes + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

/////////task8
const getUsersWithFriend = (users, friendName) => {
  const userList = users.filter(user => user.friends.includes(friendName));
  return userList.map(user => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

///////task9
const getNamesSortedByFriendsCount = users => {
  const sortByFriends = (a, b) => a.friends.length - b.friends.length;
  const userList = users.sort(sortByFriends);
  return userList.map(user => user.name);
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

///////task10
const getSortedUniqueSkills = users => {
  const listOfSkills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills;
  }, []);
  const sorList = listOfSkills.sort();
  return sorList.filter((item, pos, sorList) => item !== sorList[pos - 1]);
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
