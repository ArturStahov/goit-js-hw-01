"use strict";

let userCountry = prompt("укажите с какой вы страны?");
const priceDeliveryChina = 100;
const priceDeliveryChile = 250;
const priceDeliveryAustralia = 170;
const priceDeliveryIndia = 80;
const priceDeliveryJamaica = 120;
let message;

if (userCountry !== null) {
  let userCountryResult = userCountry.toLowerCase();
  switch (userCountryResult) {
    case "китай":
      message = `Доставка в Китай будет стоить ${priceDeliveryChina} кредитов`;
      break;
    case "чили":
      message = `Доставка в Чили будет стоить ${priceDeliveryChile} кредитов`;
      break;
    case "австралия":
      message = `Доставка в Австралию будет стоить ${priceDeliveryAustralia} кредитов`;
      break;
    case "индия":
      message = `Доставка в Индию будет стоить ${priceDeliveryIndia} кредитов`;
      break;
    case "ямайка":
      message = `Доставка в Ямайку будет стоить ${priceDeliveryJamaica} кредитов`;
      break;
    default:
      message = `В вашей стране доставка не доступна`;
      break;
  }
} else {
  message = "пользователь передумал заказывать доставку";
}
alert(message);
