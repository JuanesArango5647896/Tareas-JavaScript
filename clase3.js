//Clases y Objetos

class carro {
    constructor(name, year){
        //This se refiere al objeto cuando se instancie
        this.name = name;
        this.year = year;
    }
    age(){
        let presentYear = new Date();
        //Regresa el año 2022 menos el año recibido
        return presentYear.getFullYear() - this.year;
    }
    color(){
        return "Azul";
    }
}

const carroUno = new carro("Ford", 2015);
console.log(carroUno.color());

//Clase mia

class Equipo {
    constructor(estadio, ciudad){
        this.estadio = estadio;
        this.ciudad = ciudad;
    }
    stadio(){
        let Stadium = "Anfield";
        return Stadium;
    }
}

const EquipoUno = new Equipo();
console.log(EquipoUno.stadio());

//Clase hija mia

class EquipoDos extends Equipo{
    constructor(estadio, ciudad){
        super(estadio, ciudad);//hereda todo lo del padre
    }
}

const EquipoDos2 = new EquipoDos("Camp Now", "Barcelona");
console.log(EquipoDos2);

//Herencia
//Clase padre
class forma{
    constructor(){
        console.log("Soy una forma geometrica");
    }
}

//Clase hija, la palabra extends significa hereda
class cuadrado extends forma{
    constructor(){
        super();//hereda todo lo del padre
        console.log("Soy un cuadrado");
    }
}

const cuadradoDos = new cuadrado();
console.log(cuadradoDos);

//Objetos

let nombre = "Mono Gay"; //Es un obejto en JavaScript

//Tambien es un Objeto
let persona = {
    firstName: "Mono",
    LastName: "Gay"
}

//Creo una instancia tipo objeto
const Jose = new Object();
Jose.nombre = "Jose";
Jose.apellido = "Gay";

console.log(Jose);

//Acceso a las propiedades
//Primera forma
console.log(persona.firstName);

//segunda forma
console.log(persona["firstName"]);

//Objeto dentro de otro objeto
const carros = {
    propietario: "Juano",
    edadPropietario: 21,
    carrosQuePosee: [{
        carOne: "Lamborghini",
        carTwo: "Corvette",
        carThree: "Audi"
    },{
        carFour: "Ferrari",
        carFive: "Ford"
    }]
}

//console.log(carros.propietario + ' ' + carros.edadPropietario + ' ' + carros.carrosQuePosee.carOne)
console.log(carros.carrosQuePosee[0].carOne);

