// A) Cofla entró a una tienda que vende celulares porque le pareció bastante bueno comprarse un nuevo celular.
// De todos los modelos que hay disponibles en esa tienda, a Cofla le llamaron la atención 3 teléfonos específicamente.
// El problema es que ningún vendedor sabe nada al respecto entonces no pueden recomendarle absolutamente nada... pero claro:
// él antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos, ahí
// entramos nosotros.

// CREAR SOLUCIONES:
// - Crear un sistema para mostrarle a Cofla las particularidades de los 3 celulares.
// - Cada celular debe tener color, peso, resolución de pantalla, resolución de cámara y memoria RAM.
// - Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar.

class Celular {
    constructor(marca,color,peso,rdp,rdc,RAM){
        this.marca = marca;
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.RAM = RAM;
        this.encendido = false;
    }
     get obtenerInfo (){
      return  "Marca: " + this.marca + "<br>" + "Color: " + this.color + "<br>" + "Peso" + this.peso + "<br>" +
     "Resolucion de la pantalla: " + this.rdp + "<br>" + "Resolucion de camara: "+ 
     this.rdc + "<br>" + "RAM: " + this.RAM  + "<br>";
    }
     botonParaEncender(){
        if(this.encendido == false){
            alert("Celular encendido")
            this.encendido = true;
        }
            else{
                alert("El celular esta apagado")
            }
    }
    reiniciar (){
        if(this.encendido == true){
            alert("Reiniciado celular")
            this.encendido = true;
        }
        else{
            alert("No puedes reiniciar el celular esta apagado")
        }

    }
  
}


const samsung = new Celular("Samsung","Rojo", "180g", "1080x2400", "64MP", "6GB");
const motorola = new Celular("motorola","Azul", "200g", "720x1600", "48MP", "4GB");
const iphone = new Celular("iphone","Negro", "165g", "1440x3200", "108MP", "8GB");
document.write( "Celular 1" + "<br>" + samsung.obtenerInfo + "<br>");
document.write( "Celular 2" + "<br>" + motorola.obtenerInfo + "<br>");
document.write( "Celular 3" + "<br>" + iphone.obtenerInfo + "<br>");
