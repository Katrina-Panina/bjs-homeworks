"use strict"; // код  обрабатывается в строгом режиме
//Задача №1 2.3 «ООП в JS (ES6)»
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
    }
     fix(){
        this.state *= 1.5   
    };

    set state(number) {
        if (number < 0) {
             this._state = 0
        } else if (number > 100) {
            this._state = 100
        } else {
             this._state = number;
        };
        
    }

    get state() {
        return this._state;
        }

    };

    class Magazine extends PrintEditionItem {
        constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
    };
    class Book extends PrintEditionItem {
        constructor(author,name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;

    }
    };

    class NovelBook extends Book{
        constructor(name, releaseDate, pagesCount) {
            super(name, releaseDate, pagesCount);
            this.type = "novel";
        }
    };
    class FantasticBook extends Book{
        constructor(name, releaseDate, pagesCount) {
            super(name, releaseDate, pagesCount);
            this.type = "fantastic";
        }
    };

    class DetectiveBook extends Book{
        constructor(name, releaseDate, pagesCount) {
            super(name, releaseDate, pagesCount);
            this.type = "detective";
        }
    };

//Задача №2 2.3 «ООП в JS (ES6)»

class Library {
    constructor(name,books) {
    this.name = name;
    this.books = [];
    };


    addBook(book) {
        if (book.state > 30) { 
            this.books.push(book);

        
    }
};


findBookBy(type, value){
    for (let i = 0; i < this.books.length; i++){
        if (this.books[i][type] === value) 
        return this.books[i];
    }
    return null
 };

giveBookByName(bookName){
    for (let i = 0; i < this.books.length; i++){
        if (this.books[i].name === bookName) {
        } this.books.splice(this.books.indexOf(this.books[i].name),1)[0];
        return bookName
}
         return null
};

};

//Задача №3 2.3 «ООП в JS (ES6)»

class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = {};
    }

    getName() {
        return this.name;
}

addGrade(grade, subject) {
    if (this.grades[subject]) {
        this.grades[subject].push(grade);
        return this.grades[subject].length;
    } else if (grade < 1 || grade > 5 || typeof grade !== 'number') {
        return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.` 
    }else {
        this.grades[subject] = [grade];
        return 1;
    }
}
getAverageBySubject(subject) {
    if (Object.keys(this.grades).includes(subject)) {  //если обьект grades включает в себя subject
        let sum = 0;  
        for (let rating of this.grades[subject]) {
            sum += rating;
            }
            return sum / this.grades[subject].length;
    } else {
            return 0;
      }
    }  
      
getTotalAverage() {
    let totalAverage = 0;
    for (let element in this.grades) {
        totalAverage += this.getAverageBySubject(element);
      }
      totalAverage = totalAverage / Object.keys(this.grades).length;
      return totalAverage;
    }  
}


