// Курс валют
const dollar_Ruble = 69.88;
const dollar_Euro = 0.92;
const dollar_СNY = 6.74;
const dollar_GBP = 0.83;
const dollar_JPY = 129.72;


// Нода инпута
// 1. Валюта
const firstInputNode = document.querySelector('.converter__input--first');
const secondInputNode = document.querySelector('.converter__input--second');
// Нода селекта
// const firstSelect = document.querySelector('.converter__output-select--fisrt');
// const secondSelect = document.querySelector('.converter__output-select--second');



// 2. Вес
const thirdInputNode = document.querySelector('.converter__input--third');
const fourthInputNode = document.querySelector('.converter__input--fourth');
// Нода селекта
const thirdSelect = document.querySelector('.converter__output-select--third');
const fourthSelect = document.querySelector('.converter__output-select--fourth');



// Список с кнопками: Попап
// const popupMenu = document.querySelector('.main__popup');
const menuListNode = document.querySelector('.main__popup-list');
const converterMoney = document.querySelector('.converter__output--money');
const converterWeight = document.querySelector('.converter__output--weight');
// Название конвертора
const converterName = document.querySelector('.converter__name');

const converterNameText = ['валют', 'веса', 'длины'];


let buttonCalculate;
// Массивы селектов
let arrOfInput = [];
let arrOfSelect = [];

// Слушатель на кнопки показа конверторов
menuListNode.addEventListener('click', (e) => {
    buttonCalculate = e.target.id;

    function hideMenu(button) {
        popupMenu.style.display = "none";

        if (button === '0') {
            converterMoney.style.display = "block";
            converterWeight.style.display = "none"

            converterName.textContent = converterNameText[0];

            // Массив инпутов валюты
            arrOfInput = [firstInputNode, secondInputNode];
            arrOfSelect = [firstSelect, secondSelect]
            return;
        } else if (button === '1') {
            converterMoney.style.display = "none";
            converterWeight.style.display = "flex"

            converterName.textContent = converterNameText[1];
            
            // Массив инпутов веса
            arrOfInput = [thirdInputNode, fourthInputNode];
            arrOfSelect = [thirdSelect, fourthSelect]
            return;
        } else {
            return;
        }
    }

    hideMenu(buttonCalculate);
});
console.log(buttonCalculate);



// Вывод результата 
const converterOutputs = document.querySelectorAll('.converter__output');
let idFocusInput;

// Массив с введенными данными
let outputArr = [];
// Массив outputArr преобразованный в строку
let outputString = '';
// Масиив инпутов


// Определяет какой инпут нажат
function getInputId(e) {
    idFocusInput = e.target.id;
    console.log(idFocusInput);
    console.log(arrOfInput);

    // Функция для очистки инпутов
    function delInput(arrOfInput) {
        outputArr = [];
        arrOfInput[0].value = '';
        arrOfInput[1].value = '';
    }

    // Стирает значение при фокусе на друом инпут
    if (idFocusInput === '0') {
        delInput(arrOfInput);
    } else {
        delInput(arrOfInput);
    }

    return;
}

// Слушатель на нажатый инпут
converterOutputs.forEach(el => {
    el.addEventListener("focusin", ((e) => getInputId(e)));
});


// –––––––––––––––––––––––––––––––– ВАЛЮТА ––––––––––––––––––––––––––––––––
// Округляет если число не целое
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

// Методика расчета курса валют
function exchangeSomething(arrOfSelect, index, secondInputIndex, getSum) {
    if (buttonCalculate === '0') {
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
            } else if (arrOfSelect[secondInputIndex].value === 'GBP') {
                // Результат
                let result = isInteger(getSum * dollar_GBP);
    
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
            } else if (arrOfSelect[secondInputIndex].value === 'GBP') {
                // Результат
                let result = isInteger((getSum * dollar_GBP) / dollar_Ruble);
    
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
            } else if (arrOfSelect[secondInputIndex].value === 'GBP') {
                // Результат
                let result = isInteger((getSum * dollar_GBP) / dollar_Euro);
    
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
            } else if (arrOfSelect[secondInputIndex].value === 'GBP') {
                // Результат
                let result = isInteger((getSum * dollar_GBP) / dollar_СNY);
    
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
        } else if (arrOfSelect[index].value === 'JPY') { // 5. Расчет первого инпута: ИЕНА
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
            } else if (arrOfSelect[secondInputIndex].value === 'GBP') {
                // Результат
                let result = isInteger((getSum * dollar_GBP) / dollar_JPY);
    
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
        } else if (arrOfSelect[index].value === 'GBP') { // 6. Расчет первого инпута: ФУНТ СТЕРЛИНГОВ
            if (arrOfSelect[secondInputIndex].value === 'USD') {
                // Результат
                let result = isInteger(getSum / dollar_GBP);
    
                // Выводит результат в нужный инпут
                arrOfInput[secondInputIndex].value = result;
                return;
            } else if (arrOfSelect[secondInputIndex].value === 'RUB') {
                // Результат
                let result = isInteger(getSum * dollar_Ruble / dollar_GBP);
    
                // Выводит результат в нужный инпут
                arrOfInput[secondInputIndex].value = result;
                return;
            } else if (arrOfSelect[secondInputIndex].value === 'EUR') {
                // Результат
                let result = isInteger((getSum * dollar_Euro) / dollar_GBP);
    
                // Выводит результат в нужный инпут
                arrOfInput[secondInputIndex].value = result;
                return;
            } else if (arrOfSelect[secondInputIndex].value === 'CNY') {
                // Результат
                let result = isInteger((getSum * dollar_СNY) / dollar_GBP);
    
                // Выводит результат в нужный инпут
                arrOfInput[secondInputIndex].value = result;
                return;
            } else if (arrOfSelect[secondInputIndex].value === 'JPY') {
                // Результат
                let result = isInteger((getSum * dollar_JPY) / dollar_GBP);
    
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
    } else if (buttonCalculate === '1') {
        console.log('Что-то');
        console.log(arrOfSelect);
    }
}

// Функция расчета курса
function calculateExchangeRate(index) {
    console.log(index);

    let secondInputIndex;

    if (index === '0') {
        secondInputIndex = 1;
    } else {
        secondInputIndex = 0;
    }



    // Масиив инпутов
    // let arrOfInput = [firstInputNode, secondInputNode];

    // Введенное значение
    let getSum = arrOfInput[index].value;

    // Функция расчета курса валют
    exchangeSomething(arrOfSelect, index, secondInputIndex, getSum);

}

// Слушатели на Инпуте
firstInputNode.addEventListener('input', (() => calculateExchangeRate('0')));
secondInputNode.addEventListener('input', (() => calculateExchangeRate('1')));






// Нода списка кнопок
const converterList = document.querySelector('.converter__list');

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

        // Функция расчета курса
        calculateExchangeRate(idFocusInput);
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
    calculateExchangeRate(idFocusInput);
    console.log(idFocusInput);
}

// Слушатель на нажатие на элемента списка
converterList.addEventListener('click', ((e) => getNumber(e)));












// Тест