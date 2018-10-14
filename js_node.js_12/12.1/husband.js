/*
1) Написать в Node JS класс Husband в файле husband.js, у которого будут внутренние переменные (скрытые от внешнего кода):
.
- зарплата (тип number)
- друзья (в виде массива имён)
- трезвый (тип boolean)
.
Реализовать "Паттерн Модуль" и добавить экспорт функций:
    - получитьЗарплату
    - спроситьКтоДрузья
    - узнатьТрезвыйЛи
Далее, импортировать наш модуль в файл, который будем вызывать и там вызвать экземпляр класса Husband
*/

//----------------------------------------------------------------------------------------------------

let salary = 300;
let friends = ['Anton', 'Frank', 'Vladimir', 'Serge', 'Ivan'];
let sober = true;

class Husband {
    mySalary() {
        return 'My husband gets only ' + salary + '$.';
    }

    myFriends() {
        return 'My friends are: ' + friends + '.';
    }

    mySober() {
        return 'My husband is sober today - ' + sober + '!';
    }
}

exports.hus = new Husband();



