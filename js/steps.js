// Selección de elementos del DOM
const accountForm = document.querySelector(".account__step");
const payForm = document.querySelector(".pay__details"); // Corregido el nombre de la variable
const finishPay = document.querySelector(".finish__pay"); // Corregido el nombre de la variable

// Selección de los pasos
const steps = document.querySelectorAll(".steps div");

// Selección de botones de continuar y volver
const continueButtons = document.querySelectorAll(".continue");
const backButtons = document.querySelectorAll(".account__button");

// Estado actual del formulario (1: cuenta, 2: pago, 3: confirmación)
let currentStep = 1;

// Función para actualizar la visualización de los pasos
function updateSteps() {
    steps.forEach((step, index) => {
        // Los índices comienzan en 0, pero nuestros pasos comienzan en 1
        const stepNumber = index + 1;
        
        if (stepNumber <= currentStep) {
            // Si el paso es menor o igual al paso actual, marcarlo como activo
            step.className = "step--active";
        } else {
            // Si no, marcarlo como inactivo
            step.className = "step--inactive";
        }
    });
}

// Función para mostrar el formulario correspondiente al paso actual
function showCurrentForm() {
    // Ocultar todos los formularios
    accountForm.style.display = "none";
    payForm.style.display = "none";
    finishPay.style.display = "none";
    
    // Mostrar el formulario correspondiente al paso actual
    if (currentStep === 1) {
        accountForm.style.display = "flex";
    } else if (currentStep === 2) {
        payForm.style.display = "flex";
    } else if (currentStep === 3) {
        finishPay.style.display = "flex";
    }
}

// Evento para los botones de continuar
continueButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentStep < 3) {
            currentStep++;
            updateSteps();
            showCurrentForm();
        }
    });
});

// Evento para los botones de volver
backButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentStep > 1) {
            currentStep--;
            updateSteps();
            showCurrentForm();
        } else {
            // Si estamos en el primer paso, volver a la página anterior
            window.history.back();
        }
    });
});

// Inicializar la página
updateSteps();
showCurrentForm();

