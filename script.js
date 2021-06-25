/* # This is just a test code to understand the usage of .JSON and Fetch API
function calculate() {
    fetch('items.json')
    .then(res => res.json())
    .then(data => console.log(data));
}

calculate();
*/

const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/12098a202f5acd4d1f3d9d41/latest/${currencyEl_one}`)
     .then(res => res.json())
     .then(data => {
         console.log(data);
     })
}

//Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('change', calculate);

calculate();

