"use strict"; // код  обрабатывается в строгом режиме
//Задача №1 2.2 «ПРОТОТИП И КОНСТРУКТОР ОБЪЕКТА»

String.prototype.isPalindrome = function() {
    const clearString = this.toLowerCase().split('').filter(item => item != ' ').join('');
    const reversedString = clearString.split('').reverse().join('');
    return clearString === reversedString;
};
//test = isPalindrome('abcdedcba');
//test2 = isPalindrome('abcded');
//test3 = ('А роза упала на лапу Азора')//true

//Задача №2 2.2 «ПРОТОТИП И КОНСТРУКТОР ОБЪЕКТА»
function getAverageMark(marks) {
    if (marks.length === 0) return 0;

    const average =marks.reduce((partial_sum, a) => partial_sum + a, 0) / marks.length;
    const roundedAverage = Math.round(average);
    return roundedAverage;
}

//Задача №3 2.2 «ПРОТОТИП И КОНСТРУКТОР ОБЪЕКТА»
function checkBirthday(birthday) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const birthDate = new Date(birthday);
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    const ageInMonths = (currentYear - birthYear)*12 + (currentMonth - birthMonth); // возраст в месяцах
    const majorityInMonths = 18*12; // 18 лет в месяцах

    // Если возраст пользователя в месяцах больше  216, то он совершеннолетний
    // Если возраст пользователя в месяцах равен 216, то проверяем, наступил ли день его рождения
    return (ageInMonths > majorityInMonths || ageInMonths === majorityInMonths && currentDay >= birthDay);
}