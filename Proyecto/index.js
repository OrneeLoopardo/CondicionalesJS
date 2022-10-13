//MODAL PARA EL FORMULARIO
const exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", (event) => {
  // BOTON QUE ACTIVA EL MODAL
  const button = event.relatedTarget;

  const recipient = button.getAttribute("data-bs-whatever");

  const modalTitle = exampleModal.querySelector(".modal-title");
  const modalBodyInput = exampleModal.querySelector(".modal-body input");

  modalTitle.textContent = `Contactate a ${recipient}`;
  modalBodyInput.value = recipient;
});

//SWEET ALERT
button2.addEventListener("click", () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Sus datos han sido enviados",
    showConfirmButton: false,
    timer: 5000,
  });
});

button1.addEventListener("click", () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Sus datos han sido eliminados",
    showConfirmButton: false,
    timer: 5000,
  });
});

//CONECTAR AL STORAGE
function datos() {
  let uno = document.getElementById("message-text1").value;
  let dos = document.getElementById("message-text2").value;
  let tres = document.getElementById("message-text3").value;
  console.log(uno, dos, tres);
  let arreglo = [uno, dos, tres];
  console.log(arreglo);
  return arreglo;
}

const respuesta = () => {
  const enJSON = JSON.stringify(datos());

  localStorage.setItem("datos", enJSON);
  console.log(enJSON);
};

button2.addEventListener("click", respuesta);
