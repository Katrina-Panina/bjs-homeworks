"use strict"; // код  обрабатывается в строгом режиме

function calculateTotalMortgage(percent, contribution, amount, date) {
   
    //Вычисляем сумму, которую необходимо вернуть банку. (сумма кредита минус первоначальный взнос):
    let sum = amount - contribution;
    //Kоличество выплачиваемых месяцев:
    let months = (date.getFullYear() - new Date().getFullYear())/12;
    //Ежемесячная оплата:
    let i = (percent / 12) / 100; // ставка в месяц 
    let monthlyPayment = sum*(i+i/(((1+i)^months)-1));

    //(первоначальный взнос, погашение основного долга, проценты за пользование кредитом).
    //Процент за пользованием кредитом: процент от суммы кредита.

    let sumTotal = contribution + (monthlyPayment * months);

    return sumTotal.toFixed(2); 
}


function getGreeting(name) {
    
    if (name.length === 0) {
        return (`Привет, мир! Меня зовут Аноним.`);
    } else if  (name.length === null) {
        return (`Привет, мир! Меня зовут Аноним.`);
    } else if  (name.length === "") {
        return (`Привет, мир! Меня зовут Аноним.`);
    }else {
        return (`Привет, мир! Меня зовут ${name}.`);
    }
    
}