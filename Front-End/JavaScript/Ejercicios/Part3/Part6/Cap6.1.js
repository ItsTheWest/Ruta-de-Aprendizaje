// 🧠 Módulos relacionados con la manipulación de clases en elementos HTML
// ----------------------------------------------------------------------

// add(): Añade una nueva clase al elemento
// Ejemplo: elemento.classList.add("activo");

// remove(): Elimina una clase existente del elemento
// Ejemplo: elemento.classList.remove("invisible");

// item(): Retorna la clase ubicada en el índice especificado dentro del classList
// Ejemplo: elemento.classList.item(0);

// contains(): Verifica si el elemento posee una clase específica
// Ejemplo: elemento.classList.contains("seleccionado");

// replace(): Sustituye una clase por otra dentro del elemento
// Ejemplo: elemento.classList.replace("oscuro", "claro");

// toggle(): Alterna la clase: la agrega si no está, o la remueve si ya existe
// Ejemplo: elemento.classList.toggle("activo");


// Ejemplo para add()
const titulo = document.getElementById("titulo");
titulo.classList.add("nuevo-estilo"); // Añade la clase "nuevo-estilo" al h1

// Ejemplo para remove()
const subtitulo = document.querySelector(".subtitulo");
subtitulo.classList.remove("subtitulo"); // Elimina la clase "subtitulo" del h2

// Ejemplo para item()
const parrafo = document.querySelector(".parrafo-clase");
console.log(parrafo.classList.item(0)); // Muestra el nombre de la primera clase del párrafo

// Ejemplo para contains()
if (parrafo.classList.contains("parrafo-clase")) {
    console.log("El párrafo tiene la clase 'parrafo-clase'");
} else {
    console.log("El párrafo NO tiene la clase 'parrafo-clase'");
}

// Ejemplo para replace()
titulo.classList.replace("nuevo-estilo", "otro-estilo"); // Cambia "nuevo-estilo" por "otro-estilo" en el h1

// Ejemplo para toggle()
titulo.classList.toggle("resaltado"); // Si "resaltado" no está, la agrega; si está, la quita