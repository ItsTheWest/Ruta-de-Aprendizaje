//realiza calculadora avanzada

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

const potencia = (numero1,numero2) =>{
    let resultado= parseInt(numero1) ** parseInt(numero2);
    return resultado;
}

const raiz = (numero1) =>{
    parseInt(numero1);
    let resultado= Math.sqrt (numero1);
    return resultado;
}

const raizc = (numero1) =>{
    parseInt(numero1);
    let resultado= Math.cbrt (numero1);
    return resultado;
}




let numero1,numero2,resultado,opcion;

do{
    opcion = prompt(
        "¿Qué deseas hacer?\n" +
        "1 - Suma\n" +
        "2 - Resta\n" +
        "3 - Multiplicación\n" +
        "4 - División\n" +
        "5 - Potencia\n" +
        "6 - Raíz cuadrada\n" +
        "7 - Raíz cúbica"
      );
      if(opcion == 1){
        do{
            numero1 = prompt("Ingresa el primer numero para hacer una operacion");
            numero2 = prompt("Ingresa el segundo numero para hacer una operacion");
            if(isNaN(numero1) || isNaN(numero2)){
                alert("Ingresa numeros validos");
            }
        }while(isNaN(numero1) || isNaN(numero2));
        resultado =suma(numero1,numero2);
        alert("Tu resultado es " +  resultado + " crack");
      }
      else if(opcion == 2){
        do{
            numero1 = prompt("Ingresa el primer numero para hacer una operacion");
            numero2 = prompt("Ingresa el segundo numero para hacer una operacion");
            if(isNaN(numero1) || isNaN(numero2)){
                alert("Ingresa numeros validos");
            }
        }while(isNaN(numero1) || isNaN(numero2));
        resultado =resta(numero1,numero2);
        alert("Tu resultado es " +  resultado + " crack");
      }
      else if(opcion == 3){
        do{
            numero1 = prompt("Ingresa el primer numero para hacer una operacion");
            numero2 = prompt("Ingresa el segundo numero para hacer una operacion");
            if(isNaN(numero1) || isNaN(numero2)){
                alert("Ingresa numeros validos");
            }
        }while(isNaN(numero1) || isNaN(numero2));
        resultado =multiplicación(numero1,numero2);
        alert("Tu resultado es " +  resultado + " crack");
      }
      else if(opcion == 4){
        do{
            numero1 = prompt("Ingresa el primer numero para hacer una operacion");
            numero2 = prompt("Ingresa el segundo numero para hacer una operacion");
            if(isNaN(numero1) || isNaN(numero2)){
                alert("Ingresa numeros validos");
            }
        }while(isNaN(numero1) || isNaN(numero2));
        resultado =división(numero1,numero2);
        alert("Tu resultado es " +  resultado + " crack");
      }
      else if(opcion == 5){
        do{
            numero1 = prompt("Ingresa el primer numero para hacer una operacion");
            numero2 = prompt("Ingresa el segundo numero para hacer una operacion");
            if(isNaN(numero1) || isNaN(numero2)){
                alert("Ingresa numeros validos");
            }
        }while(isNaN(numero1) || isNaN(numero2));
        resultado =potencia(numero1,numero2);
        alert("Tu resultado es " +  resultado + " crack");
      }
      else if(opcion == 6){
        do{
            numero1 = prompt("Ingresa el primer numero para hacer una operacion");
            if(isNaN(numero1)){
                alert("Ingresa numeros validos");
            }
        }while(isNaN(numero1));
        resultado =raiz(numero1,numero2);
        alert("Tu resultado es " +  resultado + " crack");
      }
      else if(opcion == 7){
        do{
            numero1 = prompt("Ingresa el primer numero para hacer una operacion");
            if(isNaN(numero1)){
                alert("Ingresa numeros validos");
            }
        }while(isNaN(numero1));
        resultado =raizc(numero1,numero2);
        alert("Tu resultado es " +  resultado + " crack");
      }
       else if(opcion < 1 || opcion > 7 || isNaN(opcion)){
            alert("Ingresa una opcion correcta")
        }
    }while(opcion < 0 || opcion >8 )