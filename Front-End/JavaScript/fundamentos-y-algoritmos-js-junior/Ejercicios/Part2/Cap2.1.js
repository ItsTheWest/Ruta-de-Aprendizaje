// ' Cofla inicia sus estudios universitarios en desarrollo de software.
// ' En su curso hay 19 alumnos en total.
// ' Se presenta un problema: el sistema de registro de asistencias está fuera de servicio por 30 días.
// ' Por esta razón, se requiere crear un sistema alternativo de asistencia para continuar con las clases.

// ' Requisitos del sistema:

// ' 1. Crear un mini-sistema que permita registrar qué alumnos están:
// '    - Presentes (P)
// '    - Ausentes (A)

// ' 2. Pasados los 30 días, el sistema debe mostrar:
// '    - La cantidad total de veces que cada alumno estuvo presente y ausente.

// ' 3. Regla adicional:
// '    - Cada alumno puede tener como máximo un 10% de inasistencias por semestre.
// '    - Si supera ese límite, debe marcarse como reprobado.
let cantidadAlumnos;
do{
  cantidadAlumnos = prompt("Introduce la cantidad de alumnos");
     if(isNaN(cantidadAlumnos)){
         alert("Introduce un numero valido");
     }
}while(isNaN(cantidadAlumnos));

let alumnos = [];
const dias=2;
//llenado de mariz mediaante un clico
for(let i=0; i<cantidadAlumnos; i++){
    do{
     alumnos[i] = [prompt("Introduce el nombre del alumno " + (i+1)),0,0];
        if(alumnos[i][0] === "" || alumnos[i][0] === null || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(alumnos[i][0])){
            alert("Introduce un nombre valido (solo letras)")
        }
    }while(alumnos[i][0] === "" || alumnos[i][0] === null || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(alumnos[i][0]))
}

document.write("Alumnos " + "<br>")
// Mostrar solo los nombres de los alumnos
for(let i = 0; i < alumnos.length; i++){
    document.write((i+1) + "-" + alumnos[i][0][0] + "<br>");
        }
        
//funcion para registrar la asistencia de cada alumno
const asistencia = (nombre,posicion) => {
    let presencia;
    do{
     presencia = prompt("Estas presente?"+ nombre);
        if(presencia == "P" || presencia == "p"){
            alumnos[posicion][1]++;
            break;
        }
        else if(presencia == "A" || presencia == "a"){
            alumnos[posicion][2]++;
            break;
        }
        else
        {
            alert("Respuesta no valida");
        }
    }while(true);  //termina el ciclo cuando se encuentra un break  
}

//ciclo para ejecutar la funcion la cantiad de dias necesarios

for(let i=0; i<dias; i++){
   for(alumno in alumnos){
    asistencia(alumnos[alumno][0],alumno)
   }
}

// ciclo para mostrar los resultados de cada estudiante
document.write("--------------------------------   " + "<br>")
for(alumno in alumnos){
let Respuesta = document.write("Alumno " + alumnos[alumno][0] ) + "<br>" 
document.write("-----------Veces presente:" + alumnos[alumno][1]) + "<br>"
document.write("-----------Veces ausente:" + alumnos[alumno][2] ) + "<br>"
let porcentaje = (alumnos[alumno][1]*100)/dias;
    if(porcentaje < 10){
        document.write(" Esta reprobado" + "<br>")
    }
    else{
        document.write(" Esta aprobado" + "<br>")
    }

}




