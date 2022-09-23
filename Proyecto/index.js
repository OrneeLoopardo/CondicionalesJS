function datos(){
    var uno = document.getElementById("texto1").value;
    var dos = document.getElementById("texto2").value;
    var tres = document.getElementById("texto3").value;
    var arreglo = [uno, dos, tres];
    return arreglo;
}
const respuesta = () =>{
    var arreglo = datos();
    console.log(`su nombre es ${arreglo[0]}, su apellido ${arreglo[1]} y su edad ${arreglo[2]}`);
};

boton1.addEventListener("click", respuesta);