window.addEventListener('DOMContentLoaded',(event)=>{

    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length ==0){
            textError.textContent='';
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.value;;
            textError.textContent='';
        }catch (e){
            textError.textContent = e;
        } 
    });

    //Salary output
    const salary = document.querySelector('#salary');
    const output = document.querySelector('#displaySalary');
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
        output.textContent=salary.value;
    });

    //Date check
    
});
const save = () =>{
    try{
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    }catch(e){
        return;
    }
}
//UC 4
function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }else{
        employeePayrollList=[employeePayrollData];
    }
    alert("UC 4: "+employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}

//UC 3
const createEmployeePayroll = () => {
    debugger;
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name=getInputValueById('#name');
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    //employeePayrollData.name=getInputValueById('#name');
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
    employeePayrollData.department=getSelectedValues('[name=department]');
    employeePayrollData.salary=getInputValueById('#salary');
    employeePayrollData.note=getInputValueById('#notes');
    // let date = getInputValueById("#year")+"-"+getInputValueById('#month')+"-"+getInputValueById('#day');
    // console.log(date);
    // employeePayrollData.startDate=Date.parse(date).toISOString();
    //let abc = getInputValueById("#day")+" "+getInputValueById('#month')+" "+getInputValueById("#year");
    let abc = getInputValueById("#year")+"-"+getInputValueById('#month')+"-"+getInputValueById('#day');
    employeePayrollData.startDate = Date.parse(abc);
    alert("UC 3: "+employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if(item.checked) setItems.push(item.value);
    });
    return setItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}
//UC 5
const resetForm = () => {
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2020');
 }

 const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
 }

 const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.text
    Content=value;
 }

 const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value=value;
 }