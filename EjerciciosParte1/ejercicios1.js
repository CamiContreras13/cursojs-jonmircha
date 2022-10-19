/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. 
miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. 
miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por 
cierto caracter, pe. 
miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. 
miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/
//Ejercicio1
function cuentoCaracteres(texto = ""){
    if(!texto){
        console.log("No ingresaste ningún texto");
    } else {
        console.log(`El texto "${texto}" tiene ${texto.length} caracteres.`);
    };
};
cuentoCaracteres("Hola Mundo");
//Ejercicio2
const recortarTexto = (cadena="", longitud= undefined) =>
    (!cadena)
    ? console.log("No ingresaste una cadena de texto")
    : console.log(cadena.slice(0,longitud));

recortarTexto("Hola Mundo",4);
//Ejercicio3
const cadenaAArreglo = (cadena="",separador=undefined) => 
    (!cadena)
        ? console.log("No ingresaste una cadena de texto")
        : (separador === undefined)
            ? console.log("No ingresaste el caracter separador.")
            : console.log(cadena.split(separador));

cadenaAArreglo("Lorem nfunewu efeuf er efeuef buefbwe", "");
//Ejercicio4
const repetirTexto = (texto="",veces= undefined) => {
    if(!texto){
        return console.log("No ingresaste un texto.");
    }; 
    if(veces === undefined){
        return console.log("No ingresaste el nro de veces a repetir el texto.");
    };
    if(veces === 0 || veces < 0){
        return console.log("El nro de veces no puede ser 0 ó negativo.");
    };
    for(let i=0; i<=veces; i++){
        console.log(`${texto}, ${i}`);
    }
};
repetirTexto("hola", 7);