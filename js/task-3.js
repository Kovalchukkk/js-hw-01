const ADMIN_PASSWORD = `jqueryismyjam`;
let message;

const res = prompt(`Введіть пароль`);

switch (res) {
    case null:
        message = `Скасовано користувачем!`;
        break;
    
    case ADMIN_PASSWORD:
        message = `Ласкаво просимо!`;
        break;
    
    default:
        message = `Доступ заборонений, невірний пароль!`;
        break;
}

alert(message);