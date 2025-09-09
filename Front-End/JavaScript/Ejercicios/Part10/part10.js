const materiasHTML = document.querySelector('.materias');

const materias = [
    {
        nombre: 'Matematicas',
        nota: 4,
    },
    {
        nombre: 'Fisica',
        nota: 6,
    },
    {
        nombre: 'Quimica',
        nota: 8,
    },
    {
        nombre: 'Historia',
        nota: 2,
    },
    {
        nombre: 'Lengua',
        nota: 10,
    },
    {
        nombre: 'Ingles',
        nota: 7,
    }
]

const obtenerMateria = (id)=>{
    return new Promise((resolve, reject)=>{ 
        let materia = materias[id];
        if(materias[id] === undefined){
            reject("No se ha encontrado la materia");
        }
            else{
                setTimeout(()=>resolve(materia), Math.random()*300);
            }
    })
}

obtenerMateria(0).then((materia)=>{
    console.log(materia);
}).catch((error)=>{
    console.log(error);
}); 

const devolverMaterias = async()=>{
    let materia =[];
    for (let i = 0; i < materias.length; i++) {
         materia[i]= await obtenerMateria(i);
        let htmlCode = ` <div class="materia">
          <div class="nombre">${materia[i].nombre}</div>
          <div class="nota">${materia[i].nota}</div>
        </div>
                `
            materiasHTML.innerHTML += htmlCode; 
    }
}

devolverMaterias();