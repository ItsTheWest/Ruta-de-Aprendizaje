/*
3 chicos de 23 años perfectamente normales entran a una heladería a comprar un helado pero hay un problema:
los precios no están al lado de cada estante con su respectivo helado.
Ellos quieren comprar el helado más caro que puedan con la plata que tienen, así que... veamos cómo podemos ayudarlos.

Roberto tiene $1.5 USD
Pedro tiene $1.7 USD
Cofla tiene $3 USD

Los precios de helados son los siguientes:
- Palito de helado de agua: $0.6 USD
- Palito de helado de crema: $1 USD
- Bombón helado marca heladix: $1.6 USD
- Bombón helado marca heladovich: $1.7 USD
- Bombón helado marca helardo: $1.8 USD
- Potecito de helado con confites: $2.9 USD
- Pote de 1/4 KG -> $2.9 USD

CREAR SOLUCIONES:
- Pedirles que ingresen el monto que tienen y mostrarles el helado más caro que puedan comprar.
- Si hay 2 o más con el mismo precio, mostrar ambos.
- Cofla quiere saber cuánto es el vuelto.
*/

//definir la lista de helados mediante un array asociativo
const listaHelados= [
    {nombre: "Palito de helado de agua", precio: 0.6},
    {nombre: "Palito de helado de crema", precio: 1},
    {nombre: "Bombón helado marca heladix", precio: 1.6},
    {nombre: "Bombón helado marca heladovich", precio: 1.7},
    {nombre: "Bombón helado marca helardo", precio: 1.8},
    {nombre: "Potecito de helado con confites", precio: 2.9},
    {nombre: "Pote de 1/4 KG", precio: 2.9},
]

//se realiza una fincion que indica el helado mas caro que puede comprar cada persona
const comprarhelado = (nombre) => { //se define el nombre de la persona mediante una variable (nombre)
    let dinero = parseFloat(prompt("Ingrese el monto que tiene " + nombre));   //se define el dinero que tiene la persona mediante una variable (dinero)
    let heladoElegido = null; //se define el helado que puede comprar la persona mediante una variable (heladoElegido) que principalmente es nula ya que no se sabe cual es el helado que puede comprar la persona
    
    //se recorre el array de helados mediante un metodo de busqueda lineal
    for (let i = 0; i < listaHelados.length; i++) { //se recorre el array de helados mediante un metodo de busqueda lineal
        if (dinero >= listaHelados[i].precio) { //se compara el dinero que tiene la persona con el precio del helado
            heladoElegido = listaHelados[i]; //se asigna el helado que puede comprar la persona a la variable (heladoElegido)
        }
    }

    if (heladoElegido) {
        // Verificar si puede comprar helados de $2.9 (hay dos opciones)
        if (heladoElegido.precio === 2.9) {
            document.write(nombre + ": Los helados mas caros que puedes comprar son: " + listaHelados[5].nombre + " y " + listaHelados[6].nombre + "<br>");
            if (nombre === "Cofla") {
                let vuelto = (dinero - heladoElegido.precio);
                document.write("El vuelto de Cofla es: " + vuelto.toFixed(2) + "<br>");
            }
        } else {
            document.write(nombre + ": El helado más caro que puede comprar es: " + heladoElegido.nombre + "<br>");
            if (nombre === "Cofla") {
                let vuelto = (dinero - heladoElegido.precio);
                document.write("El vuelto de Cofla es: " + vuelto.toFixed(2) + "<br>");
            }
        }
    }

        else 
        {
        document.write(nombre + ": No puedes comprar ningún helado<br>");
        }
};


console.log(comprarhelado("Roberto"));
console.log(comprarhelado("Pedro"));
console.log(comprarhelado("Cofla"));

