// live & inline validation as you type
// span section to display error message
// Don't submit the form to server.
// form attribute 'novalidate'

import { populateCountries } from './countries.js';

document.addEventListener('DOMContentLoaded', populateCountries);

const form = document.querySelector('form');

const email = document.querySelector('#email');
const emailError = document.querySelector('.emailContainer span');

const country = document.querySelector('#country');
const countryError = document.querySelector('.countryContainer span');

const postal = document.querySelector('#postal');
const postalError = document.querySelector('.postalContainer span');

const postalPatterns = {
    Afghanistan: ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Albania: ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Algeria: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Andorra: [
        '^AD[0-9]{3}$',
        'Postal code must start with AD followed by 3 digits',
    ],
    Angola: ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Argentina: [
        '^[A-Z][0-9]{4}[A-Z]{3}$',
        'Format: Letter, 4 digits, 3 letters (e.g., C1234ABC)',
    ],
    Australia: ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Austria: ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Bangladesh: ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Belgium: ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Brazil: [
        '^[0-9]{5}-[0-9]{3}$',
        'Format: 5 digits, hyphen, 3 digits (e.g., 12345-678)',
    ],
    Bulgaria: ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Canada: ['^[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]$', 'Format: A1A 1A1'],
    Chile: ['^[0-9]{7}$', 'Postal code must be 7 digits'],
    China: ['^[0-9]{6}$', 'Postal code must be 6 digits'],
    Colombia: ['^[0-9]{6}$', 'Postal code must be 6 digits'],
    Croatia: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Denmark: ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Egypt: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Finland: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    France: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Germany: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Greece: [
        '^[0-9]{3} ?[0-9]{2}$',
        'Format: 3 digits, optional space, 2 digits',
    ],
    Hungary: ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Iceland: ['^[0-9]{3}$', 'Postal code must be 3 digits'],
    India: ['^[0-9]{6}$', 'Postal code must be 6 digits'],
    Indonesia: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Iran: ['^[0-9]{5}-[0-9]{5}$', 'Format: 5 digits, hyphen, 5 digits'],
    Iraq: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Ireland: [
        '^[A-Z0-9]{3} ?[A-Z0-9]{4}$',
        'Format: 3 characters, optional space, 4 characters',
    ],
    Israel: ['^[0-9]{5}|[0-9]{7}$', 'Postal code must be 5 or 7 digits'],
    Italy: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Japan: [
        '^[0-9]{3}-[0-9]{4}$',
        'Format: 3 digits, hyphen, 4 digits (e.g., 123-4567)',
    ],
    Kenya: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Korea: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Malaysia: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Mexico: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Netherlands: [
        '^[0-9]{4} ?[A-Z]{2}$',
        'Format: 4 digits, optional space, 2 letters',
    ],
    'New Zealand': ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Norway: ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Pakistan: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Peru: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Philippines: ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Poland: [
        '^[0-9]{2}-[0-9]{3}$',
        'Format: 2 digits, hyphen, 3 digits (e.g., 12-345)',
    ],
    Portugal: [
        '^[0-9]{4}-[0-9]{3}$',
        'Format: 4 digits, hyphen, 3 digits (e.g., 1234-567)',
    ],
    Romania: ['^[0-9]{6}$', 'Postal code must be 6 digits'],
    Russia: ['^[0-9]{6}$', 'Postal code must be 6 digits'],
    'Saudi Arabia': [
        '^[0-9]{5}(-[0-9]{4})?$',
        'Format: 5 digits, optional hyphen and 4 digits',
    ],
    Singapore: ['^[0-9]{6}$', 'Postal code must be 6 digits'],
    'South Africa': ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Spain: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Sweden: [
        '^[0-9]{3} ?[0-9]{2}$',
        'Format: 3 digits, optional space, 2 digits',
    ],
    Switzerland: ['^[0-9]{4}$', 'Postal code must be 4 digits'],
    Thailand: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Turkey: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    Ukraine: ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    'United Arab Emirates': ['^[0-9]{5}$', 'Postal code must be 5 digits'],
    'United Kingdom': [
        '^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$',
        'Format: AA9A 9AA, A9A 9AA, A9 9AA, A99 9AA, AA9 9AA, AA99 9AA',
    ],
    'United States': [
        '^[0-9]{5}(-[0-9]{4})?$',
        'Format: 5 digits, optional hyphen and 4 digits (e.g., 12345 or 12345-6789)',
    ],
    Vietnam: ['^[0-9]{6}$', 'Postal code must be 6 digits'],
};

const password = document.querySelector('#password');
const passwordError = document.querySelector('.passwordContainer span');

const rePassword = document.querySelector('#rePassword');
const rePasswordError = document.querySelector('.rePasswordContainer span');

email.addEventListener('input', () => {
    checkEmail(email);
});

country.addEventListener('input', () => {
    checkCountry(country);
});

postal.addEventListener('input', () => {
    checkPostal(postal);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

function checkEmail(mail) {
    if (!mail.validity.valid) {
        emailError.textContent = 'Please enter valid email address';
        emailError.className = 'active';
    } else {
        emailError.textContent = '';
        emailError.className = '';
    }
}

function checkCountry(cntry) {
    if (!cntry.value) {
        countryError.textContent = 'Select a valid Country';
        countryError.className = 'active';
    } else {
        countryError.textContent = '';
        countryError.className = '';
        console.log('This works;');
    }
}

function checkPostal(postal) {
    const constraint = new RegExp(postalPatterns[country.value][0], '');

    if (!postal.validity.valid) {
        postalError.textContent = 'Please enter valid Postal Address';
        postalError.className = 'active';
    } else if (!constraint.test(postal.value)) {
        postalError.textContent = `Invalid Postal Address. ${postalPatterns[country.value][1]}`;
        postalError.className = 'active';
    }

    postalError.textContent = '';
    postalError.className = '';
}
