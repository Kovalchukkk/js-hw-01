const credits = 23580;
const pricePerDroid = 3000;

const res = prompt(`Яку кількість дроїдів бажаєте купити?`);

let totalPrice, rest; 

if (res === null) {
    console.log(`Скасовано користувачем!`);
} else {
    totalPrice = pricePerDroid * Number(res);
}

if (totalPrice > credits) {
    console.log(`Недостатньо коштів на рахунку!`);
} else {
    rest = credits - totalPrice;

    console.log(`Ви купили ${res} дроїдів, на рахунку залишилося ${rest} кредитів.`);
}
        
