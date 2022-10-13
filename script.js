let lampada = document.getElementById("lampada");
let ligar = document.getElementById("ligar");
let desligar = document.getElementById("desligar");

ligar.addEventListener("click",function(){
    lampada.setAttribute("src","ligada.jpg");
})

desligar.addEventListener("click",()=>{
    lampada.src = "apagada.jpg";
})