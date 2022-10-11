//No recibe parametros
//hello =()=>{
//  console.log('hola');
//}

//Recibe un solo parametro
//hello = mensaje =>{
//   console.log(mensaje);
//}

//Cuando solo hace una accion
//hello = mensaje => console.log(mensaje);

//Guardar esa funcion en una variable
const hello = mensaje => console.log(mensaje);

let hellodos = mensaje => console.log(mensaje);

//Callback funtions

const esImpar = numero => numero%2 == 1;

const hellotres = (callbackFunction, numero) => {
    const esNumeroImpar = callbackFunction(numero);
    console.log(`el numero ${numero} es impar? ${esNumeroImpar}`);
}

hellotres(esImpar, 33)

//Otra con Callback funtions

//Callback funtion
const saludar = usuario => 'Hola' + usuario;

const saludarUsuario = (callbackFunction, usuario) =>{
    let mensajeRecibido = callbackFunction(usuario);
    console.log(mensajeRecibido);
}

saludarUsuario(saludar, " Juano")

//Metodos para arrays

const cars= ["BMW", "LAMBORGHINI", "FERRARI", 1, 3, 5];

const carNames = ["Mustang", "FORD", "BUGATTI", true, false];

const cities = ["PARIS", "BARCELONA", "MEDELLIN", 12, 52, 1.251];

//.concat()

const unionArreglos = cars.concat(carNames, cities);
console.log(unionArreglos);

//.length

console.log(cars.length);
console.log(carNames.length);
console.log(cities.length);

//.push() Agrega a lo ultimo del arreglo

cars.push("CHALLENGE", "CORVETTE");
console.log(cars);

//.pop() Elimina el ultimo del arreglo

cars.pop();
console.log(cars);

//.map() Guarda en un nuevo arreglo el metodo ejecutado en la funcion

const numbers = [24, 05, 2.001];

//const raizCuadrada = numero => Math.sqrt(numero);

const resultadoRaiz = numbers.map(numero => Math.sqrt(numero));
console.log(resultadoRaiz);

const por10 = numbers.map(numero => numero*10);
console.log(por10);

//.filter() Sirve para filtrar los valores que cumplan en la funcion establecida

const edades = [10, 12, 16, 76, 52];
const esMayor = edades.filter(edad => edad>=18);
console.log(esMayor);

const pruebaDos = [10, 12, 16, 76, 52].filter(edad => edad>=18);
console.log(pruebaDos);

console.log([10, 12, 16, 76, 52].filter(edad => edad>=18));

//.reduce() regresa un unico valor acumulado

const sumaEdades = edades.reduce((accumulador, currentValue) => {
    return accumulador+currentValue;
})

console.log(sumaEdades);

//.forEach() 

edades.forEach(element => console.log(element));