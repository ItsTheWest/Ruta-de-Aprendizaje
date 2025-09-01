// # A)  cofia reprobó 2 materias y ahora tiene que enviar 
// # un formulario para registrarse en la materia que debe.
// #
// # Requisitos:
// # - El formulario debe contener nombre completo, mail y materia adeudada.
// # - Se debe validar que el mail sea válido, que los nombres sean reales.
// # - Se debe enviar al servidor de manera pulida.

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", (e) => { 
     e.preventDefault(); // para que no envie el formulario
    let error = validarCampos(); // error es un array ya que necsitamos saber si es falso o no lavalidadion en la primera posicon en bolean y en la segunda el mensaje
        if(error[0]){
            mensaje.innerHTML = error[1];
            mensaje.classList.add("falso");
        }
        else{
            mensaje.classList.remove("falso");// se coloque para reomver la clase anterior en caso de que haya sido falso
            mensaje.innerHTML = "Formulario enviado con éxito";
            mensaje.classList.add("verdadero");
          
        }

})

const validarCampos = () => {
    let error=[];
    if(nombre.value.length < 5 || nombre.value.length > 20)
    {
        error[0]=true;
        error[1]= "El nombre no es valido";
        return error;
    }
        else if(email.value.length < 5 || email.value.length > 30 || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1  ){
        error[0]=true; // definimos el error como true y le mandamos el mensaje
        error[1]= "El email no es valido"
        return error;
        }
        else if(materia.value.length < 5 || materia.value.length > 20){
            error[0]=true;
            error[1]= "La materia no es valida";
            return error;
        }
    error[0]=false;
    return error;
}