
function saludar(){
    respuesta = prompt("Hola ¿Como estas?");
    if(respuesta == "Bien"){
        document.write("Que bueno que estas bien");
    }
    else{
        document.write("Que mal que no estas bien");
    }
}

//funcion que retorna un valor y se le colocan parametros
function multiplicar(a, b) {
    let r= a*b
    return r;
}

function sumar(numero1, numero2){
    return numero1 + numero2;
}

//llamada a la funciones
saludar();
document.write("<br>");

let resultado = sumar(4,5);
document.write(resultado)
document.write("<br>");

let resultadomulti= multiplicar(3, 4);
document.write(resultadomulti);