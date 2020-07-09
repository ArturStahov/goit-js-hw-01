"use strict";

let input;
let total = 0;

do {
  input = prompt("Введите число");
  let convertsInput = Number(input);

  if (Number.isNaN(convertsInput)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total += convertsInput;
  }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
