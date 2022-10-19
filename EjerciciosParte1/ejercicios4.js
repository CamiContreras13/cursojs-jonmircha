/*
12) Programa una función que determine si un número es primo 
aquel que solo es divisible por sí mismo y 1) o no, pe. 
miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. 
miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. 
miFuncion(0,"C") devolverá 32°F.
*/
//Ejercicio12
const numeroPrimo = (numero=undefined)=> {
    if(numero === undefined) return console.log("No ingresaste un número.");
    if(typeof numero !== "number") return console.log("El valor ingresado no es un número.");
    if(numero===0 || numero<0 || numero===1) return console.log("El número no puedo ser cero, uno ó negativo.");
    let divisible = false;
    for(let i=2;i<numero; i++){
        if((numero % i)===0){
            divisible = true;
            break;
        };
    };
    return (divisible)
        ? console.log("El numero "+numero+" no es primo.")
        : console.log("El numero "+numero+" es primo.");
};

numeroPrimo(13);
//Ejercicio13
const numeroParImpar = (numero=undefined)=> {
    if(numero === undefined) return console.log("No ingresaste un número.");
    if(typeof numero !== "number") return console.log("El valor ingresado no es un número.");
    return((numero%2) === 0)
        ? console.log("El numero ingresado es par.")
        : console.log("El numero ingresado es impar.");
};
numeroParImpar(40);
//Ejercicio14
const convertirGrados = (grados=undefined, unidad=undefined)=>{
    if(grados===undefined) return console.log("No ingresaste grados a convertir.");
    if(typeof grados !== "number") return console.log("El valor ingresado no es un número.");
    if(unidad===undefined) return console.log("No ingresaste el tipo de grado a convertir.");
    if(typeof unidad!=="string") return console.log("El valor ingresado no es una cadena de texto.");
    if(unidad.length !== 1 || !/C|F/.test(unidad)) return console.log("Valor inválido.");
    if(unidad === "C"){
        return console.log(`${grados}°C = ${Math.round(grados*(9/5)+32)}°F`);
    };
    if(unidad === "F"){
        return console.log(`${grados}°F = ${Math.round(((grados-32)*(5/9)))}°C`);
    };
};