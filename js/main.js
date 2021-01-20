"use strict";

//NIVELL1
//Exercici 1: Converteix a funcions fletxa

/*Funció 1*/
const multiply = (num1, num2) => num1 * num2;
//Compruebo que funciona
console.log(multiply(2,3));

/*Funció 2*/
const toCelsius = fahrenheit => (5/9) * (fahrenheit-32);
//Compruebo que funciona
console.log(toCelsius(66));

/*Funció 3*/
const padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
      numStr="0" + numStr; 
    } 
    return numStr;
}
//Compruebo que funciona
console.log(padZeros(12,10));

/*Funció 4*/
const power = (base, exponent) => {
    let result=1; 
    for (var i=0; i < exponent; i++) { 
        result *=base; 
    } 
    return result;
}
//Compruebo que funciona
console.log(power(5,2));

/*Funció 5*/
const greet = who => {
    console.log("Hello " + who);
}
//Compruebo que funciona
greet("Marc");

