"use strict";

let textInputRef = document.querySelector(".user-input-form__input");
let buttonRef = document.querySelector(".user-input-form__submit-button");
let resultOutputBlock = document.querySelector(".result");

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message = "Вы не можете купить 0 дроидов повторите попитку снова!";
let userBalanceBlock = document.querySelector(".user-balance-output");
let priceBlock = document.querySelector(".price-output");

userBalanceBlock.innerHTML = `${credits}`;
priceBlock.innerHTML = `${pricePerDroid}`;

buttonRef.addEventListener("click", function() {
  event.preventDefault();
  let quantityPerDroid = textInputRef.value;
  let quantityPerDroidConvert = Number(quantityPerDroid);
  let IsNaNinput = Number.isNaN(quantityPerDroidConvert);

  if (quantityPerDroidConvert !== 0 && quantityPerDroid !== null) {
    totalPrice = quantityPerDroidConvert * pricePerDroid;

    if (totalPrice > credits) {
      message = "Недостаточно средств на счету!";
    } else if (IsNaNinput === true) {
      message = "Вы ввели некоректное значение!";
    } else {
      credits -= totalPrice;
      message = `Вы купили ${quantityPerDroidConvert} дроидов, на счету осталось ${credits} кредитов.`;
    }
    resultOutputBlock.innerHTML = `${message}`;
    resultOutputBlock.style.display = "block";
  } else {
    resultOutputBlock.innerHTML = `${message}`;
    resultOutputBlock.style.display = "block";
  }

  userBalanceBlock.innerHTML = `${credits}`;
});
