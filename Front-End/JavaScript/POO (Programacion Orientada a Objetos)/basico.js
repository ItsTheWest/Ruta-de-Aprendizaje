
// no se pude colora
//Definicion de una clases con su estructura para us atributos
class animal{
    constructor(especie,edad,color){  // el constructor,  Su función principal es inicializar los atributos (propiedades) del objeto.
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = "Soy " + this.especie + ", tengo " + this.edad +" años y soy de color " + this.color;
    }
    // esto es un metodo una accion que puede realizarse dentro de una clase
    verinfo (){
        document.write(this.info + "<br>");
    }
    //metodo que hace que los animales ladren pero si no es un perro no puede
    // se puede aprecia poliformismo ya que consiste en ver como se comporta la clase dependiendo del metodo de que usen
    mauyar (){
        if(this.especie == "gato"){
            document.write(" miau " + "<br>");
        }
        else{
            document.write("No puede mauyar ya que es un " + this.especie + "<br>");
        }
    }
}

class perros extends animal{ //herencia en las clases para adquirir porpiedads y metodos de una clase padre
    constructor(especie,edad,color,raza){
        super(especie,edad,color);     // super sirve e utiliza para acceder a métodos y propiedades de la clase padre (o superclase) desde una clase hija (subclase).
        this.raza = raza;
    }
    ladrar (){
        document.write("WAF")
    }
    static comer(){ // metodo que no necesita que la clase se defina para poder ser ejecutado ya que no usa ninguna propiedad
        alert("cuidado el perro se va a comer tu comida");
    }
    //los metodos seters y geters nos permiten acceder a propiedades privadas, es decir datos encapsulados
    set modificarRaza (nuevaRaza){ //set se usa para modificar y crear datos
        this.raza= nuevaRaza;
    }
    get obtenerInfo (){       //get para obtener datos
        return this.especie + (" ") + this.raza; 
    }
}

const perro = new perros("perro","12","blanco","pastor");
const gato = new animal ("gato","2","negro");
document.write(perro.obtenerInfo + "<br>");
 perro.modificarRaza = "pinche";
 document.write(perro.obtenerInfo + "<br>");

