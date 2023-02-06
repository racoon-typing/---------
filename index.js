// Курс валют
const dollar_Ruble = 69.88;
const dollar_Euro = 0.92;
const dollar_СNY = 6.74;
const dollar_GBP = 0.83;
const dollar_JPY = 129.72;


// Нода инпута
const firstInputNode = document.querySelector('.converter__input--first');
const secondInputNode = document.querySelector('.converter__input--second');


// Функция расчета курса для первого инпута
function inputEventListener(index) {
    console.log(index);

    let secondInputIndex;

    if (index === '0') {
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
        }else {
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
}

// Слушатели на Инпуте
firstInputNode.addEventListener('input', (() => inputEventListener('0')));
secondInputNode.addEventListener('input', (() => inputEventListener('1')));




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
        arrOfInput[0].value = '';
        arrOfInput[1].value = '';
    } else {
        outputArr = [];
        arrOfInput[0].value = '';
        arrOfInput[1].value = '';
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



// Переключение клавиатуры
const toggleWrapper = document.querySelector('.toggle');
const toggleButton1 = document.querySelector('.toggle__button-1');
const toggleButton2 = document.querySelector('.toggle__button-2');
const main = document.querySelector('.main');


const arrOfButton = [toggleButton1, toggleButton2];

toggleWrapper.addEventListener('click', (e) => {
    console.log(e.target.id);
    let idButton = e.target.id;

    if (idButton === '0') {
        converterList.style.display = "none";
        toggleButton1.style.display = "none";
        toggleButton2.style.display = "block";
        main.style.justifyContent = "flex-start";
        main.style.paddingTop = "118px";
        firstInputNode.readOnly = false;
        secondInputNode.readOnly = false;
    } else {
        converterList.style.display = "grid";
        toggleButton1.style.display = "block";
        toggleButton2.style.display = "none";
        main.style.justifyContent = "center";
        main.style.paddingTop = "20px";
        firstInputNode.readOnly = true;
        secondInputNode.readOnly = true;
    }
});



// Нода селекта
const firstSelect = document.querySelector('.converter__output-select--fisrt');
const secondSelect = document.querySelector('.converter__output-select--second');
const flagsNode = document.querySelectorAll('.converter__output-flag');

// Объект с картинками флагов
const imgFlag = {
    USD: {
        img: 'img/usa.png',
        description: 'Доллар США',
    },
    RUB: {
        img: 'img/russia.png',
        description: 'Российский рубль',
    },
    EUR: {
        img: 'img/evro.png',
        description: 'Евро',
    },
    CNY: {
        img: 'img/china.png',
        description: 'Китайский юань',
    },
    JPY: {
        img: 'img/japan.jpeg',
        description: 'Японская иена',
    },
    GBP: {
        img: 'img/gbp.png',
        description: ' Фунт стрелингов',
    }
}

// Нода описания валюты
const outputDescriptionFirst = document.querySelector('.converter__output-description--first');
const outputDescriptionSecond = document.querySelector('.converter__output-description--second');

// Массив с нодами описания валюты
const arrOfDescriptionNode = [outputDescriptionFirst, outputDescriptionSecond];


// Функция замены флага
function getFlag(e) {
    let selectValue = e.target.value;
    let selectId = Number(e.target.id);

    console.log(selectValue);
    console.log(selectId);

    if (selectValue === 'USD') {
        flagsNode[selectId].src = imgFlag.USD.img;
        arrOfDescriptionNode[selectId].textContent = imgFlag.USD.description;
    } else if (selectValue === 'RUB') {
        flagsNode[selectId].src = imgFlag.RUB.img;
        arrOfDescriptionNode[selectId].textContent = imgFlag.RUB.description;
    } else if (selectValue === 'EUR') {
        flagsNode[selectId].src = imgFlag.EUR.img;
        arrOfDescriptionNode[selectId].textContent = imgFlag.EUR.description;
    } else if (selectValue === 'CNY') {
        flagsNode[selectId].src = imgFlag.CNY.img;
        arrOfDescriptionNode[selectId].textContent = imgFlag.CNY.description;
    } else if (selectValue === 'GBP') {
        flagsNode[selectId].src = imgFlag.GBP.img;
        arrOfDescriptionNode[selectId].textContent = imgFlag.GBP.description;
    }else {
        flagsNode[selectId].src = imgFlag.JPY.img;
        arrOfDescriptionNode[selectId].textContent = imgFlag.JPY.description;
    }
}

// Слушатель на селект
firstSelect.addEventListener('change', (e) => getFlag(e));
secondSelect.addEventListener('change', (e) => getFlag(e));


// Поменять валюты
const buttonCross = document.querySelector('.converter__output-img');

// Функция быстрой смены валюты
function crossValue() {
    // Значение селекта
    const selectNodeValue1 = firstSelect.value;
    const selectNodeValue2 = secondSelect.value;
    const arrCrossSelect = [selectNodeValue1, selectNodeValue2];

    // Значение инпута
    const inputNodeValue1 = firstInputNode.value;
    const inputNodeValue2 = secondInputNode.value;
    const arrCrossInput = [inputNodeValue1, inputNodeValue2];

    // Значение описания
    const descriptionNodeValue1 = outputDescriptionFirst.textContent;
    const descriptionNodeValue2 = outputDescriptionSecond.textContent;
    const arrCrossDescription = [descriptionNodeValue1, descriptionNodeValue2];

    // Значение описания
    const flagNodeValue1 = document.querySelector('.converter__output-flag--first');
    const flagNodeValue2 = document.querySelector('.converter__output-flag--second');
    const arrCrossFlag = [flagNodeValue1.src, flagNodeValue2.src];

    // Меняем местами 
    // 1
    arrCrossSelect[0] = selectNodeValue2;
    arrCrossSelect[1] = selectNodeValue1;
    // 2
    arrCrossInput[0] = inputNodeValue2;
    arrCrossInput[1] = inputNodeValue1;
    // 3
    arrCrossDescription[0] = descriptionNodeValue2;
    arrCrossDescription[1] = descriptionNodeValue1;
    // 4
    arrCrossFlag[0] = flagNodeValue2.src;
    arrCrossFlag[1] = flagNodeValue1.src;

    // Выводим результат
    // 1
    firstSelect.value = arrCrossSelect[0];
    secondSelect.value = arrCrossSelect[1];
    // 2
    firstInputNode.value = arrCrossInput[0];
    secondInputNode.value = arrCrossInput[1];
    // 3
    outputDescriptionFirst.textContent = arrCrossDescription[0];
    outputDescriptionSecond.textContent = arrCrossDescription[1];
    // 4
    flagNodeValue1.src = arrCrossFlag[0];
    flagNodeValue2.src = arrCrossFlag[1];
}

buttonCross.addEventListener('click', crossValue);

