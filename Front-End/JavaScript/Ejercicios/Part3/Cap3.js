// A) Cofla entró a una tienda que vende celulares porque le pareció bastante bueno comprarse un nuevo celular.
// De todos los modelos que hay disponibles en esa tienda, a Cofla le llamaron la atención 3 teléfonos específicamente.
// El problema es que ningún vendedor sabe nada al respecto entonces no pueden recomendarle absolutamente nada... pero claro:
// él antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos, ahí
// entramos nosotros.

// CREAR SOLUCIONES:
// - Crear un sistema para mostrarle a Cofla las particularidades de los 3 celulares.
// - Cada celular debe tener color, peso, resolución de pantalla, resolución de cámara y memoria RAM.
// - Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar.

// 
// B) Cofla no está satisfecho con los celulares así que decide ir a la sección de celulares de alta gama,
// donde va a poder encontrar los celulares más caros del lugar, así que al entrar vio dos celulares que le encantaron.
// Estos 2 celulares de alta gama pueden hacer todo lo que podían hacer los 3 anteriores,
// pero tienen mejores características y además pueden grabar en cámara super lenta, 
// tienen reconocimiento facial y una cámara extra.

// CREAR SOLUCIONES:
// - Implementar todas estas cualidades en los celulares de alta gama
// 
class celular {
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
      return  "Marca: " + this.marca + "<br>" + "Color: " + this.color + "<br>" + "Peso: " + this.peso + "<br>" +
     "Resolucion de la pantalla: " + this.rdp + "<br>" + "Resolucion de camara: "+ 
     this.rdc + "<br>" + "RAM: " + this.RAM  + "<br>";
    }
     botonParaEncender(){
        if(this.encendido == false){
            alert(this.marca +"\nCelular encendido")
            this.encendido = true;
        }
            else if(this.encendido == true){
                alert(this.marca +  "\napagaste el celular");
                this.encendido = false;
            }
            else{
                alert(this.marca +  "\nEl celular esta apagado")
            }
    }
    reiniciar (){
        if(this.encendido == true){
            alert(this.marca + "\nReiniciado celular")
            this.encendido = true;
        }
        else{
            alert( this.marca + "\nNo puedes reiniciar el celular esta apagado")
        }

    }
    foto(){
        if(this.encendido == true){
            alert( this.marca +"\nToma una foto en resolucion de " + this.rdc)
        
        }
        else{
            alert(this.marca  + "\nNo puedes tomar una foto el celular esta apagado")
        }
    }
    grabar(){
        if(this.encendido == true){
            alert(this.marca +  "\nEmpezando a grabar en resolucion de " + this.rdc)
        }
        else{
            alert(this.marca + "\nNo puedes grabar, el celular esta apagado")
        }
    }
  
}

class celularAltaGama extends celular{
    constructor(marca,color,peso,rdp,rdc,RAM,rdce){
        super(marca,color,peso,rdp,rdc,RAM)
        this.rdce =rdce;
    }
    get obtenerInfo2 (){
      return this.obtenerInfo + "Resolucion de camara extra" + this.rdce + "<br>";
      }
    grabarLento(){
        if(this.encendido == true){
            alert(this.marca + "\nEmpezando a grabar lento en resolucion de " + this.rdc)
        }
        else{
            alert( this.marca + "\nNo puedes grabar, el celular esta apagado")
        }
    }
    faceId(){
        if(this.encendido == true){
            alert( this.marca + "\nEmpezando a hacer reconocimiento facial " )
        }
        else{
            alert( this.marca + "\nNo puedes hacer reconocimiento, el celular esta apagado")
        }
    }

}

const celular1 = new celular("Samsung","Rojo", "180g", "1080x2400", "64MP", "6GB");
const celular2 = new celular("motorola","Azul", "200g", "720x1600", "48MP", "4GB");
const celular3 = new celular("iphone","Negro", "165g", "1440x3200", "108MP", "8GB");
const celular4 = new celularAltaGama("Xiaomi", "Gris", "179g", "2400x1080", "108MP", "12GB", "4k");
const celular5 = new celularAltaGama("Infinix-HOT", "Azul", "192g", "2712x1220", "200MP", "16GB","5k");


celular5.botonParaEncender();
celular5.foto();
celular5.botonParaEncender();
celular5.faceId();

document.write( "Celular 1" + "<br>" + celular1.obtenerInfo + "<br>" +
                "Celular 2" + "<br>" + celular2.obtenerInfo + "<br>"+
                "Celular 3" + "<br>" + celular3.obtenerInfo + "<br>" +
                "Celular 4" + "<br>" + celular4.obtenerInfo2 + "<br>" +
                "Celular 5" + "<br>" + celular5.obtenerInfo2 + "<br>"
);
