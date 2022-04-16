
//!  Dar opciones y agregar a otro campo ENTREGAR

 let comida;

document.querySelector("#btnPrinsipal1").addEventListener("click", () => { comida = 
document.querySelector("#eleccion1").value;
document.querySelector("#aprueba1").value = comida;}); 


let bebida;

document.querySelector("#btnPrinsipal2").addEventListener("click", () => { bebida = 
document.querySelector("#eleccion2").value;
document.querySelector("#aprueba2").value = bebida;}); 


let postre;

document.querySelector("#btnPrinsipal3").addEventListener("click", () => { postre = 
document.querySelector("#eleccion3").value;
document.querySelector("#aprueba3").value = postre;}); 


let abonar;

document.querySelector("#btnPrinsipal4").addEventListener("click", () => { abonar = 
document.querySelector("#eleccion4").value;
document.querySelector("#aprueba4").value = abonar;}); 





//!  EVENTOS DE TECLADO tecla ENTER              ENTREGAR
//! onkeydown  onkeyup 

document.querySelector("#teclado").addEventListener("keydown", (event) => {
    if(event.keyCode == 13){
        alert("Has pulsado la Tecla Enter");
    }
    });



