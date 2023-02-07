// Список с кнопками: Попап
const popupMenu = document.querySelector('.main__popup');
const buttonMenu = document.querySelector('.button-menu');

// Показать меню
buttonMenu.addEventListener('click', () => {
    popupMenu.style.display = "flex";
});


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

// Слушатель для быстрой смены валюты
buttonCross.addEventListener('click', crossValue);



// Объект с картинками флагов
const imgFlag = {
    USD: {
        img: 'img/flags/usa.png',
        description: 'Доллар США',
    },
    RUB: {
        img: 'img/flags/russia.png',
        description: 'Российский рубль',
    },
    EUR: {
        img: 'img/flags/evro.png',
        description: 'Евро',
    },
    CNY: {
        img: 'img/flags/china.png',
        description: 'Китайский юань',
    },
    JPY: {
        img: 'img/flags/japan.jpeg',
        description: 'Японская иена',
    },
    GBP: {
        img: 'img/flags/gbp.png',
        description: ' Фунт стрелингов',
    }
}

// Нода селекта
const firstSelect = document.querySelector('.converter__output-select--fisrt');
const secondSelect = document.querySelector('.converter__output-select--second');
const flagsNode = document.querySelectorAll('.converter__output-flag');

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




// Переключение клавиатуры
const toggleWrapper = document.querySelector('.toggle');
const toggleButton1 = document.querySelector('.toggle__button-1');
const toggleButton2 = document.querySelector('.toggle__button-2');
const main = document.querySelector('.main');
const arrOfButton = [toggleButton1, toggleButton2];

toggleWrapper.addEventListener('click', (e) => {
    // console.log(e.target.id);
    let idButton = e.target.id;

    if (idButton === '0') {
        converterList.style.display = "none";
        toggleButton1.style.display = "none";
        toggleButton2.style.display = "block";
        main.style.justifyContent = "flex-start";
        main.style.paddingTop = "142px";
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