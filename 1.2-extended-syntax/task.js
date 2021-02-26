"use strict"; // код  обрабатывается в строгом режиме

function getResult(a,b,c){
    
    // 2x^2+4x-3=0. 
    let x = [];
    let d = b**2 - 4 * a * c; // Дискриминант
   
    if (d < 0) {
       
        console.log("x не имеет значения.");
    }
    else if (d > 0) {
        x.push((-b + Math.sqrt(d)) / (2 * a));
        x.push((-b - Math.sqrt(d)) / (2 * a));
        console.log("х имеет 2 значения.");  
    }
    else if (d == 0) {
        x.push((-b + Math.sqrt(d)) / (2 * a));
        console.log("х имеет 1 значение.");  
        }

     return x;
}

function getAverageMark(marks) {
 
    let sum = 0;
    
    if (marks.length == 0) {
        console.log("Ошибка формата!");
        return 0;
    } else if (marks.length > 5 ) {
        marks.splice(5);
        console.log("Вы хотите ввести больше оценок, чем возможно - " + marks);
      }   
    
      for(let i = 0; i < marks.length; i++){
        sum += marks[i];
        }
    console.log(sum);

    let getAverageMark = sum/marks.length; //среднее значение.

     return getAverageMark;
}


function askDrink(name,dateOfBirthday){
   
    let years = ateOfBirthday.getFullYear();
    //years == result;
    let d = new Date();
    console.log(d);

    if (years < 2003) {
        console.log("Не желаете ли олд-фэшн, " + name + "?" );
    }
    else if (years < 2003) {
        console.log("Сожалею, " + name + ", но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!" );
    }

     return years;
}