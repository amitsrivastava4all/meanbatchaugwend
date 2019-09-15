window.addEventListener('load',bindEvents);
function bindEvents(){
    document.querySelector('#add').addEventListener('click',addQuestion);
}
function printQuestion(questionObject){
var tbody = document.querySelector('#questions');
var tr = tbody.insertRow();
var index = 0;
for(let key in questionObject){
   let td =  tr.insertCell(index);
   td.innerText = questionObject[key]; 
   index++;
   
}
let td =  tr.insertCell(index);
td.appendChild(createIcon('https://cdn1.iconfinder.com/data/icons/hawcons/32/699013-icon-27-trash-can-128.png'));
td.appendChild(createIcon('https://image.flaticon.com/icons/png/128/61/61456.png'));
//https://image.flaticon.com/icons/png/128/61/61456.png

}
function createIcon(path){
    var img = document.createElement('img');
    img.src =path;
    img.className='size';
    return img;
}
function addQuestion(){
    var questionObject = new Question();
    for(let key in questionObject){
        questionObject[key] =document.querySelector('#'+key).value;
    }
    questionOperations.add(questionObject);
    printQuestion(questionObject);
    console.log('Add Call ',questionObject);
   /*
   var questionObject = new Question();
   var myid =  document.querySelector('#id').value;
    questionObject.id = myid;
   var name =  document.querySelector('#name').value;
   var optionA =  document.querySelector('#optionA').value;*/
}