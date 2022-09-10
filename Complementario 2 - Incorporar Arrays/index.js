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
    //aca van los descuentos y el impuesto para el valor del producto 2, se agrega un mensaje para ser llamado en la funcion.
    descuento2 (){
        this.valor = this.valor - this.valor * 0.5;
}
    impuesto2 (){
        this.valor = this.valor + this.valor * 0.21;
    }
    mensaje2 (){
        return 'nombre: ' + this.nombre + " valor: " + this.valor;
    }
    //aca van los descuentos y el impuesto para el valor del producto 3, se agrega un mensaje para ser llamado en la funcion.
    descuento3 (){
        this.valor = this.valor - this.valor * 0.5;
}
    impuesto3 (){
        this.valor = this.valor + this.valor * 0.21;
    }
    mensaje3 (){
        return 'nombre: ' + this.nombre + " valor: " + this.valor;
    }
}
//defino los valores del constructor. Aplico los impuestos y descuentos al producto.
const producto1 = new Producto("plusbelle", 100);
producto1.impuesto();
producto1.descuento();
console.log(producto1.mensaje());

const producto2 = new Producto("Suave", 150);
producto2.impuesto2();
producto2.descuento2();
console.log(producto2.mensaje2());

const producto3 = new Producto("Pantene", 300);
producto3.impuesto3();
producto3.descuento3();
console.log(producto3.mensaje3());