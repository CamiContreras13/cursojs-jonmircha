/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. 
miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una 
cantidad dada, pe. 
miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta 
el día de hoy, pe. 
miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/
//Ejercicio15
const convertirBinarioDecimal =(numero=undefined,base=undefined)=> {
    if(numero===undefined) return console.log("No ingresaste el numero a convertir.");
    if(typeof numero !== "number") return console.log("El valor ingresado no es un número.");
    if(base === undefined) return console.log("No ingresaste la base a convertir.");
    if(typeof base !== "number") return console.log("El valor ingresado no es un número.");
    if(base === 2){
        return console.log(`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
    } else if(base === 10){
        return console.log(`${numero} base ${base} = ${numero.toString(2)} base 2`);
    } else {
        return console.log("El tipo de base a convertir no es válido.");
    };
};
//Ejercicio16
const aplicarDescuento = (monto=undefined, descuento=0) => {
    if(monto===undefined) return console.log("No ingresaste el monto.");
    if(typeof monto !== "number") return console.log("El valor ingresado no es un número.");
    if(monto===0 || monto <0) return console.log("El monto no puede ser cero ó negativo.");
    if(typeof descuento !== "number") return console.log("El valor ingresado no es un número.");
    if(descuento < 0) return console.log("El descuento no puede ser negativo.");
    return console.log(`${monto}-${descuento}% = ${monto-((monto*descuento)/100)}`);
};
aplicarDescuento(1000,20);
//Ejercicio17
const calcularAnios = (fecha=undefined) => {
    if(fecha===undefined)return console.log("No ingresaste la fecha.");
    if(!(fecha instanceof Date)) return console.log("El valor que ingresaste no es una fecha válida.");
    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosEnMS = 1000*60*60*24*365;
    aniosHumanos = Math.floor(hoyMenosFecha /aniosEnMS);
    return (Math.sign(aniosHumanos===-1))
        ? console.log(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        : console.log(Math.sign(aniosHumanos) === 1)
            ? console.log(`Han pasado ${aniosHumanos}años, desde ${fecha.getFullYear()}.`)
            : console.log(`Estamos en el año actual ${fecha.getFullYear()}.`);
};
calcularAnios(new Date(1998,1,13));