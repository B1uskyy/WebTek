
const form = document.querySelector('form').elements;
const tax = form['tax'];
const wealth = form['wealth'];
const income = form['income'];

function calctax(){
    tax.value =  (0.35 * income.value) + (0.25 * wealth.value)

   
}


income.addEventListener('input', calctax);
wealth.addEventListener('input', calctax);
