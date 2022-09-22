/*for(let vacante = 1; vacante <= 20; vacante++){
    if(vacante <= 5){
        continue;
    }
    let nombre = prompt("Ingrese su nombre para obtener una vacante");
    let mensaje = `Vacante #${vacante} Nombre: ${nombre}`;
    alert(mensaje);
}*/

let entrada = prompt("Buscá tu libro").toUpperCase();

while(entrada != "Barbie"){
    switch(entrada){
        case "After":
            alert("Libro disponible, sector juvenil.");
            break;
        case "IT":
            alert("Libro disponible, sector terror");
            break;
        default:
            alert("No se encuentra.")
            break;
    }
    entrada = prompt("Buscá tu libro");
}

