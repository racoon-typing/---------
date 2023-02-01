// Курс
const dollar_Ruble = 69.88;
const dollar_Euro = 0.92;
const dollar_СNY = 6.74;
const dollar_GBP = 0.81;
const dollar_JPY= 129.72;


// Нода инпута
const firstInputNode = document.querySelector('.converter__input--first');
const secondInputNode = document.querySelector('.converter__input--second');


// Функция расчета курса для первого инпута
function inputEventListener(index) {
    let secondInputIndex;

    if (index === 0) {
        secondInputIndex = 1;
    } else {
        secondInputIndex = 0;
    }

    // Нода селекта
    const firstSelect = document.querySelector('.converter__output-select--fisrt');
    const secondSelect = document.querySelector('.converter__output-select--second');

    // Масиив селектов
    let arrOfSelect = [firstSelect, secondSelect];

    // Масиив инпутов
    let arrOfInput = [firstInputNode, secondInputNode];

    // Введенное значение
    let getSum = arrOfInput[index].value;


    console.log(arrOfInput[index]);
    console.log(arrOfSelect);
    console.log(arrOfInput);


    // Проверка целое ли число
    function isInteger(x) {
        if (Number.isInteger(x)) {
            return x;
        } else {
            // Кол-во знаков после запятой у первого числа
            const decimalNumberComponent = x.toString().match(/\.(\d+)/)?.[1].length

            if (decimalNumberComponent >= 3) {
                return x.toFixed(3);
            } else if (decimalNumberComponent >= 1 && decimalNumberComponent < 3) {
                return x.toFixed(decimalNumberComponent)
            } else {
                return x;
            }
        }
    }

    // Расчет курса в зависимости от выбранных валют
    if (arrOfSelect[index].value === 'USD') {
        if (arrOfSelect[secondInputIndex].value === 'RUB') {
            // Результат
            let result = isInteger(getSum * dollar_Ruble);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else if (arrOfSelect[secondInputIndex].value === 'EUR') {
            // Результат
            let result = isInteger(getSum * dollar_Euro);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else {
            // Результат
            let result = getSum;

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        }
    } else if (arrOfSelect[index].value === 'RUB') {
        if (arrOfSelect[secondInputIndex].value === 'USD') {
            // Результат
            let result = isInteger(getSum / dollar_Ruble);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else if (arrOfSelect[secondInputIndex].value === 'EUR') {
            // Результат
            let result = isInteger(getSum / dollar_Ruble * dollar_Euro);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else {
            // Результат
            let result = getSum;

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        }
    } else if (arrOfSelect[index].value === 'EUR') {
        if (arrOfSelect[secondInputIndex].value === 'USD') {
            // Результат
            let result = isInteger(getSum / dollar_Euro);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else if (arrOfSelect[secondInputIndex].value === 'RUB') {
            // Результат
            let result = isInteger(getSum * dollar_Ruble / dollar_Euro);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else {
            // Результат
            let result = getSum;

            // Выводит результат в нужный инпут           
            arrOfInput[secondInputIndex].value = result;
            return;
        }
    }

}

// Слушатели на Инпуте
firstInputNode.addEventListener('input', (() => inputEventListener(0)));
secondInputNode.addEventListener('input', (() => inputEventListener(1)));