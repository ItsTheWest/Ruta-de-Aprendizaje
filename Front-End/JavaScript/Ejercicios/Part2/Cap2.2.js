// Cofla feliz por haber empezado las clases volvió a su casa y ya tiene tarea básica de cálculo;
// tiene que hacer un par de ejercicios de matemática que incluyen suma, resta, división y multiplicación.
// Realizar esto con una calculadora puede ser mucho más efectivo.
// Crear calculadora que nos simplifique el trabajo.

const suma = (numero1,numero2) =>{
    let resultado= parseInt(numero1) + parseInt(numero2);
    return resultado;
}

const resta = (numero1,numero2) =>{
    let resultado= parseInt(numero1) - parseInt(numero2);
    return resultado;
}

const multiplicación= (numero1,numero2) =>{
    let resultado= parseInt(numero1) * parseInt(numero2);
    return resultado;
}

const división = (numero1,numero2) =>{
    let resultado= parseInt(numero1) / parseInt(numero2);
    return resultado;
}

let numero1,numero2,resultado;

do{
    numero1 = prompt("Ingresa el primer numero para hacer una operacion");
    numero1 = parseFloat(numero1);
    numero2 = prompt("Ingresa el segundo numero para hacer una operacion");
    numero2 = parseFloat(numero2);
    if(isNaN(numero1) || isNaN(numero2)){
        alert("Ingresa numeros validos");
    }
}while(isNaN(numero1) || isNaN(numero2));

let operacion;
do{
     operacion = prompt("Que operacion quieres realizar?\n1-Suma\n2-Resta\n3-Multiplicacion\n4-Division");
     operacion = parseInt(operacion);
     if(operacion == 1){
         resultado =suma(numero1,numero2);
     }
     else if(operacion == 2){
         resultado=resta(numero1,numero2);
     }
     else if(operacion == 3){
         resultado =multiplicación(numero1,numero2);
     }
     else if(operacion == 4){
         resultado=división(numero1,numero2);
     }
     else{
         alert("Ingresa una opcion correcta");
     }
}while(operacion < 1 || operacion > 4 || isNaN(operacion));

document.write("Tu resultado es " +  resultado + " crack");