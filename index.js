// Курс
const dollar_Ruble = 70;
const dollar_Euro = 0.92;

// Нода инпута
const firstInputNode = document.querySelector('.converter__input--first');
const secondInputNode = document.querySelector('.converter__input--second');

// Нода селект
const firstSelect = document.querySelector('.converter__output-select--fisrt');
const secondSelect = document.querySelector('.converter__output-select--second');

console.log(firstSelect);

// function selectValue() {
//     let getValue = this.value;
//     console.log(getValue);
// }

// firstSelect.addEventListener('input', selectValue)

// Функция расчета курса для первого инпута
function inputEventListenerFirst() {
    let getSum = this.value;
    let getFirstSelect = firstSelect.value;
    let getSecondSelect = secondSelect.value;

    console.log(getSum);
    console.log(getFirstSelect);
    console.log(getSecondSelect);

    function isInteger(x) {
        if (Number.isInteger(x)) {
            return x;
        } else {
            // Кол-во знаков после запятой у первого числа
            const decimalNumberComponent = x.toString().match(/\.(\d+)/)?.[1].length

            if (decimalNumberComponent >= 5) {
                return x.toFixed(5);
            } else if (decimalNumberComponent >= 1 && decimalNumberComponent < 5) {
                return x.toFixed(decimalNumberComponent)
            } else {
                return x; 
            }
        }
    }

    // Расчет курса в зависимости от выбранных валют
    if (getFirstSelect === 'USD') {
        if (getSecondSelect === 'RUB') {
            let result = isInteger(getSum * dollar_Ruble);
            secondInputNode.value = result;
            return;
        } else if (getSecondSelect === 'EUR') {
            let result = isInteger(getSum * dollar_Euro);
            secondInputNode.value = result;
            return;
        } else {
            let result = getSum;
            secondInputNode.value = result;
            return;
        }
    } else if (getFirstSelect === 'RUB') {
        if (getSecondSelect === 'USD') {
            secondInputNode.value = getSum / dollar_Ruble;
            return;
        } else if (getSecondSelect === 'EUR') {
            secondInputNode.value = getSum / dollar_Ruble * dollar_Euro;
            return;
        } else {
            secondInputNode.value = getSum
            return;
        }
    }

}


firstInputNode.addEventListener('input', inputEventListenerFirst)