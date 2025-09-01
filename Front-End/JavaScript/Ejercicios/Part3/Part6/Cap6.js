// Document - Métodos de selección de elementos:

// getElementById() - Selecciona un elemento por ID.
// getElementsByTagName() - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
// querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores.
// querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

// Ejemplo de getElementById()
const titulo = document.getElementById('titulo');
console.log('getElementById:', titulo);

// Ejemplo de getElementsByTagName()
const parrafos = document.getElementsByTagName('p');
console.log('getElementsByTagName (p):', parrafos);

// Ejemplo de querySelector()
const primerContenedor = document.querySelector('.container');
console.log('querySelector (.container):', primerContenedor);

const parrafoConClase = document.querySelector('.parrafo-clase');
console.log('querySelector (.parrafo-clase):', parrafoConClase);

// Ejemplo de querySelectorAll()
const todosLosContenedores = document.querySelectorAll('.container');
console.log('querySelectorAll (.container):', todosLosContenedores);


// Métodos para definir, obtener y eliminar valores de atributos en elementos HTML:
// ----------------------------------------------------------

// Modifica el valor de un atributo existente o lo crea si no existe
// Ejemplo: elemento.setAttribute("class", "activo");
//setAttribute()

// Obtiene el valor actual de un atributo específico
// Ejemplo: elemento.getAttribute("id");
//getAttribute()

// Elimina un atributo del elemento
// Ejemplo: elemento.removeAttribute("style");
//removeAttribute()

const rango = document.querySelector(".rango");
rango.setAttribute("type","text");

rango.removeAttribute("class")

// -----------------------------
// Ejemplos de setAttribute con atributos HTML
// -----------------------------

// 1. contenteditable: Hace que un elemento sea editable
const tituloPrincipal = document.getElementById('titulo');
tituloPrincipal.setAttribute('contenteditable', 'true');
console.log("El título principal ahora es editable. ¡Haz clic y escribe en él!");

// 2. dir: Cambia la dirección del texto (de derecha a izquierda)
const parrafoEjemplo = document.querySelector('.parrafo-clase');
parrafoEjemplo.setAttribute('dir', 'rtl');
console.log("El párrafo con clase '.parrafo-clase' ahora tiene dirección de texto de derecha a izquierda.");

// 3. hidden: Oculta un elemento después de 3 segundos
setTimeout(() => {
    parrafoEjemplo.setAttribute('hidden', 'true');
    console.log("El párrafo con clase '.parrafo-clase' se ha ocultado.");
}, 3000);

// 4. style: Aplica estilos CSS en línea
tituloPrincipal.setAttribute('style', 'color: teal; border-bottom: 2px solid orange;');
console.log("Se han aplicado nuevos estilos al título principal.");

// 5. tabindex: Cambia el orden de tabulación
tituloPrincipal.setAttribute('tabindex', '2');
rango.setAttribute('tabindex', '1');
console.log("Se ha cambiado el orden de tabulación. Ahora el input es el primer elemento (1) y el título el segundo (2).");

// 6. title: Tooltip visual en un botón
const subtitulo= document.querySelector(".subtitulo");
subtitulo.setAttribute("title","homelo chino");

const input1 = document.querySelector(".input-normal");
document.write("<br>");
document.write("Nobre de la clase: " +input1.className + "<br>");
document.write("Valor: " +input1.value +"<br>");
 input1.type="file";
 input1.accept = "image/png"

 const input2 = document.querySelector(".input2");
 input2.setAttribute("minlength","4")
 input2.setAttribute("placeholder","escribe fraka")
 input2.required =" ";
const tform = document.querySelector(".tform");
tform.style.color ="red";
