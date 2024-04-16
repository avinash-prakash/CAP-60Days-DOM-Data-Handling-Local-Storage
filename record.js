// fill in javascript code here

let myform = document.querySelector('form');
let inp1 = document.getElementById('name');
let inp2 = document.getElementById('employeeID');
let inp3 = document.getElementById('department');
let inp4 = document.getElementById('exp')*1;
let inp5 = document.getElementById('email');
let inp6 = document.getElementById('mbl');
let tbody = document.querySelector('tbody');

let AllTask = [];

myform.addEventListener('submit',function(e)
{
e.preventDefault();
let Data = {};
Data.name = inp1.value;
Data.employeeID = inp2.value;
Data.department = inp3.value;
Data.exp = inp4.value;
Data.email = inp5.value;
Data.mbl = inp6.value;


AllTask.push(Data);
console.log(AllTask);
tbody.innerHTML = null;
AllTask.map((ele)=>
{
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    td1.innerText = ele.name;
    td2.innerText = ele.employeeID;
    td3.innerText = ele.department;
    td4.innerText = ele.exp;
    td5.innerText = ele.email;
    td6.innerText = ele.mbl;
    td7.innerText = getExperienceLevel(inp4);

    row.append(td1,td2,td3,td4,td5,td6,td7);
  tbody.append(row);

})
})

function getExperienceLevel(experience) {
  if (experience > 5) {
      return "Senior";
  } else if (experience >= 2 && experience <= 5) {
      return "Junior";
  } else {
      return "Fresher";
  }
}