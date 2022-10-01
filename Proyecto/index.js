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

boton1.addEventListener("click", () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Sus datos han sido enviados",
      showConfirmButton: false,
      timer: 5000,
    });
});

boton2.addEventListener("click", respuesta);

boton2.addEventListener("click", () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Sus datos han sido eliminados",
      showConfirmButton: false,
      timer: 5000,
    });
});