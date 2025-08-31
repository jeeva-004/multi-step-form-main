const btn = document.querySelector('.confirm-btn');
const h4_ = document.querySelector('.plan-type').querySelector('h4');
const plan_ =  document.querySelector('.plan-type');
const planType =document.querySelector('.mOy');
const planValue = document.querySelector('.month-value');
const serviceAll = document.querySelector('.all-services');
const total_ = document.querySelector('.total-value');
btn.addEventListener('click', ()=>{
    document.querySelector('.step-4').style.display='none';
    document.querySelector('.step-5').style.display='flex';
})

let total_cost = 0;
window.onload = ()=>{
    let plan =JSON.parse(localStorage.getItem('details'));
    let services = JSON.parse(localStorage.getItem('services'));
    h4_.textContent = plan[0];
    planValue.textContent = plan[1];
    planType.textContent = localStorage.getItem('plan').includes('m')?'(Monthly)':'(Yearly)';
    total_cost+=makeInt(plan[1]);
    createService(services);
};

function makeInt(val){
    return parseInt(val.replaceAll(/[a-z$/]/g,''))
}

function createService(data){
    data.forEach(data=>{
        let div_ = document.createElement('div');
        div_.classList.add('services');
        div_.innerHTML = `                                     <span>${data.name}</span>
        <small>${data.value}</small>`
        serviceAll.appendChild(div_);
        total_cost+=makeInt(data.value);
    });
    total_.innerHTML = data[0].value.includes('mo')? `$${total_cost}/mo`:`$${total_cost}/yr`;
}

