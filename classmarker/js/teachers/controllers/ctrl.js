window.addEventListener('load',bindEvents);
function bindEvents(){
    document.querySelector('#add').addEventListener('click',addQuestion);
}
function addQuestion(){
    var questionObject = new Question();
    for(let key in questionObject){
        questionObject[key] =document.querySelector('#'+key).value;
    }
    console.log('Add Call ',questionObject);
   /*
   var questionObject = new Question();
   var myid =  document.querySelector('#id').value;
    questionObject.id = myid;
   var name =  document.querySelector('#name').value;
   var optionA =  document.querySelector('#optionA').value;*/
}