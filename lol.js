let quant=0;
const dis = document.getElementById("display1");
const btn1 = document.getElementById("add1");
btn1.addEventListener('click',add1);

function add1 (){
    quant++;
    dis.textContent=quant;
}
const btn2 = document.getElementById("add2");
btn2.addEventListener('click',add2);
function add2(){
    quant+=2;
    dis.textContent=quant;
}
const btn3 = document.getElementById("add3");
btn3.addEventListener('click',add3);
function add3(){
    quant+=3;
    dis.textContent=quant;
}
const btn4 = document.getElementById("reset")
btn4.addEventListener('click',reset);
function reset(){
    quant=0;
    dis.textContent=quant
}