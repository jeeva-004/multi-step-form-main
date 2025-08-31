window.onload = ()=>localStorage.setItem('services', pickAdd=[]);
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
            if (!pickAdd.some(item => item.name == add_.querySelector('h5').textContent)) {
                pickAdd.push({
                    name: add_.querySelector('h5').textContent,
                    value: add_.querySelector('span').textContent
                })
            }
        }
        else {
            add_.classList.remove('border-blue');
            let index = pickAdd.indexOf(add_.querySelector('h5'));
            pickAdd.splice(index, 1);
        }
        localStorage.setItem('services', JSON.stringify(pickAdd));
    });
});

adds.forEach(add => {
    add.querySelector('span').textContent = yearOrmonth == 'month' ? monthVal[i] : yearVal[i];
    i++;
});



