const country = prompt(`Вкажіть країну куди буде здійснена доставка`);

const countryLowerCase = country.toLowerCase();

const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

switch (countryLowerCase) {
    case `китай`:
        console.log(`Доставка в Китай буде коштувати ${priceChina} кредитів`);
        break;
    
    case `чилі`:
        console.log(`Доставка в Чилі буде коштувати ${priceChile} кредитів`);
        break;
    
    case `австралія`:
        console.log(`Доставка в Австралію буде коштувати ${priceAustralia} кредитів`);
        break;
        
    case `індія`:
        console.log(`Доставка в Індію буде коштувати ${priceIndia} кредитів`);
        break;
        
    case `ямайка`:
        console.log(`Доставка в Ямайку буде коштувати ${priceJamaica} кредитів`);
        break;
    
    default:
        alert(`У вашій країні доставка недоступна`);
        break;
}

