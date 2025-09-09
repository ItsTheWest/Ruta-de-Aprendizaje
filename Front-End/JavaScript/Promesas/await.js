const obtenerInfo =(text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(text)},Math.random()*200)
          
}) }

// obtnemos la informacion de cada persona de manera desordenada ya que cada promesa se resuelve en un tiempo diferente
console.log("Orden desordenado en ocaciones")
obtenerInfo("1-Nelson").then((nombre)=>{console.log(nombre)}).catch((error)=>{console.log(error)})  
obtenerInfo("2-Alberto").then((nombre)=>{console.log(nombre)}).catch((error)=>{console.log(error)})
obtenerInfo("3-Lugo").then((nombre)=>{console.log(nombre)}).catch((error)=>{console.log(error)})


const mostrarInfo = async()=>{ // al usar el async nos permite usar el await dentro de la funcion y devolver una promesa
    let nombre1 = await obtenerInfo("1-Nelson"); // el await hace que la ejecucion de la funcion se pause hasta que la promesa se resuelva
    let nombre2 = await obtenerInfo("2-Juan");
    let nombre3 = await obtenerInfo("3-Karla");
    console.log("Orden correcto");
    console.log(nombre1);
    console.log(nombre2);
    console.log(nombre3);
}

