/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. 
miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. 
miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (
que se lee igual en un sentido que en otro), pe. 
mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. 
miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
//Ejercicio5
const invertirCadena = (cadena="")=>
 (!cadena)
    ? console.log("No ingresaste una cadena de texto.")
    : console.log(cadena.split("").reverse().join(""));

invertirCadena("Hola Mundo");
//Ejercicio6
const textoEnCadena = (cadena="", texto="")=>{
    if(!cadena) return console.log("La cadena esta vacía.");
    if(!texto) return console.log("No ingresaste la palabra a buscar.");
    let i = 0;
    let contador = 0;
    while(i!==-1){
        i=cadena.indexOf(texto,i);
        if(i!== -1){
            i++;
            contador++;
        };
    };
    return console.log(`La palabra ${texto} se repite ${contador} veces.`);
};
textoEnCadena("hola mundo adios mundo", "mundo");
//Ejercicio7
const palindromo = (palabra="")=>{
    if(!palabra) return console.log("No ingresaste una palabra o frase.");
    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");
    return (palabra === alReves)
        ? console.log("Si es palindromo.")
        : console.log("No es palindromo.");
};
palindromo("Hola");
//Ejercicio8
const eliminarCaracteres = (texto="",patron="")=>
    (!texto)
        ? console.log("No ingresaste un texto")
        : (!patron)
            ? console.log("No ingresaste un patron.")
            : console.log(texto.replace(new RegExp(patron, "ig"),""));

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");