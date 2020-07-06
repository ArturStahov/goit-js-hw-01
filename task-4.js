"use strict";

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let quantityPerDroid = prompt("сколько дроидов вы хотите купить");

if (quantityPerDroid === null) {
  console.log("Отменено пользователем!");
} else {
  let quantityPerDroidConvert = Number(quantityPerDroid);

  if (quantityPerDroidConvert !== 0) {
    totalPrice = quantityPerDroidConvert * pricePerDroid;

    if (totalPrice > credits) {
      console.log("Недостаточно средств на счету!");
    } else {
      credits -= totalPrice;
      let message = `Вы купили ${quantityPerDroidConvert} дроидов, на счету осталось ${credits} кредитов.`;
      console.log(message);
    }
  } else {
    console.log("Вы не можете купить 0 дроидов повторите попитку снова!");
  }
}
