//UC 8 Display slider value
const sal = document.querySelector('#salary');
const displaySal = document.querySelector('#displaySalary');
sal.addEventListener('input',function (){
    displaySal.textContent= document.getElementById("salary").value;
})

const userName = document.querySelector('#name');
const nameError = document.querySelector('#displayNameError');
userName.addEventListener('input',function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(userName.value)){
        nameError.textContent="";
    }else{
        nameError.textContent="Name is Incorrect";
    }
});
function CheckAllField(){
    const checkValue = document.querySelector('.checkbox').value;

    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');

       alert(checkValue);
}