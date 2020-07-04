"use strict";

let input;
let total = 0;

do {
  input = +prompt("Введите число");
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total += input;
  }
} while (input !== 0);

alert(`Общая сумма чисел равна ${total}`);
