// A) Las mesas de examen ya finalizaron y el profesor le tomó un último examen especial a Cofla, 
// ya Cofla hizo 2 pruebas más, pero lamentablemente se rompió el sistema de inscripción de notas, 
// por ende habrá que crear una solución a este problema, desarrollando una web que sea capaz de simular su funcionamiento.

// - Crear mini interfaz para introducir nota
// - Validar que no haya errores
// - Se debe promediar la nota del profesor con otras 2 notas de trabajos anteriores
// - Si el promedio es mayor a 7/10 -> Aprobó la materia

const boton = document.getElementById("boton");
const nota = document.getElementById("nota");
const mensaje = document.getElementById("mensaje");
const notasA =[6, 7];


boton.addEventListener("click", (e) => {
    let error = validarCampos();
    let resultado,texto;
    e.preventDefault();
    if(error[0]){
        
        mensaje.innerHTML = error[1];
        mensaje.classList.add("falso");
    }
        else{
          
            resultado = promedio(notasA[0], notasA[1], parseInt(nota.value));
            texto= verificarNota(resultado);
            mensaje.classList.remove("falso");
            mensaje.innerHTML = texto;
            mensaje.classList.add("verdadero");
        }
})

const validarCampos =()=>{
    let error = [];
    if (isNaN(nota.value)){
        error[0]=true;
        error[1]= "No colocoaste una nota ";
        return error;
    }
        else if(nota.value < 1 || nota.value > 10){
            error[0]=true;
            error[1]= "La nota debe estar entre 1 y 10";
            return error;
        }
     error[0]=false;
    return error;
}

const promedio = (nt1, nt2, nt3) => {  // funcion qeus aca promedio de las 3 notas
    let promedio = Math.round((nt1 + nt2 + nt3) / 3);
    console.log(promedio);
    return promedio;
}


const verificarNota = (nt) => { //claramente este proceso se puede hacer con if siendo mas optimo, pero queria practicar switch 
    nt = parseInt(nt);
    let resultado;
    switch(nt){
        case 1: resultado ="Alto botonazo, vas a tener que rendir de nuevo";
        break
        case 2: resultado ="Lo mismo sascaste un 2 el examen";
        break
        case 3: resultado ="Lo mismo sacaste un 3  el examen";
        break
        case 4: resultado ="Lo mismo sacaste un 4  el examen";
        break
        case 5: resultado ="Lo mismo sacaste un 5  el examen";
        break
        case 6: resultado ="Casi apruebas  el examen" ;
        break
        case 7: resultado ="aprobaste por poco el examen";
        break
        case 8: resultado ="Aprobaste chevere el examen";
        break
        case 9: resultado ="Excelente";
        break
        case 10: resultado ="Perfe";
        break
        default: resultado =null;
    }
    return resultado;
}
