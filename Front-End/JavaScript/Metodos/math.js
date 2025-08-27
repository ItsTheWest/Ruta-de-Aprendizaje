document.write("<h3>🔹 Métodos de cálculo</h3>" );

//raiz cuadradad de un numero
let numero = Math.sqrt(169);
document.write("Sqrt: "+numero + "<br>");

//raiz cubica de un número
numero = Math.cbrt(25);
document.write("Cbrt: "+numero + "<br>");

//solo traba estrictamente con numeros y devuelve el numero mas grande
numero = Math.max(25,10,30,100);
document.write("Max: "+numero + "<br>");

//solo traba estrictamente con numeros y devuelve el numero mas pequeño
numero = Math.min(25,10,30,100);
document.write("Min: "+numero + "<br>");

//devuelve un numero entre 0 y 1 de manera aleatoria si lo multiplicas por un numero te duevle un numero entre 0 y el mismo
numero = Math.random()*100;
document.write("Ramdom: "+numero + "<br>");

numero = Math.round(numero);
document.write("Ramdom: "+numero + "<br>");