//Haz tú validación en javascript acá

// Obtener referencias a los elementos del formulario
const form = document.forms.form;
const nombreInput = form.nombre;
const emailInput = form.email;
const asuntoInput = form.asunto;
const mensajeInput = form.mensaje;

// Función para validar el formulario
function validarFormulario(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Validar el nombre (no puede estar vacío)
  if (nombreInput.value.trim() === "") {
    alert("Por favor, ingresa tu nombre");
    nombreInput.focus();
    return;
  }

  // Validar el email (debe ser un formato válido)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert("Por favor, ingresa un correo electrónico válido");
    emailInput.focus();
    return;
  }

  // Validar el asunto (no puede estar vacío)
  if (asuntoInput.value.trim() === "") {
    alert("Por favor, ingresa el asunto del mensaje");
    asuntoInput.focus();
    return;
  }

  // Validar el mensaje (no puede estar vacío)
  if (mensajeInput.value.trim() === "") {
    alert("Por favor, ingresa tu mensaje");
    mensajeInput.focus();
    return;
  }

  // Si todas las validaciones pasan, puedes enviar el formulario aquí
  // Puedes agregar tu lógica de envío o mostrar un mensaje de éxito

  // Reiniciar el formulario después del envío (opcional)
  form.reset();
}

// Agregar el evento de validación al formulario
form.addEventListener("submit", validarFormulario);


const menuToggle = document.querySelector('.menu__toggle');
const menuNav = document.querySelector('nav');

menuToggle.addEventListener('click', function() {
    menuNav.classList.toggle('active');
});