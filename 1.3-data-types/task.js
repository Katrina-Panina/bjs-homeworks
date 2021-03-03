"use strict"; // код  обрабатывается в строгом режиме

function calculateTotalMortgage(percent, contribution, amount, date) {

    // Проверяем корректность поля percent
    if (!percent && percent !== 0) return 'Заполните поле "Процентная ставка"';
    percent = 0.01 * percent;
    if (percent < 0) return 'Процентная ставка по кредиту не может быть отрицательной';
    if (typeof percent !== 'number' || percent !== percent) return 'Данные некорректны';

    // Проверяем корректность поля contribution
    if (!contribution && contribution !== 0) return 'Заполните поле "Начальный взнос"';
    contribution = +contribution;
    if (contribution < 0) return 'Начальный взнос не может быть отрицательным';
    if (typeof contribution != 'number' || contribution != contribution) return 'Данные некорректны';
   
    // Проверяем корректность поля amount
    if (!amount && amount !== 0) return 'Заполните поле "Общая стоимость"';
    amount = +amount;
    if (amount <= 0) return 'Общая стоимость должна быть больше нуля';
    if (typeof amount != 'number' || amount !== amount) return 'Данные некорректны';
   
    
    //Kоличество выплачиваемых месяцев:
    let months = ((date.getFullYear() - new Date().getFullYear())*12) + (date.getMonth()-new Date().getMonth());

    // Проверяем корректность поля date
    if (!date.getDate()) return 'Укажите дату погашения кредита';
    if (months === 0) months = 1; // Если выплата кредита происходит в том же месяце, в котором кредит выдан 
    if (months < 0) return 'Срок кредита не может быть отрицательным';

    

    //Вычисляем сумму, которую необходимо вернуть банку. (сумма кредита минус первоначальный взнос):
    let sum = amount - contribution;
    
    
    //Ежемесячная оплата:
    let i = (percent / 12) / 100; // ставка в месяц 
    
    //Процент за пользованием кредитом: процент от суммы кредита
    let monthlyPayment; 
    if (percent === 0) {
        // В случае нулевой процентной ставки по кредиту в формуле для расчета ежемесячного платежа происходит деление на 0 и в итоге возвращается NaN. На этот случай нужна другая формула.
        monthlyPayment = sum / months;
    } else {
        monthlyPayment = sum*(i+i/(((1+i)**months)-1));
    }

    //Итогова сумма 
    let sumTotal = monthlyPayment * months;

    return sumTotal.toFixed(2); 
}


function getGreeting(name) {
    
    if (!name || !name.trim()) name = 'Аноним';
    return `Привет, мир! Меня зовут ${name}.`;
    
}