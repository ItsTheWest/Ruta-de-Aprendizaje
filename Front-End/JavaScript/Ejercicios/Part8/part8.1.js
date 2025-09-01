// B) Los datos de Cofla y de otros alumnos fueron recibidos y ya están almacenados, ahora hay que crear un sistema 
// que muestre esa información y se pueda asignar cuándo rinde.
// # La interfaz debe ser agradable y atractiva.
// # Debe contener todos los datos de manera estructurada.
// # El profesor puede seleccionar en cuál de las 2 semanas rinde el usuario.
// # Si el profesor confirma, los datos se deben actualizar y reemplazar el espacio de selección de semana por 
// la semana seleccionada.


const alumnos = [
    { nombre: "Juan", email: "j@a", carrera: "Matemáticas" },
    { nombre: "María", email:"m@a", carrera: "Física" },
    { nombre: "Pedro", email: "p@a", carrera: "Química" },
    { nombre: "Ana", email: "a@a", carrera: "Biología" },
    { nombre: "Luis", email: "l@a", carrera: "Historia" }
];

const boton = document.querySelector(".btn-confirmar");

for (alumno in alumnos) {
    datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let carrera = datos["carrera"];
    console.log(`Nombre: ${nombre}, Email: ${email}, Carrera: ${carrera}`);
    let htmlcode =`
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item carrera">${carrera}</div>
        <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
        </div>`
    document.querySelector(".grid-container").innerHTML += htmlcode;
}

boton.addEventListener("click", ()=> {
    let confirmar = confirm("¿Desea confirmar las semanas elegidas?");
    if (confirmar == true) {
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos) {
        semana = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value;
        }
        document.body.removeChild(boton);
    } 
})      

