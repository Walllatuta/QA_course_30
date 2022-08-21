// HW_2

// 1
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Вывести в консоль результат работы функции с возрастами 17, 18, 61.

const checkAge = function (age) {
  let minAge = 18;
  let maxAge = 60;

  if (age < minAge) {
    console.log(
      "You don't have access cause your age is " + age,
      "It's less then " + minAge
    );
  } else if (age >= minAge && age < maxAge) {
    console.log("Welcome!");
  } else if (age > maxAge) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");
  }
};
checkAge(17);
checkAge(18);
checkAge(61);

// 2
// Преобразовать задание 1 таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const checkAge2 = function (age) {
  let minAge = 18;
  let maxAge = 60;

  if (typeof age !== "number") {
    console.log("Value is not a number!");
  } else if (age < minAge) {
    console.log(
      "You don't have access cause your age is " + age,
      "It's less then " + minAge
    );
  } else if (age >= minAge && age < maxAge) {
    console.log("Welcome!");
  } else if (age > maxAge) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");
  }
};
checkAge2("eight");

// 3
// Преобразовать 2 таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number.

const checkAge3 = function (age) {
  let minAge = 18;
  let maxAge = 60;

  if (typeof age !== "number" && typeof age !== "string") {
    console.log("Invalid value");
  } else {
    if (isNaN(Number(age))) {
      console.log("Invalid value");
    } else {
      if (age < minAge) {
        console.log(
          "You don't have access cause your age is " + age,
          "It's less then " + minAge
        );
      } else if (age >= minAge && age < maxAge) {
        console.log("Welcome!");
      } else if (age > maxAge) {
        console.log("Keep calm and look Culture channel");
      } else {
        console.log("Technical work");
      }
    }
  }
};
checkAge3("2");
checkAge3("two");

// 4
// Преобразовать задание 3 таким образом, чтобы возраст вводился используя функцию prompt в привязанной верстке.

const checkAge4 = function (age) {
  let minAge = 18;
  let maxAge = 60;

  if (typeof age !== "number" && typeof age !== "string") {
    console.log("invalid value");
  } else {
    if (isNaN(Number(age))) {
      console.log("invalid value");
    } else {
      if (age < minAge) {
        console.log(
          "You don't have access cause your age is " + age,
          "It's less then " + minAge
        );
      } else if (age >= minAge && age < maxAge) {
        console.log("Welcome!");
      } else if (age > maxAge) {
        console.log("Keep calm and look Culture channel");
      } else {
        console.log("Technical work");
      }
    }
  }
};
checkAge4(prompt("How old are you?"));
