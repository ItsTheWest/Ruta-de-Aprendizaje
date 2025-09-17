// cabe acalarar que este tipo de ocdigo solo se pueden usar en servidores ya que se estan haciendo consulta

// Definimos una función asincrónica llamada getName
const getName = async () => {
  
  // 1. Hacemos una petición con fetch al archivo "informacion.txt"
  //    fetch devuelve una promesa que resolvemos con "await"
  let peticion = await fetch("informacion.txt");

  // 2. Convertimos la respuesta de la petición en JSON
  //    (asumiendo que "informacion.txt" contiene datos en formato JSON)
  let resultado = await peticion.json();

  // 3. Creamos una plantilla de HTML con los datos obtenidos
  //    Usamos template literals (``) para interpolar los valores

  let HTMLCode = `
    Nombre: ${resultado.nombre} <br>
    Apellido: ${resultado.edad}
  `;

  // 4. Seleccionamos el elemento con la clase ".resultado"
  //    y reemplazamos su contenido con el HTML que generamos arriba
  document.querySelector(".resultado").innerHTML = HTMLCode;
  
}

// 5. Seleccionamos el botón (o cualquier elemento) con id="nombre"
//    y le añadimos un event listener que llama a getName al hacer clic
document.getElementById("nombre").addEventListener("click", getName);
