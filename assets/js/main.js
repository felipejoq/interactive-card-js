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
    total.innerText = calAmount(quantityInput.value, PRICE_SUCCULENT_POTS)
    amountFinal.innerText = getQuantity(quantityInput.value).toString()
    changeColorHtmlElement(colorSelected, color.value)
})

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
    return clpCurrency.format(getQuantity(quantity) * price);
}

const changeColorHtmlElement = (element, color) => {
    result.style.display = 'flex';
    element.innerText = mapColors.get(color) ?? 'Color';
    element.style.background = color;
}

const getQuantity = (qty) => {
    return !isNaN(qty) ? qty : 1;
}

