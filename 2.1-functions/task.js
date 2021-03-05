"use strict"; // код  обрабатывается в строгом режиме
//Задача №1 2.1 «Функции, объекты»
function getSolutions(a,b,c){
    const D = b**2 - 4 * a * c; // Дискриминант
    let x1, x2;

    if (D < 0) {
        return { D, roots: []
        }
    }else if (D === 0) {
        x1 = - b / (2*a);
        return { D, roots: [x1]
        }
    }else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2*a);
        x2 = (-b - Math.sqrt(D)) / (2*a);
        return { D, roots: [x1,x2]
         };
        }
    };
       
function showSolutionsMessage( a, b, c ){
    const result = getSolutions(a, b, c);
    const D = result.D;
    const x1 = result.roots[0];
    const x2 = result.roots[1];

    console.log(`Значение дискриминанта: ${D}`);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);

    if (D < 0) {
        console.log('Уравнение не имеет вещественных корней')
      }else if (D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${x1}`);
      }else if (D > 0) {
        console.log(`Уравнение имеет два корня X₁ = ${x1}, X2 = ${x2}`);
      }
    };

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

//Задача №2 2.1 «Функции, объекты»

function getAverageMark(marks){
  if (marks.length > 0) {
    return marks.reduce((partial_sum, a) => partial_sum + a, 0) / marks.length;
  } else {
    return 0;
  }
}


function getAverageScore(data){
  let averageMarks =  {
    average: 0,
  };


 if (Object.keys(data).length === 0) {
    return averageMarks;
  }

  let sumMarks = 0;

    for (let schoolSubject in data) {
      averageMark[schoolSubject] = getAverageMark(data[schoolSubject]);
  }
  sumMarks = getAverageMark(data);
  
  averageMarks = sumMarks / (Object.keys(averageMarks).length - 1);
  
  return averageMarks;
}


// console.log(getAverageScore({
//   algebra: [2, 4, 5, 2, 3, 4],
//   geometry: [2, 4, 5],
//   russian: [3, 3, 4, 5],
//   physics: [5, 5],
//   music: [2, 2, 6],
//   english: [4, 4, 3],
//   poetry: [5, 3, 4],
//   chemistry: [2],
//   french: [4, 4],
// }));

// console.log(getAverageScore({
//   algebra: [],
//   geometry: [],
//   russian: [],
//   physics: [],
//   music: [],
//   english: [],
//   poetry: [],
//   chemistry: [],
//   french: [],
// }));

// console.log(getAverageScore({}));


// Задача №3 2.1 «Функции, объекты»
function getPersonData(secretData){

  
const firstName = getDecodedValue(secretData.aaa);
const lastName = getDecodedValue(secretData.bbb);

return {
  firstName,
  lastName,
}

}

function getDecodedValue(secret) {

  const secretName = {
    0: 'Родриго',
    1: 'Эмильо',
  };
  return secretName[secret];
}


// console.log( getPersonData({
//   aaa: 0,
//   bbb: 0,
// }));

// console.log( getPersonData({
//   aaa: 1,
//   bbb: 0,
// }));

// console.log( getPersonData({
//   aaa: 0,
//   bbb: 1,
// }));

// console.log( getPersonData({
//   aaa: 1,
//   bbb: 1,
// }));