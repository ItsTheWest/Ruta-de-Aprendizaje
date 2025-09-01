/* 
a) Terminó el primer semestre y Cofla no sabe si aprobará o no las materias. Para lograrlo necesitará:

    - Contar con al menos el 90% de asistencia.
    - El promedio por materia debe ser de al menos 7 / 10.
    - Debe tener al menos el 75% de los trabajos prácticos entregados.

    Crear soluciones:
    - Solicitar los datos y decirle si aprueba o no.
    - Mostrar todo esto con colores representativos en consola (ej: no aprobar en rojo).
    - Todo esto estructurado como tabla.
*/
const materias ={
    fisica:["fisica",90,7,2],
    matematica:["matematica",70,9,4],
    quimica:["quimica",95,3,1],
    calculo:["calculo",60,5,2],
    castellano:["castellano",91,7,3]
}
const trabajost=4;
const datosTabla = [];
const Aprobado =()=>{
    for(materia in materias){
        let nombre =materias[materia][0];
        let asistencia = materias[materia][1];
        let promedio = materias[materia][2];
        let trabajos = (materias[materia][3] / trabajost)*100;
                datosTabla.push({
                    Materia: nombre,
                    Asistencia: asistencia + "%",
                    "Promedio": promedio + "/10",
                    "Trabajos Entregados": materias[materia][3]+ "/" + trabajost,
                    "¿Aprueba?": (asistencia >= 90 && promedio >= 7 && trabajos >= 75) ? "Sí" : "No"
                });
    }
}



Aprobado();
console.table(datosTabla);