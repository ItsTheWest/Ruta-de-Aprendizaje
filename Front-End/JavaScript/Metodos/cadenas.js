// concat() - Junta dos o más cadenas y da como resultado una nueva
let cadena = "Cadena de prueba ";
let resultado = cadena.concat(" hola");
document.write("concat: " + resultado + "<br>");

// startsWith() - Verifica si una cadena comienza con determinados caracteres
resultado = cadena.startsWith("Cadena");
document.write("startsWith: " + resultado + "<br>");

// endsWith() - Verifica si una cadena termina con determinados caracteres
resultado = cadena.endsWith("prueba");
document.write("endsWith: " + resultado + "<br>");

// includes() - Verifica si una cadena contiene un texto específico
resultado = cadena.includes("de");
document.write("includes: " + resultado + "<br>");

// indexOf() - Devuelve el índice del primer carácter encontrado
resultado = cadena.indexOf("e");
document.write("indexOf: " + resultado + "<br>");

// lastIndexOf() - Devuelve el último índice de un carácter específico
resultado = cadena.lastIndexOf("e");
document.write("lastIndexOf: " + resultado + "<br>");

// padStart() - Rellena la cadena al principio hasta alcanzar cierta longitud
resultado = cadena.padStart(25, "*");
document.write("padStart: " + resultado + "<br>");

// padEnd() - Rellena la cadena al final hasta alcanzar cierta longitud
resultado = cadena.padEnd(25, "*");
document.write("padEnd: " + resultado + "<br>");

// repeat() - Repite la cadena la cantidad de veces que indiquemos
resultado = cadena.repeat(2);
document.write("repeat: " + resultado + "<br>");

// split() - Divide la cadena en partes según lo que indiquemos
resultado = cadena.split(" ");
document.write("split: " + resultado + "<br>");

// substring() - Extrae una parte de la cadena entre dos índices
resultado = cadena.substring(0, 6);
document.write("substring: " + resultado + "<br>");

// toLowerCase() - Convierte la cadena a minúsculas
resultado = cadena.toLowerCase();
document.write("toLowerCase: " + resultado + "<br>");

// toUpperCase() - Convierte la cadena a mayúsculas
resultado = cadena.toUpperCase();
document.write("toUpperCase: " + resultado + "<br>");

// toString() - Convierte otro tipo de datos en cadena de texto
let numero = 123;
resultado = numero.toString();
document.write("toString: " + resultado + "<br>");

// trim() - Elimina espacios en blanco al inicio y al final
let cadenaEspaciada = "   Hola mundo   ";
resultado = cadenaEspaciada.trim();
document.write("trim: " + resultado + "<br>");

// trimEnd() - Elimina espacios en blanco al final de la cadena
cadenaEspaciada = "Hola mundo    ";
resultado = cadenaEspaciada.trimEnd();
document.write("trimEnd: " + resultado + "<br>");

// trimStart() - Elimina espacios en blanco al inicio de la cadena
cadenaEspaciada = "    Hola mundo";
resultado = cadenaEspaciada.trimStart();
document.write("trimStart: " + resultado + "<br>");

// valueOf() - Devuelve el valor primitivo de una cadena (igual al texto)
let textoObjeto = new String("Texto simple");
resultado = textoObjeto.valueOf();
document.write("valueOf: " + resultado + "<br>");