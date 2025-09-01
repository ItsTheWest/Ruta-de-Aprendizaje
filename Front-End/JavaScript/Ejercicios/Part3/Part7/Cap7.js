// Después de aprobar, Cofla se compra una mejor computadora para poder programar mejor 
// y hacer todo de una forma más óptima, pero necesita una resolución óptima para poder trabajarla.

// - Debe ser al menos Full HD
// - Cuando la esté por comprar, preguntarle si está seguro de eso.

let ancho= window.screen.width;
let alto= window.screen.height;

compra= confirm("¿Estás seguro de comprar la computadora con resolución de " + ancho + "x" + alto + "?");

if (compra = true){
    alert("Compra realizada con éxito"); 
}
else{
    alert("No se realizó la compra");
}


