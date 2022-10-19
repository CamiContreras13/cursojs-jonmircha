
/*
8) Programa una función que dada una cadena de texto cuente el 
número de vocales y consonantes, pe. miFuncion("Hola Mundo") 
devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre 
válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email 
válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
//Ejercicio18
const contarLetras = (cadena ="") => {
    if(!cadena) return console.log("No ingresaste una cadena de texto");
    if(typeof cadena !== "string") return console.log("El valor ingresado no es una cadena de texto");
    let vocales = 0;
    let consonantes = 0;
    for(let letra of cadena){
        if(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/.test(letra)){
            vocales++;
        };
        if(/[BCDFGHJKLMNÑPQRSTVWXYZbcdfghjklmnñpqrstvwxyz]/.test(letra)){
            consonantes++;
        };
    };
    return console.log({
        cadena,
        vocales,
        consonantes
    });
};
contarLetras("Hola mundo");
//Ejercicio19
const validarNombre = (nombre="")=>{
    if(!nombre) return console.log("No ingresaste un nombre.");
    if(typeof nombre !== "string") return console.log("El valor ingresado no es una cadena de texto.");
    let expReg = /^$[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);
    return (expReg)
        ? console.log(`"${nombre}" es un nombre válido.`)
        : console.log(`"${nombre}" no es un nombre válido.`); 
};
validarNombre("Camila Contreras");
//Ejercicio20
/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
const validarEmail = (email="")=>{
    if(!email) return console.log("No ingresaste un email.");
    if(typeof email !== "string") return console.log("El valor ingresado no es una cadena de texto.");
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    return (expReg)
        ? console.log(`"${email}" es un email válido.`)
        : console.log(`"${email}" no es un email válido.`); 
};
validarEmail("cami_mc98@hotmail.com");