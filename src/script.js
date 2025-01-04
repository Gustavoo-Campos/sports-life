



const pay = document.querySelector("#pagamento")
const back = document.querySelector("#sair")
const compra = document.querySelector("#comprar")



  



function on() {

    compra.classList.remove("off");
    compra.classList.add("on");

}

pay.addEventListener("click", on);





function off() {


    compra.classList.remove("on");
    compra.classList.add("off");

}
back.addEventListener("click", off)


















