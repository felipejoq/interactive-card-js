/**
 * Constants
 **/
const PRICE_SUCCULENT_POTS = 10000;

/**
 * Html elements
 **/
const quantityInput = document.getElementById('quantity')
const color = document.getElementById('color')
const btnGetTotal = document.getElementById('btnGetTotal')
const result = document.getElementById('result')
const total = document.getElementById('total');
const amountFinal = document.getElementById('amountFinal');
const colorSelected = document.getElementById('colorSelected');

/**
 * Actions and Events
 **/
btnGetTotal.addEventListener('click', (evt) => {
    evt.preventDefault()
    if(isValidate(quantityInput.value)){
        total.innerText = calAmount(quantityInput.value, PRICE_SUCCULENT_POTS)
        amountFinal.innerText = quantityInput.value
        changeColorHtmlElement(colorSelected, color.value)
    } else {
        alert('Ingrese solo números del 1 al 10');
        quantityInput.value = 1;
    }
});

/**
 * Globals functions and helpers
 **/
const mapColors = new Map()
mapColors.set('#3dbbff', 'skyblue')
mapColors.set('#469d37', 'green')
mapColors.set('#c95b4f', 'terracotta')
mapColors.set('#b02059', 'purple')

const clpCurrency = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
});

const calAmount = (quantity, price) => {
    return clpCurrency.format(quantity * price);
}

const changeColorHtmlElement = (element, color) => {
    result.style.display = 'flex';
    element.innerText = mapColors.get(color) ?? 'Color';
    element.style.background = color;
}

const isValidate = (qty) => {
    let quantity = parseInt(qty);

    let isNumber = !isNaN(quantity);
    let isInRange = isNumber ? (quantity > 0 && quantity < 11) : false;
    let isEmpty = qty.toString().length > 0;
    
    return isNumber && isInRange && isEmpty;

}

