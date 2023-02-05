/*const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const btn4=document.getElementById("btn4");
const btn5=document.getElementById("btn5");
const btn6=document.getElementById("btn6");
const btn7=document.getElementById("btn7");
const btn8=document.getElementById("btn8");
const btn9=document.getElementById("btn19");
const btndot =document.getElementById("btn.");
const btnplus =document.getElementById("btn+");
const btnminus=document.getElementById("btn-");
const btnequal =document.getElementById("btn=");

const inpBox = document.getElementById('fname')

let numStr = '';
let num1 = 0 ;
let num2 = 0 ;
let operation = null ;


btn1.onclick = function () {
    numStr = numStr + '1';
}

btnplus.onclick = function() {
    if(operation == null) {
        num1 = parseInt(numStr);
        operation = 'add';
        numStr='';
    } else {
        num2 = parseInt(numStr);
        numStr = '';
    }
}

btnequal.onclick = function() {
    if(operation == null) {
        inpBox.innerText = num1.toString();
    } else {
        switch(operation) {
            case 'add':
                inpBox.innerText
        }
    }
}*/
var input =ducument.getElementById('fname');
var number=ducument.getElementById('')
var resultdisplayed=false;
for(var i=0;i<btn.length();i++){
  btn.addEventListener("click",function(e){
    var currentstring=input.innerHTML;
    var lastcharacter=currentstring[currentstring.length-1];
    if(displayresult===false){
        input.innerHTML+=e.target.innerHTML;
    }
    else if(displayresult==true && lastcharacter==="+"||lastcharacter==="-")
    {
        resultdisplayed=false;
        input.innerHTML+=e.target.innerHTML;
    }
    else {
        input.innerHTML="";
        input.innerHTML+=e.target.innerHTML;
    }


  });
}
for(var i=0;i<operator.length();i++)
{
    
}
//clearing the input box
clear.addEventListener("click",function(){
    input.innerHTML="";
})