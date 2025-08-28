let str;
  const plans = document.querySelector('.plans');
  const allPlan = plans.querySelectorAll('.plan');
  const spanAll = plans.querySelectorAll('span');
  allPlan.forEach(plan => {
    plan.addEventListener('click', () => {
        allPlan.forEach(plan => plan.classList.remove('selected-outline'));
        plan.classList.add('selected-outline');
    })
});

const toggleBtn = document.querySelector('.toggle');
let circle_ = toggleBtn.querySelector('.circle');
const paraAll = document.querySelectorAll('.two-free');
const yearVal = ['$90/yr', '$120/yr', '$150/yr'];
const monthVal = ['$9/mo', '$12/mo', '$15/mo'];


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
        addVal(yearVal, 'block');
        localStorage.setItem('plan', 'year');
    }

    else {
        circle_.classList.remove('just-end');
        circle_.classList.add('just-start');
        month.classList.add('active');
        year.classList.remove('active');
        addVal(monthVal, 'none');
        localStorage.setItem('plan', 'month');
    }

    toggled = !toggled;
});

function addVal(Val, str) {
    paraAll.forEach(para => para.style.display = `${str}`);
    let i = 0;
    spanAll.forEach(span => {
        span.textContent = Val[i];
        i++;
    })
}


