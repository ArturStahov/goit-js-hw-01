"use strict";

const total = 100;
const ordered = 50;

const message =
  ordered > total
    ? "На складе недостаточно товаров!"
    : "Заказ оформлен, с вами свяжется менеджер";
console.log(message);
