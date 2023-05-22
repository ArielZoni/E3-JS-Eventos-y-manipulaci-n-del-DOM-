const pizzas = [{
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


// 1. Definir las referencias a los elementos
const nombrePizza = document.getElementById("nombrePizza");
const precioPizza = document.getElementById("precioPizza");
const inputNumber = document.getElementById("idPizza");
const imagePizza = document.getElementById("image");
const button = document.getElementById("button-card");
const infoPizza = document.querySelector(".infoPizza");


const selectedPizza = JSON.parse(localStorage.getItem('selectedPizza'));

// Funcion para renderizar (IMPRIMIR)
function buscarPizza() {
  let numImput = inputNumber.value;

  if (numImput === "") {
    showError("Error no ingresó ningún ID");
    return;
  }
  crearHtml(numImput);
}


function showError(error) {
  let msgError = document.createElement("p");
  msgError.textContent = error;
  msgError.classList.add("error");
  infoPizza.appendChild(msgError);


  setTimeout(() => {
    msgError.remove();
  }, 4000);
}


function crearHtml(dato) {
  let pizza = pizzas.filter((item) => item.id === parseInt(dato));
  nombrePizza.innerHTML = pizza.map((item) => item.nombre);
  precioPizza.innerHTML = pizza.map((item) => `$${item.precio}`);
  imagePizza.src = pizza.map((item) => item.imagen);

  //Si el usurio ingreso un ID invalido
  if (dato <= 0 || dato > pizzas.length) {
    showError("Por favor ingrese un ID invalido");
    nombrePizza.innerHTML = "Escriba el ID";
  }

  localStorage.setItem('selectedPizza', JSON.stringify(pizza));

  inputNumber.value = "";
}



button.addEventListener("click", buscarPizza);