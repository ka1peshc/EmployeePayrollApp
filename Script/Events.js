//UC 8 Display slider value
const sal = document.querySelector('#salary');
const displaySal = document.querySelector('#displaySalary');
sal.addEventListener('input',function (){
    displaySal.textContent= document.getElementById("salary").value;
})