const addOn = document.querySelector('.add-on');
const adds = addOn.querySelectorAll('.adds');
const inputAll = addOn.querySelectorAll('input');
let yearOrmonth = localStorage.getItem('plan');
const yearVal = ['+$10/yr', '+$20/yr', '+$20/yr'];
const monthVal = ['+$1/mo', '+$2/mo', '+$2/mo'];
let pickAdd = [], i = 0;

inputAll.forEach(input => {
    let add_ = input.closest('.adds');
    input.addEventListener('change', () => {
        if (input.checked) {
            add_.classList.add('border-blue');
        }

        else {
            add_.classList.remove('border-blue');
        }
        i++;
    });
});

adds.forEach(add => {
    add.querySelector('span').textContent = yearOrmonth == 'month' ? monthVal[i] : yearVal[i];
    i++;
});

