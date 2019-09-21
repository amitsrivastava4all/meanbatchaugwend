window.addEventListener('load',init);
function init(){
    updateCounts();
    bindEvents();
}
function deleteMarked(){
    var arr= questionOperations.delete();
    printTable(arr);
    
}
function printTable(arr){
    document.querySelector('#questions').innerHTML = '';
    arr.forEach(printQuestion);
    updateCounts();
}
function load(){
    if(localStorage){
        if(localStorage.questions){
            questionOperations.questions = JSON.parse(localStorage.questions);
            printTable(questionOperations.questions);
        }
        else{
            alert("Nothing to Load");
        }
    }
    else{
        alert("Ur Browser is Outdated...");
    }

}
function save(){
    if(localStorage){
        let arr = questionOperations.questions;
        let json =JSON.stringify(arr);
        console.log(arr);
        console.log(json);
        localStorage.questions = json;
        alert("Record Saved");
    }
    else{
        alert("Ur Browser is Outdated...");
    }
}
function bindEvents(){
    document.querySelector('#load').addEventListener('click',load);
    document.querySelector('#save').addEventListener('click',save);
    document.querySelector('#add').addEventListener('click',addQuestion);
    document.querySelector('#delete').addEventListener('click',deleteMarked);
}
function printQuestion(questionObject){
var tbody = document.querySelector('#questions');
var tr = tbody.insertRow();
var index = 0;
for(let key in questionObject){
    if(key=='isMarked'){
        continue;
    }
   let td =  tr.insertCell(index);
   td.innerText = questionObject[key]; 
   index++;
   
}
let td =  tr.insertCell(index);
let id = questionObject.id;
td.appendChild(createIcon('https://cdn1.iconfinder.com/data/icons/hawcons/32/699013-icon-27-trash-can-128.png',id));
td.appendChild(createIcon('https://image.flaticon.com/icons/png/128/61/61456.png'));
//https://image.flaticon.com/icons/png/128/61/61456.png

}
function updateCounts(){
    document.querySelector('#total').innerText = questionOperations.questions.length;
    document.querySelector('#mark').innerText =  questionOperations.countMark() ;
    document.querySelector('#unmark').innerText =  questionOperations.questions.length -   questionOperations.countMark();
}
function toggleMark(){
console.log('U Click on ',this);
let id = this.getAttribute('qid');
console.log('ID is ',id);
questionOperations.toggleMark(id);
let tr = this.parentNode.parentNode;
tr.classList.toggle('alert-danger');
updateCounts();
// if(tr.className){
 //   tr.className='';
// }
// else
//tr.className='alert-danger';
// tr.className='alert-danger';
}

function edit(){
    console.log("Edit Click");
}

function createIcon(path,id){
    var img = document.createElement('img');
    img.src =path;
    img.setAttribute('qid',id);
    img.className='size';
    img.addEventListener('click',toggleMark);
    return img;
}
function addQuestion(){
    var questionObject = new Question();
    for(let key in questionObject){
        if(key=='isMarked'){
            continue;
        }
        questionObject[key] =document.querySelector('#'+key).value;
    }
    questionOperations.add(questionObject);
    printQuestion(questionObject);
    updateCounts();
    console.log('Add Call ',questionObject);
   /*
   var questionObject = new Question();
   var myid =  document.querySelector('#id').value;
    questionObject.id = myid;
   var name =  document.querySelector('#name').value;
   var optionA =  document.querySelector('#optionA').value;*/
}