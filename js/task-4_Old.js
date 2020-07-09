"use strict";

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let quantityPerDroid = prompt("сколько дроидов вы хотите купить");
let quantityPerDroidConvert = Number(quantityPerDroid);
let message;

if (quantityPerDroid === null) {
  message = "Отменено пользователем!";
} else {
  if (quantityPerDroidConvert !== 0) {
    totalPrice = quantityPerDroidConvert * pricePerDroid;

    if (totalPrice > credits) {
      message = "Недостаточно средств на счету!";
    } else {
      credits -= totalPrice;
      message = `Вы купили ${quantityPerDroidConvert} дроидов, на счету осталось ${credits} кредитов.`;
    }
  } else {
    message = "Вы не можете купить 0 дроидов повторите попитку снова!";
  }
}
alert(message);
