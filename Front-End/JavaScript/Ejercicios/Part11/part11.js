// Cofla ya está cursando su último semestre en la universidad. 
// Efectivamente tuvo todo lo necesario para pasar de año, peeero él tiene una duda, 
// quiere saber cuántas personas que cursan el último semestre se reciben y cuántas no. 
// Esta información la tiene de su universidad a la que él tiene fácil acceso.
//
// - Crear un sistema para obtener esa información
// - Mostrarla ordenadamente en un sitio 
const getInfor = async () => {
    try {
        // Pedimos el archivo con axios
        const resultado = await axios("alumnos.txt");

        console.log(resultado.data); 
        // Insertamos en el DOM los valores correctos
        document.querySelector(".num-aprobados").innerHTML = resultado.data.aprobados;
        document.querySelector(".num-reprobados").innerHTML = resultado.data.desaprobados;
    } catch (error) {
        console.error("Error al obtener la información");
    }
}

document.getElementById("infobtn").addEventListener("click", getInfor);
