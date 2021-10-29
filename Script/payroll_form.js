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
    
    const day = document.querySelector('#day').value;
    const month = document.querySelector('#month').value;
    const year = document.querySelector('#year').value;
    let currDate = new Date();
    let user_date = new Date(year+"-"+month+"-"+day); 
    const date_error = document.querySelector('.date-error');
    year.addEventListener('input',function(){
        if(user_date > currDate){
            date_error.textContent="You cannot select future Date"
        }
    })

});