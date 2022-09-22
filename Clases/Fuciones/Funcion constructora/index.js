/*function Producto(info){
    this.nombreProducto = info.nombreProducto;
    this.precio = info.precio;
    this.vencimiento = info.vencimiento;
    this.litros = info.litros;
    this.fragancia = info.fragancia;
  }
  
const producto1 = new Producto(
    {
      nombreProducto: "PlussBelle",
      precio: 450,
      vencimiento: 2025,
      litros: 1,
      fragancia: "Manzana Verde",
    }
)
  
console.log(producto1);*/
  

class Producto{
  constructor(nombre, precio, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  vender(){
    this.cantidad = this.cantidad - 1;
  }
}

const producto1 = new Producto("monitor", 10000, 5);
console.log(producto1);
producto1.vender();
console.log(producto1);
