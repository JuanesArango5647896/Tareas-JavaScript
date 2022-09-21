// Una clase con herencia y un objeto que manipule un arreglo de objetos

//------------------ 1 --------------------------

//-------------- Clase Padre -----------------------

class Equipo {
    constructor(estadio, ciudad){
        this.estadio = estadio;
        this.ciudad = ciudad;
    }
    stadio(){
        let Stadium = "Estadio: Anfield,";
        return Stadium;
    }
    city(){
        let ciudad = "Ciudad: Liverpool";
        return ciudad;
    }
}

const EquipoUno = new Equipo();
console.log(EquipoUno.stadio(), EquipoUno.city());

//----------------- Clase Hija -----------------------

class EquipoDos extends Equipo{
    constructor(estadio, ciudad){
        super(estadio, ciudad);//hereda todo lo del padre
    }
    stadio(){
        let Stadium = "Estadio: Atanasio,";
        return Stadium;
    }
    city(){
        let ciudad = "Ciudad: Medellin";
        return ciudad;
    }
}

const EquipoDos2 = new EquipoDos("Camp Now", "Barcelona");
console.log(EquipoDos2);
const EquipoDos3 = new EquipoDos();
console.log(EquipoDos3.stadio(), EquipoDos3.city());

//------------------ 2 --------------------------

const mall = {
    propietario: "Juano,",
    edadPropietario: 21,
    localesQuePosee: [{
        localOne: "NIKE,",
        localTwo: "ADIDAS,",
        localThree: "HYM"
    },{
        localFour: "LOUIS VUITTON,",
        localFive: "CHANEL,",
        localSix: "GUCCI"
    },{
        localSeven: "ROLEX,",
        localEight: "DIOR,",
        localNine: "PRADA"
    },{
        localTen: "FENDY,",
        localEleven: "BURBERRY,",
        localTwelve: "AMAZON"
    },{
        localThirteen: "ACTIVISION,",
        localFourteen: "GOOGLE,",
        localFifteen: "MICROSOFT"
    }]
}

console.log("Nombre: " + mall.propietario + ' ' + "Edad: " + mall.edadPropietario);
console.log("Locales que posee: " + mall.localesQuePosee[0].localOne, mall.localesQuePosee[0].localTwo, mall.localesQuePosee[0].localThree);
console.log("Locales que posee: " + mall.localesQuePosee[1].localFour, mall.localesQuePosee[1].localFive, mall.localesQuePosee[1].localSix);
console.log("Locales que posee: " + mall.localesQuePosee[2].localSeven, mall.localesQuePosee[2].localEight, mall.localesQuePosee[2].localNine);
console.log("Locales que posee: " + mall.localesQuePosee[3].localTen, mall.localesQuePosee[3].localEleven, mall.localesQuePosee[3].localTwelve);
console.log("Locales que posee: " + mall.localesQuePosee[4].localThirteen, mall.localesQuePosee[4].localFourteen, mall.localesQuePosee[4].localFifteen);

