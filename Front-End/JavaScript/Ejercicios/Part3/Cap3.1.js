// C) Cofla ya tiene su nuevo celular y ahora está mirando las aplicaciones del Play Store ya que quiere jugar juegos 
// que sean muy populares, que tengan buena puntuación y que pesen poco, pero las 7 apps que llamaron su atención 
// son un tanto similares y sabe que si se descarga todas, probablemente juegue con todas, 
// pero él se va a descargar solo 2 para no tener pérdidas innecesarias de tiempo jugando juegos con su celular.  
// Pero el problema viene cuando no puede decidirse cuál de todas estas aplicaciones es la que va a descargar.

// CREAR SOLUCIONES:
// - Crear un sistema que ayude a Cofla a decidir cuál app descargar.
// - La información de los instaladores debe contener la cantidad de descargas y la puntuación.
// - Las apps se deben poder instalar, abrir, cerrar y desinstalar.

class app {
    constructor(nombreApp,cantidadDescargas,puntuacion,peso){
        this.nombreApp = nombreApp;
        this.cantidadDescargas = cantidadDescargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalado = false;
        this.abierto = false

    }
    get infoApp(){
        return "Nombre de la App: " + this.nombreApp + "<br>" +
                       "Cantidad de descargas: " + this.cantidadDescargas + "<br>" +
                       "Puntuacion: " + this.puntuacion + "<br>" +
                       "Peso: " + this.peso + "<br>"
    }
    instalar(){
        if(this.instalado == false){
            alert("Instalando " + this.nombreApp )
            this.instalado = true
        }
            else {
                alert("Esta app ya ha sido instalada");
             
            }
           
    }
    desInstalar(){
        if(this.instalado == true){
            alert("Desinstalando " + this.nombreApp );
            this.instalado = false;
        }
            else{
                alert("Esta app no se encuentra en tu dispositivo");
             
            }
           
    }
    abrir(){
        if(this.instalado == true){
            alert("Abriendo " + this.nombreApp );
            this.abierto = true;
        }
            else{
                alert("No puedes abrir una app que no existe");
             
            }
    }
    cerrar(){
        if(this.instalado == true && this.abierto ==true){
            alert("Cerrando " + this.nombreApp );
        }
            else if (this.instalado == false){
                alert("No puedes cerrar una app que no existe");
             
            }
                else{
                    alert("La app ya esta cerrada")
                }
    }
}

const app1 = new app("Amazon", "100000", "5 Estrellas", "80MB");
const app2 = new app("WhatsApp", "500000", "4.5 Estrellas", "120MB");
const app3 = new app("Instagram", "450000", "4.7 Estrellas", "150MB");
const app4 = new app("Spotify", "300000", "4.6 Estrellas", "100MB");
const app5 = new app("TikTok", "600000", "4.8 Estrellas", "180MB");
const app6 = new app("YouTube", "550000", "4.9 Estrellas", "200MB");
const app7 = new app("Facebook", "400000", "4.2 Estrellas", "170MB");

app1.instalar();
app1.abrir();
app1.cerrar();
app1.desInstalar();


document.write(
    "App 1" + "<br>" + app1.infoApp + "<br>" +
    "App 2" + "<br>" + app2.infoApp + "<br>" +
    "App 3" + "<br>" + app3.infoApp + "<br>" +
    "App 4" + "<br>" + app4.infoApp + "<br>" +
    "App 5" + "<br>" + app5.infoApp + "<br>" +
    "App 6" + "<br>" + app6.infoApp + "<br>" +
    "App 7" + "<br>" + app7.infoApp + "<br>"
);
