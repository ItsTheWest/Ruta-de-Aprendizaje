// let nombre ="Juan";

// const promesa = new Promise((resolve, reject) => {
//     if (nombre !== "Juan") {
//         reject("El nombre es incorrecto"); //reject arroja un error en caso de que no se cumpla la promesa
//     }
//     else {
//         resolve("El nombre es " + nombre); //resolve devuelve el resultado de la promesa cuando se cumple
//     }
// });

// promesa.then((mensaje) => { // then permite acceder al resultado de la promesa cuando se cumple
//     console.log(mensaje);
// }).catch((error) => { // catch permite manejar el error en caso de que la promesa sea rechazada
//     console.log(error);
// });

class personas{
    constructor(nombre,ig){
        this.nombre = nombre;
        this.ig = ig;
    }
}

const datoPersonas = [
    ["Nelson","nelsonig"],
    ["Juan","juanig"],
    ["Karla","karlaig"],
    ["Ana","anaig"]
];

const persona = [];
for (let i = 0; i < datoPersonas.length; i++) {
     persona[i] = new personas(datoPersonas[i][0],datoPersonas[i][1]);
   }

const obtenernombre = (id) => {
    return new Promise((resolve, reject) => {
        if (persona[id].nombre === undefined) {
            reject("No se ha encontrado la persona");
        } else {
            resolve(persona[id]);
        }
    });
}
         // en esta parte hice dos funciones para que me arrojara el error dependiendo de si falta el ig o nombre ya  que
         // si lo hacia en una sola funcion no me arrojaba el error pero sin uno de los datos
const obtenerig = (id) => {
    return new Promise((resolve, reject) => {
        if (persona[id].ig === undefined) {
            reject("No se ha encontrado el instagram");
        } else {
            resolve(persona[id]);
        }
    });
}


let id =3
obtenernombre(id).then((persona) => {
    console.log(persona.nombre);
    return obtenerig(id);
}).then((persona) => { // obtenemos el resultado de la segunda promesa retornada por la funcion anterior
    console.log(persona.ig);
}).catch((error) => { // manejamos el error en caso de que alguna de las promesas sea rechazada
    console.log(error);
}   );