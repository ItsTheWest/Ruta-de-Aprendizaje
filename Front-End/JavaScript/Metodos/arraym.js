 // Definimos un array inicial para usar en los ejemplos
 let arrayOriginal = [1, 2, 3, 4, 5];
 let array = [...arrayOriginal]; // Copia para no modificar el original

 document.write("<h3>🔹 Métodos Transformadores</h3>");

 // pop() - Elimina el último elemento
 array = [...arrayOriginal];
 let resultado = array.pop();
 document.write("pop: Elemento eliminado = " + resultado + " | Array actualizado: " + array + "<br>");

 // shift() - Elimina el primer elemento
 array = [...arrayOriginal];
 resultado = array.shift();
 document.write("shift: Elemento eliminado = " + resultado + " | Array actualizado: " + array + "<br>");

 // push() - Añade elementos al final
 array = [...arrayOriginal];
 array.push(6, 7);
 document.write("push: Array actualizado = " + array + "<br>");

 // unshift() - Añade elementos al inicio
 array = [...arrayOriginal];
 array.unshift(0, -1);
 document.write("unshift: Array actualizado = " + array + "<br>");

 // reverse() - Invierte el array
 array = [...arrayOriginal];
 array.reverse();
 document.write("reverse: Array invertido = " + array + "<br>");

 // sort() - Ordena el array (por defecto como strings)
 array = [3, 1, 4, 2];
 array.sort();
 document.write("sort (por defecto): " + array + "<br>");

 // sort con función comparadora
 array = [3, 1, 4, 2];
 array.sort((a, b) => a - b);
 document.write("sort (con función comparadora): " + array + "<br>");

 // splice() - Cambia contenido (eliminar, reemplazar, insertar)
 array = [...arrayOriginal];
 array.splice(1, 2); // Elimina 2 elementos desde el índice 1
 document.write("splice (eliminar): " + array + "<br>");

 array = [...arrayOriginal];
 array.splice(2, 0, "a", "b"); // Inserta elementos en índice 2
 document.write("splice (insertar): " + array + "<br>");

 array = [...arrayOriginal];
 array.splice(1, 2, "x", "y"); // Reemplaza desde índice 1
 document.write("splice (reemplazar): " + array + "<br>");

 document.write("<h3>🔹 Métodos Accesores</h3>");

 // join() - Une elementos en cadena con separador
 array = ["manzana", "banana", "pera"];
 resultado = array.join(" - ");
 document.write("join: " + resultado + "<br>");

 // slice() - Devuelve una parte del array
 array = [...arrayOriginal];
 resultado = array.slice(1, 4);
 document.write("slice: " + resultado + "<br>");

 document.write("<h3>🔹 Métodos de Repetición</h3>");

 // filter() - Filtra elementos que cumplan condición
 array = [...arrayOriginal];
 resultado = array.filter(num => num > 2);
 document.write("filter (números > 2): " + resultado + "<br>");

 // forEach() - Ejecuta una función para cada elemento
 array = [...arrayOriginal];
 document.write("forEach (imprime cada elemento):<br>");
 array.forEach((num, index) => {
   document.write(`Índice ${index}: ${num}<br>`);
 });