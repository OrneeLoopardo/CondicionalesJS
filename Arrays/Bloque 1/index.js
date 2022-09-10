/*const array1 = [];
const numeros = [1, 2, 3, 4];
const nombres = ["ornella", "martin", "andres", "marlon"]
const valores = [ true, false, false, true]
const varios = [ 1, true, "casa"]*/

/*console.log(nombres[2] + nombres[3]);
console.log(numeros[0] + numeros[2])*/

//Usamos LENGTH como atributo
/*const nombres = ["ornella", "martin", "andres", "marlon"]; 

for(let index = 0; index < nombres.length; index++){
    alert(nombres[index])
}*/

/*const nombres = ["ornella", "martin"];
nombres.push("mariano"); //PUSH agrea elementos al final de un arreglo
nombres.unshift("lucas"); //UNSHIFT aagrega elementos al principio de un arreglo*/

/*const nombres = ["ornella", "martin", "andres", "marlon", "lucas", "matias"];

nombres.pop(); //POP saca el ultimo elemento
nombres.shift(); //SHIFT saca el primer elemento
console.log(nombres);*/

/*const nombres = ["ornella", "martin", "andres", "marlon", "lucas", "matias"];
nombres.splice(2, 1); //SPLICE elimina elementos del arreglo (desde donde, hasta  donde)
console.log(nombres);*/

/*const nombres = ["ornella", "martin", "andres", "marlon", "lucas", "matias"];
console.log(nombres.join("*")); //JOIN une en un unico string los elementos del arreglo separados por lo indicado */

/*const nombres = ["ornella", "martin", "andres", "marlon", "lucas", "matias"];
const perritos = ["tito", "muny", "vilu", "canita"];
const varios = nombres.concat(perritos); //CONCAT concatena dos arreglos
console.log(varios);*/

/*const nombres = ["ornella", "martin", "andres", "marlon", "lucas", "matias"];
const copia = nombres.slice(1, 3); //SLICE crea una copia de un fragmento del arreglo
console.log(copia);*/

/*const nombres = ["ornella", "martin", "andres", "marlon", "lucas", "matias"];
let nombre = prompt("ingrese su nombre")
alert(nombres.indexOf(nombre)); //INDEXOF busca la posicion de un elemento dentro de un arreglo*/

/*const nombres = ["ornella", "martin", "andres", "marlon", "lucas", "matias"];
let nombre = prompt("ingrese su nombre");
alert(nombres.includes(nombre)) //INCLUDES para saber si algo se encuentra disponible*/

/*const nombres = ["ornella", "martin", "andres", "marlon", "lucas", "matias"];
nombres.reverse(); //REVERSE voltea el orden de los elementos
console.log(nombres);*/

// FUNCION PERSONALIZADA PARA ELIMINAR POR NOMBRE
/*const nombres = ["ornella", "martin", "andres", "marlon", "lucas", "matias"];

const eliminarPersona = (nombre) => {
    let posicion = nombres.indexOf(nombre);

    if(posicion != -1){
        nombres.splice(posicion, 1);
    }

    console.log(nombres);
}

eliminarPersona("lucas")*/ 

// ARRAYS DE OBJETOS

/*const productos = [
    { id: 1, nombre: "camisa", precio: 1000},
    { id: 2, nombre: "gorra", precio: 700},
    { id: 3, nombre: "pantalon", precio: 500},
    { id: 4, nombre: "zapatos", precio: 800},
];

//FORMA MAS OPTIMA
for(const item of productos){
    console.log(item.nombre);
    console.log(item.precio);
}*/

/* OTRA FORMA
for(let index = 0; index < productos.length; index++) {
    const element = productos[index];
    console.log(element);
}*/

/*class Producto{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio =precio;
    }
}

const productos = [
    new Producto(1, "camisa", 1000),
    new Producto(2, "gorra", 700),
];

console.log(productos);
*/

