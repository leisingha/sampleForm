// live & inline validation as you type
// span section to display error message
// Don't submit the form to server.
// form attribute 'novalidate'

const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('.emailContainer span');

email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.className = '';
        emailError.textContent = '';
    } else {
        emailError.textContent = 'The email field is wrong';
        emailError.className = 'active';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});
