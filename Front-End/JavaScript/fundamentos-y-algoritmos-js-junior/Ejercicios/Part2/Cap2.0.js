// Un joven muy afortunado ganó el primer premio de la lotería.
// Este joven era una persona pobre a la que Cofla ayudó en algún momento.
// Para celebrar que salió de la pobreza, decide organizar una fiesta.

// Reglas especiales implementadas por el joven ahora millonario:
// -1. Se compró una máquina que solo permite el acceso a personas mayores de edad.
// - 2. Además, se aplican condiciones adicionales como la entrada gratuita para la primera persona que ingrese después de las 2 AM.

let gratis= false;
const entrada = (edad) => {
    if(edad>=18){
        let tiempo= prompt("Introduce la hora de entrada");
        if(tiempo >= 2 && gratis==false){
        alert("Entras gratis");
        gratis= true;
        }

        else if(tiempo <2 ){
        alert("La fiesta no ha empzado aun");
        }

        else{
            alert("Tienes que pagar para entrar");
            }
    } else{
        alert("No puedes entrar, eres menor de edad");
    }
}
 entrada(prompt("Introduce tu edad "));
entrada(prompt("Introduce tu edad "));
entrada(prompt("Introduce tu edad"));