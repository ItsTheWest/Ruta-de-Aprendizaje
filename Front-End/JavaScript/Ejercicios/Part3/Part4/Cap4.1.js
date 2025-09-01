/*
La facultad de Cofla está por comenzar y ya las 12 materias de la carrera tienen asignado un profesor 
y todos los alumnos que se anotaron en dichas clases.

Peeero, necesitamos ver esto de forma más ordenada.

CREAR SOLUCIONES:

- Crear una función que, al pasarle como parámetro la materia, nos devuelva:
    * El profesor asignado
    * El nombre de todos los alumnos

- Crear una función que nos diga en cuántas clases está Cofla.

- Nombrar las clases en las que está Cofla y los profesores de cada una.
*/

// el primer nombre de cada clase es el profesor asignado a la misma los demas sn estudiantes
const materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
}

const obtenerInformacion = (materia)=>{

if (materias[materia] !== undefined){
    return [materias[materia],materia,materias];
} else {
    return materias;
}
}

const mostrarInformacion = (materia)=>{
let informacion = obtenerInformacion(materia);

if (informacion !== false) {
let profesor = informacion[0][0]; // se define el profesor en el que esta la materia en la primera posicion que retorna la funcion anteriro es decir  materias[materia] que == fisica: ["Perez"],
alumnos = informacion[0]; // se definen los alumnos obteniendo toda la iformacion de l materia junto con el profesor que es ==     programacion: ["Dalto","pedro","juan","pepito"],
alumnos.shift(); // mediante el shift se quita el primera valor del array en este caso el profesor ==     programacion: [""pedro","juan","pepito"],
// se muestra la informacion
document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
    Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
    `);
}
}

const cantidadDeClases = (alumno)=>{c
let informacion = obtenerInformacion(); // se obtiene la informacion de todo el objeto
let clasesPresentes = []; // arreglo vacio para ser llenado con las clases en la que esta presente el alumno indicado
let cantidadTotal = 0;
//Esto es un bucle for...in, que recorre todas las propiedades (claves) del objeto informacion, que en este caso es el objeto materias
for (info in informacion) {
    if (informacion[info].includes(alumno)) { //informacion[info] accede al array correspondiente a cada materia. y includes(alumno) verifica si ese array contiene al alumno que estamos buscando.
        cantidadTotal++;
        clasesPresentes.push(" "+ info);
    }
}
return `<b style='color:blue'>
${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
<br><br>
`;
}


mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("pedro"))