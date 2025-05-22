// live & inline validation as you type
// span section to display error message
// Don't submit the form to server.
// form attribute 'novalidate'

const form = document.querySelector('form');

const email = document.querySelector('#email');
const emailError = document.querySelector('.emailContainer span');

const country = document.querySelector('#country');
const countryError = document.querySelector('.countryContainer span');

const postal = document.querySelector('#postal');
const postalError = document.querySelector('.postalContainer span');

const password = document.querySelector('#password');
const passwordError = document.querySelector('.passwordContainer span');

const rePassword = document.querySelector('#rePassword');
const rePasswordError = document.querySelector('.rePasswordContainer span');

email.addEventListener('input', handleError());

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

function handleError() {}

function checkEmail() {
    if (!email.validity.valid) {
        emailError.textContent = 'Incorrect email address';
        emailError.classList = 'active';
    } else {
        emailError.textContent = '';
        emailError.classList = '';
    }
}

function checkCountry(){
    if (!country.validity.valid || ) {

    }
}
