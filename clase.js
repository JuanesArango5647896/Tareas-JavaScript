console.log("Hola Mundo");

// declaracion de variables

let suma;
var resta;
const cadena = "Digalo";

//funciones 
//1. Tipo flecha 

const printhola =() => {
    console.log ("hola")
}

const printholados = mensaje =>{
    //console.log(`el mensaje fue ${mensaje}`)
    console.log(mensaje);
}

printholatres('Hola')

const printholatres = mensaje => console.log(mensaje);
printholatres('Hola Dos')

function printholacuatro(mensaje){
    console.log(mensaje);
}

printholacuatro('Hola 4')

const printholacinco = function(){
    console.log('Hola Cinco');
}

printholacinco()