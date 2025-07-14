//operadores de comparacion (para comparar valores) devolviendo un valor bollean (true o false)
let numero1= 10;
let numero2= 20;
console.log("Es igual a:", numero1 == numero2); //comparacion de igualdad
console.log("Es diferente a:", numero1 != numero2); //comparacion de desigualdad
console.log("Es mayor que:", numero1 > numero2); //comparacion de mayor que
console.log("Es menor que:", numero1 < numero2); //comparacion de menor que
console.log("Es mayor o igual que:", numero1 >= numero2); //comparacion de mayor o igual que
console.log("Es menor o igual que:", numero1 <= numero2); //comparacion de menor o igual que


//operadores logicos
let afirmacion1= numero1 == numero2;
let afirmacion2= numero1 !=numero2;
console.log(afirmacion1 && afirmacion2) //si cualquier valor es falso entoces el reusltado sera falso
console.log(afirmacion1 || afirmacion2) //si cualquier valor es verdadero entoces el reusltado sera verdadero
console.log(!afirmacion1) //si el valor es verdadero entoces el reusltado sera falso y viceversa