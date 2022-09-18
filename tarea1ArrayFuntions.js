// 3 Funciones flecha utilizando CallbackFuntion y Manipulando arreglos

//------------------------ 1 ---------------------------

const colores =  ["Purple","Green","Blue"];
const paises = ["France","Spain","Germany"];

const juntar = (colores,paises) => {
    let nuevoArray = colores.concat(paises);
    return nuevoArray;
}

let union = (CallbackFuntion, colores, paises) => {
    let unionArreglos = CallbackFuntion (colores, paises);
    return unionArreglos;
}

union(juntar, colores, paises);
console.log(union(juntar, colores, paises));

//------------------------ 2 ---------------------------

const edades = [10, 12, 16, 76, 52, 5, 86, 42, 38];

const filtro = (edades) => {
    let esMayor = edades.filter(edad => edad>=18);
    return esMayor;
}

let filtrar = (CallbackFuntion, edades) => {
    let mayor = CallbackFuntion (edades);
    return mayor;
}

filtrar(filtro, edades);
console.log(filtrar(filtro, edades));

//------------------------ 3 ---------------------------

const numbers = [24, 05, 150, 400, 210];

const resultadoRaiz = (numbers) => {
    let resultado = numbers.map(numero => Math.sqrt(numero));
    return resultado;
}

let newArreglo = (CallbackFuntion, numbers) => {
    let arreglo = CallbackFuntion (numbers);
    return arreglo;
}

newArreglo(resultadoRaiz, numbers);
console.log(newArreglo(resultadoRaiz, numbers));

