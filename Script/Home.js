let empPayrollList;
window.addEventListener('DOMContentLoaded',(event)=>{
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
    debugger;
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start</th><th>Actions</th>";
    let displayTableRow = `${headerHtml}`;
    debugger;
    ///empPayrollList = createEmployeePayrollJSON();
    if( empPayrollList.length == 0) return;

    for(const empPayrollData of empPayrollList){
        displayTableRow = `${displayTableRow}
        <tr>
            <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td><img alt="delete" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" id="${empPayrollData._id}">
            <img alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" id="${empPayrollData._id}"></td>
        </tr>    
        `;
    }
    document.querySelector('#display').innerHTML = displayTableRow;
}; 
const createEmployeePayrollJSON = () =>{
    let empPayrollListLocal = [{
        _name:'Narayan Mahadevan',
        _gender:'Male',
        _department:['HR','Finance'],
        _salary:'3000000',
        _startDate:'1 Nov 2020',
        _note:'',
        _id: new Date().getTime(),
        _profilePic:'../assets/profile-images/Ellipse -2.png'
    },{
        _name:'Shivani Maynak',
        _gender:'Female',
        _department:['HR','Engineer'],
        _salary:'400000',
        _startDate:'29 oct 2019',
        _note:'',
        _id: new Date().getTime(),
        _profilePic:'../assets/profile-images/Ellipse -1.png'
    }];
    return empPayrollListLocal;
};

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml =  `${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
};

const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._id == node._id);
    if(!empPayrollData) return;
    const index = empPayrollList
                    .map(empData => empData._id)
                    .indexOf(empPayrollData._id);
    empPayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}

