const form = document.querySelector('form');
const nameInput = form.querySelector('#name');
const emailInput = form.querySelector('#email');
const phoneInput = form.querySelector('#phone');

form.addEventListener('submit', (e) => {
    if (!validateInput())
        e.preventDefault();
})

function validateInput() {
    let status = true;
    const nameVal = nameInput.value;
    const emailVal = emailInput.value;
    const phoneVal = phoneInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    if (nameVal == '') {
        error(nameInput, 'This field is required!');
        status = false;
    }
    else
        success(nameInput);

    if (emailVal == '') {
        error(emailInput, 'This field is required!');
        status = false;
    }

    else if (!validatePhoneMail(emailVal.trim(), emailPattern)) {
        error(emailInput, 'Enter a valid email id!')
        status = false;
    }

    else
        success(emailInput);

    if (phoneVal == '') {
        error(phoneInput, 'This field is required!');
        status = false;
    }

    else if (!validatePhoneMail(phoneVal.trim(), phonePattern)) {
        error(phoneInput, 'Enter a valid phone number!')
        status = false;
    }

    else
        success(emailInput);


    return status;
}

function validatePhoneMail(val, pattern) {
    return pattern.test(val.trim());
}

function error(element, msg) {
    const field_set = element.closest('fieldset');
    const error = field_set.querySelector('.error');
    const input = field_set.querySelector('input');
    error.textContent = msg;
    input.classList.remove('border-success');
    input.classList.add('border-error');
}

function success(element) {
    const field_set = element.closest('fieldset');
    const error = field_set.querySelector('.error');
    const input = field_set.querySelector('input');
    error.textContent = '';
    input.classList.remove('border-error');
    input.classList.add('border-success');
}