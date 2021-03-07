"use strict"; // код  обрабатывается в строгом режиме
//Задача №1 2.2 «ПРОТОТИП И КОНСТРУКТОР ОБЪЕКТА»

String.prototype.screening = function isPalindrome(str){
  
    let res = this.str.toLowerCase();
    res = strLen;

   let strLen = str.length,
    strReverse = str.split('').reverse().join(''); 

    if (strReverse == str) {
    return 'true';

    } else {
     return 'false';
 
  }
 }
test = isPalindrome('abcdedcba');
test2 = isPalindrome('abcded');
test3 = ('А роза упала на лапу Азора')//true

//Задача №2 2.2 «ПРОТОТИП И КОНСТРУКТОР ОБЪЕКТА»
function getAverageMark(marks) {
    if (marks.length === 0) return 0;

    const average =marks.reduce((partial_sum, a) => partial_sum + a, 0) / marks.length;
    const roundedAverage = Math.round(average);
    return roundedAverage;
}

//Задача №3 2.2 «ПРОТОТИП И КОНСТРУКТОР ОБЪЕКТА»
function checkBirthday(birthday) {
   let now = 
   
    // return verdict
}