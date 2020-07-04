"use strict";

let userCountry = prompt("укажите с какой вы страны?");
let userCountryResult = userCountry.toLowerCase();

const priceDeliveryChina = 100;
const priceDeliveryChile = 250;
const priceDeliveryAustralia = 170;
const priceDeliveryIndia = 80;
const priceDeliveryJamaica = 120;

switch (userCountryResult) {
  case "китай":
    alert(`Доставка в Китай будет стоить ${priceDeliveryChina} кредитов`);
    break;
  case "чили":
    alert(`Доставка в Чили будет стоить ${priceDeliveryChile} кредитов`);
    break;
  case "австралия":
    alert(
      `Доставка в Австралию будет стоить ${priceDeliveryAustralia} кредитов`
    );
    break;
  case "индия":
    alert(`Доставка в Индию будет стоить ${priceDeliveryIndia} кредитов`);
    break;
  case "ямайка":
    alert(`Доставка в Ямайку будет стоить ${priceDeliveryJamaica} кредитов`);
    break;
  default:
    alert(`В вашей стране доставка не доступна`);
    break;
}
