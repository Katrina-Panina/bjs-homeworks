"use strict"; // код  обрабатывается в строгом режиме

function getResult(a,b,c){
    
    // 2x^2+4x-3=0. 
    let x = [];
    let d = b**2 - 4 * a * c; // Дискриминант
   
    if (d < 0) {
        return x;
        //console.log("x не имеет значения.");
    }
    else if (d > 0) {
        x.push((-b + Math.sqrt(d)) / (2 * a));
        x.push((-b - Math.sqrt(d)) / (2 * a));
        //console.log("х имеет 2 значения.");  
    }
    else if (d === 0) {
        x.push((-b + Math.sqrt(d)) / (2 * a));
        //console.log("х имеет 1 значение.");  
        }

     return x;
}

function getAverageMark(marks) {
 
    let sum = 0;
     marks.splice(5);

    if (marks.length == 0) {
        return 0;
    } 

     for(let i = 0; i < marks.length; i++){
        sum += marks[i];
        }
   
     return sum/marks.length;
}


function askDrink(name,dateOfBirthday){
   
    let years = dateOfBirthday.getFullYear();
    let d = new Date().getFullYear();
   
    if ((d-years) >= 18) {
        return (`Не желаете ли олд-фэшн, ${name}?`);
    } else if  ((d-years) < 18) {
        return (`Сожалею, ${name},но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`);
    }
    
    //return
}