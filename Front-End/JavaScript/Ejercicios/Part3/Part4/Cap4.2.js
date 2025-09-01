/*
    Cofla ya vio las 12 materias y se decidió en cuál se va a inscribir, así que en tres días lo hará.
    El problema es que se rompió el sistema de inscripciones.

    CREAR SOLUCIONES:

    - Crear una función para preguntarle a Cofla en qué materia se quiere inscribir.
    - Si ya hay 20 alumnos anotados en la materia, negarle la inscripción.
    - Si hay menos de 20 alumnos, inscribir a Cofla y añadirlo a la lista de alumnos.
*/

const materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","cofla","joseito"]
}

const inscribir = (alumno,materia)=>{
     personas = materias[materia];
     personas.shift();
     alumnos = personas;
       if(alumnos.length >=20){
                alert("No puedes inscribirte ya que la nomina esta llena")
            }
        else if(alumnos.includes(alumno))
        {
            alert("No puedes inscribirte de nuevo ya que ya estas registrado")
        }
        else 
        {
            alumnos.push(alumno);
            materias[materia] = alumnos; // Actualiza la lista en el objeto
            alert(`Inscripción exitosa de ${alumno} en ${materia}`);
            alert("Lista actualizada: " + materias[materia]);
        }
      
}

let materiasDisponibles = Object.keys(materias).join(", ");
let persona= prompt("Nombre para inscripcion: ");
do {
    materiaI = prompt("Materia en la que te quieres inscribir:" + materiasDisponibles);
    if (!(materiaI in materias)) {
        alert("La materia ingresada no existe. Intenta de nuevo.");
    }
} while (!(materiaI in materias));

inscribir(persona,materiaI);
