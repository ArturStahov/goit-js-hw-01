"use strict";

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let quantityPerDroid = prompt("сколько дроидов вы хотите купить");
quantityPerDroid = Number(quantityPerDroid);

if (quantityPerDroid === 0) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = quantityPerDroid * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    credits -= totalPrice;
    let message = `Вы купили ${quantityPerDroid} дроидов, на счету осталось ${credits} кредитов.`;
    console.log(message);
  }
}
