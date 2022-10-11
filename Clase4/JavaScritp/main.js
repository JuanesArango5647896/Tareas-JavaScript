import {persona, saludar} from "./persona.js";
import {crearEncabezado} from "./dom.js";
import {crearBody} from "./util.js";
import {} from "./tarea";

console.log(persona[0].firtsName + ' ' + persona[0].lastName);

console.log(saludar('Juano'));

//Llamamos el div creado en el dom
crearEncabezado();
crearBody();