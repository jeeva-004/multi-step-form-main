const plansAll = document.querySelectorAll('.plan');
const toggleBtn = document.querySelector('.toggle');
let circle_ = toggleBtn.querySelector('.circle');
const paraAll = document.querySelectorAll('.two-free');
const yearVal = ['$90/yr', '$120/yr', '$150/yr'];
const monthVal = ['$9/mo', '$12/mo', '$15/mo'];
plansAll.forEach(plan => {
    plan.addEventListener('click', () => {
        plansAll.forEach(plan => plan.classList.remove('selected-outline'));
        plan.classList.add('selected-outline');
    })
});

let toggled = false;

toggleBtn.addEventListener('click', () => {
    let monthPlan = toggleBtn.closest('.month-year');
    let month = monthPlan.querySelector('.month');
    let year = monthPlan.querySelector('.year');

    if (!toggled) {
        circle_.classList.remove('just-start');
        circle_.classList.add('just-end');
        month.classList.remove('active');
        year.classList.add('active');
        paraAll.forEach(para => para.style.display = 'block');
        // displayMoney(yearVal);
        for (let i = 0; i <= plansAll.length; i++) {
            let currentEl = plansAll[i].querySelector('span');
            currentEl.textContent = yearVal[i];
        }
    }

    else {
        circle_.classList.remove('just-end');
        circle_.classList.add('just-start');
        month.classList.add('active');
        year.classList.remove('active');
        paraAll.forEach(para => para.style.display = 'none');
        // displayMoney(monthVal);
        for (let i = 0; i <= plansAll.length; i++) {
            let currentEl = plansAll[i].querySelector('span');
            currentEl.textContent = monthVal[i];
        }
    }

    toggled = !toggled;
});

// function displayMoney(val) {

// }