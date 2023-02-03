// Курс
const dollar_Ruble = 69.88;
const dollar_Euro = 0.92;
const dollar_СNY = 6.74;
const dollar_GBP = 0.81;
const dollar_JPY = 129.72;


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
    if (arrOfSelect[index].value === 'USD') { // 1. Расчет первого инпута: ДОЛЛАР
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
        } else if (arrOfSelect[secondInputIndex].value === 'CNY') {
            // Результат
            let result = isInteger(getSum * dollar_СNY);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else if (arrOfSelect[secondInputIndex].value === 'JPY') {
            // Результат
            let result = isInteger(getSum * dollar_JPY);

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
    } else if (arrOfSelect[index].value === 'RUB') { // 2. Расчет первого инпута: РУБЛЬ
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
        } else if (arrOfSelect[secondInputIndex].value === 'CNY') {
            // Результат
            let result = isInteger(getSum / dollar_Ruble * dollar_СNY);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else if (arrOfSelect[secondInputIndex].value === 'JPY') {
            // Результат
            let result = isInteger(getSum / dollar_Ruble * dollar_JPY);

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
    } else if (arrOfSelect[index].value === 'EUR') { // 3. Расчет первого инпута: ЕВРО
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
        } else if (arrOfSelect[secondInputIndex].value === 'CNY') {
            // Результат
            let result = isInteger(getSum * dollar_СNY / dollar_Euro);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else if (arrOfSelect[secondInputIndex].value === 'JPY') {
            // Результат
            let result = isInteger(getSum * dollar_JPY / dollar_Euro);

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
    } else if (arrOfSelect[index].value === 'CNY') { // 4. Расчет первого инпута: ЮАНЬ
        if (arrOfSelect[secondInputIndex].value === 'USD') {
            // Результат
            let result = isInteger(getSum / dollar_СNY);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else if (arrOfSelect[secondInputIndex].value === 'RUB') {
            // Результат
            let result = isInteger(getSum * dollar_Ruble / dollar_СNY);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else if (arrOfSelect[secondInputIndex].value === 'EUR') {
            // Результат
            let result = isInteger((getSum * dollar_Euro) / dollar_СNY);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else if (arrOfSelect[secondInputIndex].value === 'JPY') {
            // Результат
            let result = isInteger(getSum / dollar_СNY * dollar_JPY);

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
    } else if (arrOfSelect[index].value === 'JPY') { // 5. Расчет первого инпута: ЙЕНА
        if (arrOfSelect[secondInputIndex].value === 'USD') {
            // Результат
            let result = isInteger(getSum / dollar_JPY);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else if (arrOfSelect[secondInputIndex].value === 'RUB') {
            // Результат
            let result = isInteger(getSum * dollar_Ruble / dollar_JPY);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else if (arrOfSelect[secondInputIndex].value === 'EUR') {
            // Результат
            let result = isInteger((getSum * dollar_Euro) / dollar_JPY);

            // Выводит результат в нужный инпут
            arrOfInput[secondInputIndex].value = result;
            return;
        } else if (arrOfSelect[secondInputIndex].value === 'CNY') {
            // Результат
            let result = isInteger((getSum * dollar_СNY) / dollar_JPY);

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




// Вывод резульатат 
const converterOutput = document.querySelector('.converter__output');
let idFocusInput;
// Нода списка кнопок
const converterList = document.querySelector('.converter__list');


// Массив с введенными данными
let outputArr = [];
// Массив outputArr преобразованный в строку
let outputString = '';
// Масиив инпутов
let arrOfInput = [firstInputNode, secondInputNode];


// Определяет какой инпут нажат
function getInputId(e) {
    idFocusInput = e.target.id;
    console.log(idFocusInput);

    // Стирает значение при фокусе на друом инпут
    if (idFocusInput === '0') {
        outputArr = [];
        arrOfInput[1].value = '';
    } else {
        outputArr = [];
        arrOfInput[0].value = '';
    }

    return;
}

// Слуаштель на инпут
converterOutput.addEventListener("focusin", ((e) => getInputId(e)));


// Функция отражает нажатую клавишу
function getNumber(e) {
    // Если инпут не нажат, то ввод не происходит
    if (!idFocusInput) {
        return;
    }

    // Получает нажатое значение
    let getValue = e.target.id;

    // Выводит значение в инпут 
    function getOutputValue(outputArr) {
        outputString = outputArr.join('');
        arrOfInput[idFocusInput].value = outputString;
        console.log(outputString);
    }

    // Удаляет значение при нажатии на кнопку del
    if (getValue === 'del') {
        if (outputArr.length === 0) {
            return;
        }

        // Удаляет последний элемент масcива
        outputArr.pop();

        // Функция вывода значения в инпут
        getOutputValue(outputArr);
        return;
    }

    // Проверка если первое число 0, то нельзя ввести 0
    if (getValue === '0' && outputArr[0] === '0') {
        return;
    }

    // Проверка если первое число 0, и вводят другое число, то ноль стирается
    if (getValue !== '0' && outputArr[0] === '0') {
        outputArr.pop();

        outputArr.push(getValue);
        getOutputValue(outputArr);
        return;
    }

    // Добавляет запятую при нажатии
    if (getValue === 'dot') {
        if (outputArr.length === 0) {
            outputArr.push('0.');
            getOutputValue(outputArr);
            return;
        }

        const isDotAvailible = outputString.includes('.');
        console.log(isDotAvailible);
        console.log(outputString);

        if (isDotAvailible) {
            return;
        }

        outputArr.push('.');
        getOutputValue(outputArr);
        return;
    }

    // Добавляет в исходный массив нажатый элемент
    outputArr.push(getValue);
    console.log(getValue);

    // Функция вывода значения в инпут
    getOutputValue(outputArr);

    // Функция расчета курса
    inputEventListener(idFocusInput);
    console.log(idFocusInput);
}


// Слушатель на нажатие на кнопки
converterList.addEventListener('click', ((e) => getNumber(e)));

