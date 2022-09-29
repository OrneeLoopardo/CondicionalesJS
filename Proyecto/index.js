function datos(){
    var uno = document.getElementById("texto1").value;
    var dos = document.getElementById("texto2").value;
    var tres = document.getElementById("texto3").value;
    var arreglo = [uno, dos, tres];
    return arreglo;
}

const respuesta = () =>{
const enJSON = JSON.stringify(new datos());

localStorage.setItem("datos", enJSON);
console.log(enJSON);
};

boton1.addEventListener("click", respuesta);