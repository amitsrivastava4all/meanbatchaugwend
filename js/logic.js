window.addEventListener('load',bindEvents);
function bindEvents(){
var buttonArray = document.querySelectorAll('button');
console.log('Button Array is ',buttonArray);
document.querySelector('#clear').addEventListener('click',()=>{
    document.querySelector('#txt').value='';
    document.querySelector('#txt').focus();
});
document.querySelector('#equal').addEventListener('click',compute);
buttonArray.forEach(button=>{
    if(button.id!='equal' && button.id!='clear'){
    button.addEventListener('click',takeValue);
    //button.addEventListener('click',()=>document.querySelector('#txt').value +=  this.innerText);
    }
});
}
//const takeValue=()=>document.querySelector('#txt').value +=  this.innerText;

function takeValue(){
    
    document.querySelector('#txt').value +=  this.innerText;
}
function compute(){
    document.querySelector('#txt').value = eval(document.querySelector('#txt').value);
}
