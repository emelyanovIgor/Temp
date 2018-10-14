/*
2) Cоздать файл, куда записывать результаты вызова функций (то есть что-то типа логирования) с помощью функций fs-модуля.
Код должен быть асинхронным. Посмотреть в документации как делать так, чтобы новая запись не перезатирала предыдущее содержимое файла,
а новый текст в файл добавлялся дополнительной строкой
*/

//----------------------------------------------------------------------------------------------------

let salary = 300;
let friends = ['Anton', 'Frank', 'Vladimir', 'Serge', 'Ivan'];
let sober = true;

class Husband {
    mySalary() {
        return 'My husband gets only ' + salary + '$.\n';
    }

    myFriends() {
        return 'My friends are: ' + friends + '.\n';
    }

    mySober() {
        return 'My husband is sober today - ' + sober + '!';
    }
}

exports.hus = new Husband();