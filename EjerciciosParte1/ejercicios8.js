/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. 
miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. 
miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. 
promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
//Ejercicio24
const ordenarArreglo =(arr=undefined)=>{
    if(arr===undefined) return console.log("No ingresaste un arreglo de números.");
    if(!(arr instanceof Array)) return console.log("El valor que ingresaste no es un arreglo.");
    if(arr.length===0) return console.log("El arreglo está vacío.");
    for(let num of arr){
        if(typeof num !== "number") return console.log(`El valor ingresado "${num}", no es un número.`);
    };
    return console.log({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el=> el).sort().reverse()
    });
};
ordenarArreglo([1,2,6,6,3,2,8,2,1]);
//Ejercicio25
const quitarDuplicados=(arr=undefined)=>{
    if(arr===undefined) return console.log("No ingresaste un arreglo de números.");
    if(!(arr instanceof Array)) return console.log("El valor que ingresaste no es un arreglo.");
    if(arr.length===0 || arr.length===1) return console.log("No se puede ingresar un arreglo vacío o con un solo elemento.");
    return console.log({
        original: arr,
        sinDuplicados: [new Set(arr)]
    });
};
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);
//Ejercicio26
const promedio =(arr=undefined)=>{
    if(arr===undefined) return console.log("No ingresaste un arreglo de números.");
    if(!(arr instanceof Array)) return console.log("El valor que ingresaste no es un arreglo.");
    if(arr.length===0) return console.log("El arreglo está vacío.");
    for(let num of arr){
        if(typeof num !== "number") return console.log(`El valor ingresado "${num}", no es un número.`);
    };
    return console.log(
        arr.reduce((total,num,index,arr)=>{
            total += num;
            if(index === arr.length-1){
                return `El promedio de ${arr.join(" + ")} es igual a: ${total/arr.length}.`
            } else {
                return total;
            };
        })
    );
};
promedio([9,8,7,6,5,4,3,2,1,0]);