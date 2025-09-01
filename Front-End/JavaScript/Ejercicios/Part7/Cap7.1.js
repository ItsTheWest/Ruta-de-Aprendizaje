// Cofla llega a su casa y abre una página y aprieta F11, desde ahí se pone a navegar 
// pero hay un problema... como ahora está en pantalla completa no puede ver ni la barra de marcadores, 
// ni el protocolo, ni la URL, ni ninguna información que nos puede otorgar la interfaz que contiene la barra de búsqueda.

// - Crear un sistema que muestre los suficientes datos como para conocer el sitio web.

let protocolo = window.location.protocol;
let url = window.location.href;
let dominio = window.location.hostname;
let ruta = window.location.pathname;
alert("Protocolo: " + protocolo + "\n" +
      "URL: " + url + "\n" + 
      "Dominio: " + dominio + "\n" +
      "Ruta: " + ruta);