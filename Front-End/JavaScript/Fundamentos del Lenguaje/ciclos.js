
let numero= 0;
let numero2= 10;
const animales = ["perro", "gato", "pez", "pajaro", "conejo"];
do {
    document.write(numero );
    numero++;
} while (numero<=11);

document.write("<br><br>"); // Salto de línea para separar los ciclos
while(numero2>=5){
    document.write(numero2 );
    numero2--;
    if(numero2==8){
        break; //termina el ciclo al llegar al numero 8
    }
}

document.write("<br><br>"); 

//cilo que permite iterar un numero de veces definida y permite saltar a la siguiente iteracion en la que esta el num 10
for(let i=0; i<=12; i++){
    if(i==10){
        continue;
    }
    document.write(i + ", ");
}
document.write("<br><br>"); 


//muestra la posicon en la que se encuentra el elemento
for(animal in animales){
    document.write(animal + ", ");
}
document.write("<br><br>"); 

//muestra cada elemento
for(animal of animales){
    document.write(animal + ", ")
}


