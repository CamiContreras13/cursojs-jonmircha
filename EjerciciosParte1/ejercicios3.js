/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de todos los números enteros 
positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/
//Ejercicio 9
const aleatorio = () => console.log(Math.round((Math.random()*100)+500));
aleatorio();
//Ejercicio10
const capicua = (numero=0)=>{
    if(!numero) return console.log("No ingresaste un número.");
    if(typeof numero !== "number") return console.log("El valor ingresado no es un número.");
    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");
    return (numero === alReves)
        ? console.log("Si es capicúa el nro: "+numero)
        : console.log("No es capicúa el nro: "+numero);
};
capicua(2002);
//Ejercicio11
const factorial = (numero = undefined) => {
    if(numero === undefined) return console.log("No ingresaste un número.");
    if(typeof numero !== "number") return console.log("El valor ingresado no es un número.");
    if(numero===0 || numero<0) return console.log("El número no puedo ser cero o negativo.");
    let factorial = 1;
    for(let i=numero; i>1;i--){
        factorial*= i;
    }
    return console.log("El factorial de "+numero+" es "+factorial);
}
factorial(5);