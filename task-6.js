"use strict";

let input;
let total = 0;

do {
  input = prompt("Введите число");
  input = Number(input);
  if (Number.isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total += input;
  }
} while (input !== 0);

alert(`Общая сумма чисел равна ${total}`);
