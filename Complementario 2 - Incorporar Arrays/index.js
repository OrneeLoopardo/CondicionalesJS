class Producto {
    constructor(id, nombre, precio, valor) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.valor = valor;
    }
    
}

const productos = [];
productos.push(new Producto(1, "Sedal", 300 ));
productos.push(new Producto(2, "Plusbell", 150 ));
productos.push(new Producto(3, "Fructis", 500 ));
productos.push(new Producto(4, "Pantene", 350 ));
console.log(productos);

function agregarValores(impuesto, descuento){
    switch(impuesto, descuento){
        case "+":
            return this.valor + this.valor * 0.21;
            break;
        case "-":
            return this.valor - this.valor * 0.5;
            break;
    }
}

for (let index = 0; index < 501; index++) {
    let productos = agregarValores(productos, prompt('INGRESAR NOMBRE DE PRODUCTO'));
    if(productos != undefined){
        alert('ID '+busqueda.id+' NOMBRE '+busqueda.nombre+' PRECIO '+busqueda.precio);
    }else{
        alert('NO EXISTE PRODUCTO CON ESE NOMBRE');
    }
}