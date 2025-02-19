/*let numero = 5;
numero = numero + 1;
numero += 1;
numero++;*/

//ESTRUCTURA DEL OPERADOR TERNARIO
/*
condicion ? codigo a ejecutar cuando condicion verdadera : codigo a ejecutar cuando la condicion falsa
*/

/*let edad = 6;

if(edad >= 18){
    console.log("puedes entrar");
}else{
    console.log("no puedes entrar");
}*/

/*edad >= 18 ? console.log("puedes entrar") : console.log("no puedes entrar");*/

/*let edad = 18;
let permiso;

if(edad >= 18){
    permiso = true;
}else{
    permiso = false;
}

if(permiso){
    console.log("puedes entrar");
}else{
    console.log("no puedes entrar");
}*/

/*let edad = 6;
let permiso = edad >= 18 ? true : false;
permiso ? console.log("puedes entrar") : console.log("no puedes entrar");*/

/* 
operador1 && operador2 retorna operador1 cuando este tiene la propiedad de falsy
                            operador2
*/

/*const carrito = [];

if(carrito.length === 0){
    console.log("carrito vacio");
}*/

/*carrito.length === 0 && console.log("carrito vacio");*/

/*const usuario = {
    nombre: "ornella",
    edad: 15
};

const registro = usuario.edad >= 18 && new Date();
console.log(registro);*/

/* 
operador1 || operador2 si el operador1 no es falsy retorna operador1, en caso contrario retorna
                            operador2
*/

// console.log( 0 || "Falsy")  // falsy
// console.log( 40 || "Falsy") // 40
// console.log( null || "Falsy")  // falsy
// console.log( undefined || "Falsy")  // falsy
// console.log( "Hola Mundo" || "Falsy")  // hola mundo
// console.log( "" || "Falsy")  // falsy
// console.log( NaN || "Falsy")  // falsy
// console.log( true || "Falsy")  // true
// console.log( false || "Falsy") // falsy

/*const usuario = {
    nombre: "ornella",
    edad: 15
};

const usuario1 = null;
console.log(usuario || "usuario no existe");
console.log(usuario1 || "usuario no existe");*/

/*let carrito;
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
    carrito = carritoStorage;
}else{
    carrito = [];
}*/

/*let carrito = JSON.parse(localStorage.getItem("carrito")) || [];*/

/*const usuario = null;
console.log(usuario?.nombre || "usuario no existe");*/

/*const usuario = {
    nombre: "John Doe",
    edad: 22,
    cursos: null
}
console.log(usuario?.cursos?.javascript || "propiedad no existe");*/

//DESESTRUCTURACIÓN
/*const usuario = {
    nombre: "pepito",
    edad: 56,
    direccion: "AV"
};*/

/*let nombre = usuario.nombre;
let edad = usuario.edad;
let direccion = usuario.direccion;*/

/*let{nombre, edad, direccion} = usuario;

console.log(nombre, edad, direccion);*/

/*const usuario = {
    nombre: "John Doe",
    edad: 32,
    telefono: {
        cel: 113334444,
        casa: null,
        trabajo: 113325555
    }
}

let {
    nombre,
    telefono: {cel}
} = usuario;

console.log(cel);*/

/*const usuario = {
    nombre: "pepito",
    edad: 56,
    direccion: "AV"
};

let {nombre: namePerson} = usuario; //ALIAS
console.log(namePerson);*/

/*const revisar = ({nombre, edad, direccion}) => {
    console.log(nombre, edad, direccion);
}

const usuario = {
    nombre: "pepito",
    edad: 56,
    direccion: "AV"
};

revisar(usuario);*/

/*const nombres = ["Ornella", "Oriana", "Martin", "Santiago"];
const [a, , b] = nombres;
console.log(a, b);*/

/*let numero1 = 3;
let numero2 = numero1;

numero2 = 6;
console.log(numero1);
|  3  |         |  6  |
numero1         numero2*/

/* let persona = {nombre: "juan", edad: 56};
let persona1 = persona;
persona1.nombre = "mariana";
console.log(persona); 
|   {nombre: "mariana", edad: 56}   |
          persona  persona1
*/

/* let persona = {nombre: "juan", edad: 56};
let persona1 = {...persona}; //DESLIGA DE LA MEMORA
persona1.nombre = "mariana";
console.log(persona);
|   {nombre: "juan", edad: 56}   |     |   {nombre: "mariana", edad: 56}   |
          persona                                 persona1 */


/*const nombres = ["Ornella", "Oriana", "Martin", "Santiago"];
console.log(...nombres);
console.log(nombres.join(" "));*/

/*let numeros = [1, 2, 3, 45, 21]
console.log(Math.max(...numeros));*/

/*const usuario = {
    nombre: "pepito",
    edad: 56,
    direccion: "AV"
};

const usuario1 = {
    ...usuario, //COPIA
    edad: 70,
    familiar: "marta"
}

console.log(usuario1);*/

/*const usuarios = [{nombre: "juan", edad: 40}, {nombre: "marta", edad: 50}];
let nuevos = usuarios.map(item => {
    return {...item}
});

console.log(usuarios);*/

const sumar = (...numeros) => {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
};

console.log(sumar(1, 2, 23, 445, 234, 2345, 235));


