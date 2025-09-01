// Cofla está sufriendo un poco... ya que, a pesar de que cree contar con el 90% de asistencia
// y tener un promedio mayor a 7 / 10, no cree entregar el 75% de trabajos prácticos entregados,
// ya que necesita dividir las tareas que hará semanalmente.

// Cofla debe trabajar 8 horas por día durante 2 semanas, entre las cuales tiene:
// - 24 horas estudiar
// - 24 horas hacer trabajos prácticos
// - 56 horas de trabajar
// - 8 horas de hacer las cosas de la casa

// Crear soluciones:
// - Organizar las actividades diariamente
// - Utilizar la consola para organizar todo.
// - El tiempo por tarea no debe superar las 4 horas
let estudiar =24;
estudiar = Math.round((estudiar/14)*60);
let practicos =24;
practicos = Math.round((practicos/14)*60);
let trabajar = 56;
trabajar = Math.round((trabajar/14)*60);
let casa = 8;
casa = Math.round((casa/14)*60);

// Función para convertir minutos a formato horas y minutos
// Función sencilla para convertir minutos a horas y minutos
function formatoHorasMinutos(minutos) {
    let horas = Math.floor(minutos / 60); // Calcula las horas completas
    let mins = minutos % 60;              // Calcula los minutos restantes

    // Si hay horas y minutos
    if (horas > 0 && mins > 0) {
        return horas + " hora(s) " + mins + " minuto(s)";
    }
    // Solo horas
    if (horas > 0) {
        return horas + " hora(s)";
    }
    // Solo minutos
    return mins + " minuto(s)";
}

for(var i=0; i <14;i++){
    if(i ==0){
        console.group("Semana 1")
    }
    console.groupCollapsed("Dia" + (i+1));
    console.log(estudiar + " Minutos (" + formatoHorasMinutos(estudiar) + ") para estudiar");
    console.log(practicos + " Minutos (" + formatoHorasMinutos(practicos) + ") para trabajos practicos");
    console.log(trabajar + " Minutos (" + formatoHorasMinutos(trabajar) + ") para trabajar" );
    console.log(casa +  " Minutos (" + formatoHorasMinutos(casa) + ") para tareas de casa" );
    console.groupEnd();
        if(i==7){
            console.groupEnd();
            console.groupCollapsed("Semana 2");
        }
}
console.groupEnd();
console.groupEnd();