const n = 10;
const answer = n === 10 ? "true" : "falsh";

console.log(answer);

const flat = 125;

flat >= 1 && flat <= 20
  ? console.log("Ваша квартира на первом этаже")
  : flat >= 21 && flat <= 48
  ? console.log("Ваша квартира на 2 этаже")
  : flat >= 49 && flat <= 90
  ? console.log("Ваша квартира на 3 этаже")
  : console.log("Такой квартиры не существует");

let num = 6;

if (num > 0 && num <= 5) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

const hour = 9;
const name = "Nooruz"

hour >= 6 && hour <= 12
  ? console.log("Доброе утро " + name)
  : hour >= 13 && hour <= 17
  ? console.log("Добрый день " + name)
  : hour >= 18 && hour <= 24
  ? console.log("Добрый вечер! " + name)
  : console.log("Введенное время некорректно");



 let age = 65

 if (age <= 6 && age >= 65) {
    console.log("Без скидки");
 }else {
    console.log("Скидки");
 }




const user = "scissors";
const computer = "rock";
const user1 = "paper";
const computer1 = "scissors";
const user2 = "rock";
const computer2 = "paper";

if (user === computer1) {
    console.log("Ничья");
} else if ( user === computer2) {
  console.log("Вы победили");
}else if (user1 === computer) {
  console.log("Вы проиграли");
}else if (user2 === computer1) {
  console.log("Вы победили");
} else {
  console.log("Выберите один из вариантов");
}

