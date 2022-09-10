// SIMULADOR INTERACTIVO
//creo la clase constructor
class Producto{
    constructor (nombre, valor){
        this.nombre = nombre;
        this.valor = valor;
    }
    //aca van los descuentos y el impuesto para el valor del producto 1, se agrega un mensaje para ser llamado en la funcion.
    descuento (){
        this.valor = this.valor - this.valor * 0.1;
    }
    impuesto (){
        this.valor = this.valor + this.valor * 0.21;
    }
    mensaje (){
        return 'nombre: ' + this.nombre + " valor: " + this.valor;
    }
}

//defino los valores del constructor. Aplico los impuestos y descuentos al producto.
const producto = new Producto();
producto.impuesto();
producto.descuento();
console.log(producto.mensaje());

